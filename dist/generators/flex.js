"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* flex */\n"];

exports.default = function (config) {
  // generate flex stuff
  var flex = config.flex,
      breakpoints = config.breakpoints;

  if (!flex) return;

  var justifyContent = flex.justifyContent,
      alignItems = flex.alignItems,
      alias = flex.alias;


  justifyContent.forEach(function (value) {
    classes.push("." + alias + "-jc\\:" + value + " { justify-content: " + value + "; }");
  });

  alignItems.forEach(function (value) {
    classes.push("." + alias + "-ai\\:" + value + " { align-items: " + value + "; }");
  });

  breakpoints.forEach(function (breakpoint) {
    var breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push("\n@media (" + breakpoint[breakpoint_alias] + ") {\n");
    justifyContent.forEach(function (value) {
      classes.push("  ." + alias + "-jc\\:" + value + "\\@" + breakpoint_alias + " { justify-content: " + value + "; }");
    });

    alignItems.forEach(function (value) {
      classes.push("  ." + alias + "-ai\\:" + value + "\\@" + breakpoint_alias + " { align-items: " + value + "; }");
    });
    classes.push("\n}");
  });

  return classes.join("\n");
};