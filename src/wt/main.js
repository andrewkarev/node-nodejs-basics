import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const workerPath = path.join(_dirname, "worker.js");

const performCalculations = async () => {
  const cpusQuantity = cpus().length;
  const initialDigit = 10;
  const threads = [];

  for (let i = 0; i < cpusQuantity; i += 1) {
    const newWorker = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: initialDigit + i });

      worker.on("message", (data) => resolve(data));
      worker.on("error", (data) => reject(data));
    });

    threads.push(newWorker);
  }

  const resolvedThreads = await Promise.allSettled(threads);

  const output = resolvedThreads.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    value: value || null,
  }));

  console.log(output);
};

await performCalculations();
