import { createHash } from "crypto";
import fs from "fs/promises";
import { join } from "path";

const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

async function makeClaudeRequest(system: string, messages: ClaudeMessage[], apiKey: string) {
    const headers = {
        "Anthropic-Version": "2023-06-01",
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
    };

    const body = JSON.stringify({
        max_tokens: 4096,
        // https://docs.anthropic.com/claude/docs/models-overview
        // model: 'claude-3-opus-20240229',
        model: "claude-3-sonnet-20240229",
        // model: 'claude-3-haiku-20240307'
        messages,
        system,
    });

    try {
        const response = await fetch(CLAUDE_API_URL, {
            method: "POST",
            headers,
            body,
        });

        if (!response.ok) {
            console.error(await response.text());
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        let content = data.content?.[0]?.text;

        if (!content || typeof content !== "string") {
            throw new Error("No content found in the API response");
        }

        return content;
    } catch (error) {
        console.error("Error calling Claude API:", error);
        throw error;
    }
}

export interface ClaudeMessage {
    role: "assistant" | "user";
    content: string;
}

export async function sendPromptToClaude(
    system: string,
    messages: ClaudeMessage[],
    apiKey: string,
    useCache: boolean = true
): Promise<string> {
    const cacheHash = createHash("sha256");
    cacheHash.update(JSON.stringify({ system, messages }));
    const cacheKey = cacheHash.digest("hex");
    const cacheDirectory = join(process.cwd(), ".claude_cache");
    await fs.mkdir(cacheDirectory, { recursive: true });
    const cacheFile = join(cacheDirectory, `${cacheKey}.cache.txt`);
    if (useCache) {
        try {
            const cacheStat = await fs.stat(cacheFile);
            if (cacheStat.size > 0) {
                return JSON.parse(
                    await fs.readFile(cacheFile, {
                        encoding: "utf-8",
                    })
                );
            }
        } catch (e) {
            // assume cache doesn't exist
        }
    }
    const result = await sendPrompt(system, messages, apiKey);
    await fs.writeFile(cacheFile, JSON.stringify(result), {
        encoding: "utf-8",
    });
    return result;
}

async function sendPrompt(system: string, messages: ClaudeMessage[], apiKey: string): Promise<string> {
    let content = await makeClaudeRequest(system, messages, apiKey);

    if (!content || typeof content !== "string") {
        throw new Error("No content found in the API response");
    }

    return content;
}
