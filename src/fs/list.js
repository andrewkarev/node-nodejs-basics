import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const sourceFolderPath = path.join(_dirname, "files");

const list = async () => {
  try {
    const files = await fs.readdir(sourceFolderPath);

    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
