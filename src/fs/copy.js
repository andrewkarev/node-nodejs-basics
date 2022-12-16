import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const sourcePath = path.join(_dirname, "files");
const destinationPath = path.join(_dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(sourcePath, destinationPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
