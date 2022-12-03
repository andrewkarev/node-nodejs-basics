import { env } from "process";

const parseEnv = () => {
  const variablesWithPrefix = Object.entries(env).filter(([key, value]) =>
    key.startsWith("RSS_")
  );
  const output = variablesWithPrefix
    .map(([variableName, variableValue]) => `${variableName}=${variableValue}`)
    .join("; ");

  console.log(output);
};

parseEnv();
