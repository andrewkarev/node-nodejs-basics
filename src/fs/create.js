import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const destination = path.join(_dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.appendFile(destination, "I am fresh and young", {
      flag: "ax",
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
