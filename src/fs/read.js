import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToReadPath = path.join(_dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await fs.readFile(fileToReadPath, "utf-8");

    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
