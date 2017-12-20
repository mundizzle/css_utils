import path from "path";
import fs from "fs-extra";
import generators from "./generators";

const config = require(path.join(process.cwd(), "./css.config.json"));

const css = generators
  .map(generator => {
    return generator(config);
  })
  .join("\n");

fs.outputFile(path.join(process.cwd(), process.argv[2] || './utils.css'), css);
