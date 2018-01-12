"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* display */\n"];

exports.default = function (config) {
  var display = config.display,
      breakpoints = config.breakpoints;

  if (!display) return;
  var alias = display.alias,
      values = display.values;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { display: " + value + "; }");
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { display: " + value + "; }");
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};