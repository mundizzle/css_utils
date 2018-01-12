"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* font-size */\n"];

exports.default = function (config) {
  var font_size = config.font_size,
      breakpoints = config.breakpoints;

  if (!font_size) return;
  var alias = font_size.alias,
      values = font_size.values,
      unit = font_size.unit;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { font-size: " + value + unit + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { font-size: " + value + unit + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};