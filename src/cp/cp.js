import { fork } from "node:child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import { argv } from "process";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const modulePath = path.join(_dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(modulePath, args);
};

spawnChildProcess(argv.slice(2));
