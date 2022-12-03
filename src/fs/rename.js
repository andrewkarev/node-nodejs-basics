import * as fs from "node:fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const initialFileName = path.join(_dirname, "files", "wrongFilename.txt");
const newFileName = path.join(_dirname, "files", "properFilename.md");

const rename = () => {
  fs.access(newFileName, (error) => {
    if (!error) throw new Error("FS operation failed");

    fs.rename(initialFileName, newFileName, (error) => {
      if (error) throw new Error("FS operation failed");
    });
  });
};

rename();
