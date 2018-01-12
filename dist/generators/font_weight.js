"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* font-weight */\n"];

exports.default = function (config) {
  var font_weight = config.font_weight,
      breakpoints = config.breakpoints;

  if (!font_weight) return;
  var alias = font_weight.alias,
      values = font_weight.values;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { font-weight: " + value + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { font-weight: " + value + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};