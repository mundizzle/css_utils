"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* background-color */\n"];

exports.default = function (config) {
  var background_color = config.background_color,
      breakpoints = config.breakpoints;
  var alias = background_color.alias,
      values = background_color.values;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { background-color: " + value + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { background-color: " + value + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};