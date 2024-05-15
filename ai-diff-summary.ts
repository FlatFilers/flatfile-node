const claudeApiKey = "";

import * as fs from "fs";
import * as path from "path";
import { sendPromptToClaude } from "./claude-ai";

let totalCount = 0;

async function processFile(
    filePath: string,
    extension: string,
    callback: (fileContent: string) => Promise<string>,
    apiKey: string
) {
    if (path.extname(filePath).toLowerCase() === extension) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const prompt = await callback(fileContent);
        const resultFilePath = `${filePath}.result.md`;

        if (!fs.existsSync(resultFilePath)) {
            console.log(`Processing ${filePath}...`);
            try {
                totalCount++;
                if (totalCount > 4) {
                    console.log("SKIP " + filePath);
                    return;
                }
                const claudeResponse = await sendPromptToClaude(
                    `You are an AI assistant responsible for writing release notes. You'll be given a git diff of a TypeScript Node API, from that write detailed release notes that summarize the changes made in the diff, especially noting any external interface changes in detail. Use backticks to represent code blocks or property names in the output text. Each section of the release notes should have a level-4 header (####). Only write release notes that are relevant to a consumer of the package. Do not reference anything internal-only, do not reference file names. If there are no changes to a section, omit that section from the output. If there are general changes, include them at the start of the output. Relate the changes to the relevant section of the FlatfileClient API, if appropriate, as follows:
Accounts
Agents
Apps
Assistant
Auth
Cells
Commits
DataRetentionPolicies
Documents
Entitlements
Environments
Events
Files
Foreigndb
Guests
Jobs
Mapping
Records
Roles
Secrets
Sheets
Snapshots
Spaces
Users
Versions
Views
Workbooks`,
                    [{ role: "user", content: prompt }],
                    apiKey
                );
                fs.writeFileSync(resultFilePath, claudeResponse);
                console.log(`Processed ${filePath} and saved the result to ${resultFilePath}`);
            } catch (error) {
                console.error(`Error processing ${filePath}: ${error}`);
            }
        } else {
            console.log(`Result file ${resultFilePath} already exists, skipping...`);
        }
    }
}

async function processDirectory(
    dirPath: string,
    extension: string,
    callback: (fileContent: string) => Promise<string>,
    apiKey: string
) {
    const files = fs.readdirSync(dirPath);
    const promises: Promise<void>[] = [];

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            promises.push(processDirectory(filePath, extension, callback, apiKey));
        } else {
            promises.push(processFile(filePath, extension, callback, apiKey));
        }
    }

    await Promise.all(promises);
}

// Usage example
const directoryPath = "./release-notes";
const fileExtension = ".txt";

const promptCallback = async (fileContent: string): Promise<string> => {
    // Generate the prompt based on the file content
    // This is just an example, you can modify it as needed
    return `Generate a summary of changes for the following text diff: ${fileContent}`;
};

processDirectory(directoryPath, fileExtension, promptCallback, claudeApiKey).catch((error) =>
    console.error("Error:", error)
);
