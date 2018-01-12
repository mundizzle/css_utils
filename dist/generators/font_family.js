"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* font-family */\n"];

exports.default = function (config) {
  var font_family = config.font_family,
      breakpoints = config.breakpoints;

  if (!font_family) return;
  var alias = font_family.alias,
      values = font_family.values;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { font-family: " + value + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { font-family: " + value + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};