"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _generators = require("./generators");

var _generators2 = _interopRequireDefault(_generators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import config from "../config.json";

var config = require(_path2.default.join(process.cwd(), "./css_utils.config.json"));

var css = _generators2.default.map(function (generator) {
  return generator(config);
}).join("\n");

_fsExtra2.default.outputFile(_path2.default.join(process.cwd(), "./util.css"), css);