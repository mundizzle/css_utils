"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* margin */\n"];

exports.default = function (config) {
  var margin = config.margin,
      directions = config.directions,
      breakpoints = config.breakpoints;
  var alias = margin.alias,
      values = margin.values,
      unit = margin.unit;

  values.forEach(function (value) {
    classes.push("." + alias + "\\:" + value + " { margin: " + value + unit + "; }");
    directions.forEach(function (direction) {
      var name = Object.keys(direction)[0];
      classes.push("." + alias + "-" + direction[name] + "\\:" + value + " { margin-" + name + ": " + value + unit + "; }");
    });
  });
  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    values.forEach(function (value) {
      classes.push("  ." + alias + "\\:" + value + "\\@" + breakpoint_alias + " { margin: " + value + unit + "; }");
      directions.forEach(function (direction) {
        var name = Object.keys(direction)[0];
        classes.push("  ." + alias + "-" + direction[name] + "\\:" + value + "\\@" + breakpoint_alias + " { margin-" + name + ": " + value + unit + "; }");
      });
    });
    classes.push("\n}");
  });
  return classes.join("\n");
};