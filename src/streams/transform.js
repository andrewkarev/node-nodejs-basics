import { pipeline, Transform } from "node:stream";
import { stdin, stdout } from "process";

const transform = async () => {
  const transformedInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().split("").reverse().join("")}\n`);
    },
  });

  stdin.pipe(transformedInput).pipe(stdout);
};

await transform();
