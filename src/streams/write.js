import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import { stdin as input, stdout as output } from "process";
import readline from "node:readline";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToWritePath = path.join(_dirname, "files", "fileToWrite.txt");
const prompt = "Type something to see the output:\n";
const goodbyeMessage =
  '\nBye! The entered data is saved in a "fileToWrite.txt".\n';

const write = async () => {
  const writableStream = createWriteStream(fileToWritePath);
  const rl = readline.createInterface({ input, output, prompt });

  rl.prompt();
  rl.on("line", (input) => writableStream.write(`${input}\n`));
  rl.on("close", () => output._write(goodbyeMessage));
};

await write();
