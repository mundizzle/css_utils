"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* padding */\n"];

exports.default = function (config) {
  var padding = config.padding,
      directions = config.directions,
      breakpoints = config.breakpoints;
  var alias = padding.alias,
      values = padding.values,
      unit = padding.unit;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { padding: " + value + unit + "; }");
    directions.forEach(function (direction) {
      var name = Object.keys(direction)[0];
      classes.push("." + alias + "-" + direction[name] + "\\:" + value + " { padding-" + name + ": " + value + unit + "; }");
    });
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { padding: " + value + unit + "; }");
      directions.forEach(function (direction) {
        var name = Object.keys(direction)[0];
        classes.push("  ." + alias + "-" + direction[name] + "\\:" + value + "\\@" + breakpoint_alias + " { padding-" + name + ": " + value + unit + "; }");
      });
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};