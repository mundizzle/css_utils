import path from "path";
import fs from "fs-extra";
import generators from "./generators";
import generateVariables from './generators/variables'

const config = require(path.join(process.cwd(), "./css.config.json"));
const { output_paths = {} } = config

const css = generators
  .map(generator => {
    return generator(config);
  })
  .join("\n");

fs.outputFile(path.join(process.cwd(), process.argv[2] || output_paths.utils || './utils.css'), css);

const variables = generateVariables(config)

fs.outputFile(path.join(process.cwd(), output_paths.variables || './variables.css'), variables);
