"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* color */\n"];

exports.default = function (config) {
  var color = config.color,
      breakpoints = config.breakpoints;
  var alias = color.alias,
      values = color.values;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { color: " + value + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { color: " + value + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};