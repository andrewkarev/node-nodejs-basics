import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import { stdout } from "process";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToReadPath = path.join(_dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = createReadStream(fileToReadPath, "utf-8");
  let streamContent;

  stream.on("data", (chunk) => (streamContent += chunk));
  stream.on("end", () => stdout._write(streamContent));
};

await read();
