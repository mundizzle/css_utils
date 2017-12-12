require("babel-register");
const fs = require("fs-extra");
const config = require("./config");
const generators = require("./src/generators").default;

const css = generators
  .map(generator => {
    return generator(config);
  })
  .join("\n");

fs.outputFile("./util.css", css);
