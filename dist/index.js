"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _generators = require("./generators");

var _generators2 = _interopRequireDefault(_generators);

var _variables = require("./generators/variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require(_path2.default.join(process.cwd(), "./css.config.json"));
var _config$output_paths = config.output_paths,
    output_paths = _config$output_paths === undefined ? {} : _config$output_paths;


var css = _generators2.default.map(function (generator) {
  return generator(config);
}).join("\n");

_fsExtra2.default.outputFile(_path2.default.join(process.cwd(), process.argv[2] || output_paths.utils || './utils.css'), css);

var variables = (0, _variables2.default)(config);

_fsExtra2.default.outputFile(_path2.default.join(process.cwd(), output_paths.variables || './variables.css'), variables);