import { createHash } from "node:crypto";
import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToHashPath = path.join(
  _dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const content = await fs.readFile(fileToHashPath, "utf-8");
  const hash = createHash("sha256").update(content).digest("hex");
  console.log(hash);
};

await calculateHash();
