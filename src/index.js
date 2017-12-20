import path from "path";
import fs from "fs-extra";
import generators from "./generators";
import generateVariables from './generators/variables'

const config = require(path.join(process.cwd(), "./css.config.json"));

const css = generators
  .map(generator => {
    return generator(config);
  })
  .join("\n");

fs.outputFile(path.join(process.cwd(), process.argv[2] || './utils.css'), css);

const variables = generateVariables(config)

fs.outputFile(path.join(process.cwd(), process.argv[2] || './variables.css'), variables);
