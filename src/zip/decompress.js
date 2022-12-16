import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToDecompressPath = path.join(_dirname, "files", "archive.gz");
const decompressedFilePath = path.join(_dirname, "files", "fileToCompress.txt");
const pipe = promisify(pipeline);

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const source = createReadStream(fileToDecompressPath);
    const destination = createWriteStream(decompressedFilePath);

    await pipe(source, unzip, destination);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

await decompress();
