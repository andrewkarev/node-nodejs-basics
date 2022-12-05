import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToCompressPath = path.join(_dirname, "files", "fileToCompress.txt");
const archiveFilePath = path.join(_dirname, "files", "archive.gz");
const pipe = promisify(pipeline);

const compress = async () => {
  try {
    const gzip = createGzip();
    const source = createReadStream(fileToCompressPath);
    const destination = createWriteStream(archiveFilePath);

    await pipe(source, gzip, destination);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

await compress();
