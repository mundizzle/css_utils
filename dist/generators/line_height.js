"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* line-height */\n"];

exports.default = function (config) {
  var line_height = config.line_height,
      breakpoints = config.breakpoints;

  if (!line_height) return;
  var alias = line_height.alias,
      values = line_height.values,
      unit = line_height.unit;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { line-height: " + value + unit + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { line-height: " + value + unit + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};