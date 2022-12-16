import { argv } from "process";

const parseArgs = () => {
  const output = [];
  const envArguments = argv.filter(
    (el, i, arr) =>
      el.startsWith("--") || (i > 0 && arr[i - 1].startsWith("--"))
  );

  envArguments.forEach(
    (el, i, arr) =>
      el.startsWith("--") && output.push(`${el.slice(2)} is ${arr[i + 1]}`)
  );

  console.log(output.join(", "));
};

parseArgs();
