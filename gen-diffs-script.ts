import fs from "node:fs";

const versions = [
    "1.6.3",
    "1.6.4",
    "1.6.5",
    "1.6.6",
    "1.6.7",
    "1.7.0",
    "1.7.1",
    "1.7.10",
    "1.7.11",
    "1.7.2",
    "1.7.3",
    "1.7.4",
    "1.7.5",
    "1.7.6",
    "1.7.7",
    "1.7.8",
    "1.8.0",
    "1.8.2",
    "1.8.3",
    "1.8.4",
    "1.8.5",
    "1.8.6",
    "1.8.9",
];

let script: string[] = [];
let compareVersion = "1.6.2";

for (const version of versions) {
    script.push(
        `( git diff --no-color -U1 ${compareVersion}..${version} ':!yarn.lock' ) | grep -v '"X-' > release-notes/${version}.diff.txt`
    );
    compareVersion = version;
}

fs.writeFileSync("gen-diffs.sh", script.join("\n"));
