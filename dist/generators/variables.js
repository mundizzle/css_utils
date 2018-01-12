"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = ["\n/* color */\n"];

exports.default = function (config) {
  var color = config.color,
      padding = config.padding,
      font_family = config.font_family,
      font_weight = config.font_weight,
      font_size = config.font_size,
      line_height = config.line_height,
      variable_scope = config.variable_scope;


  classes.push("\n" + (variable_scope || ':root') + " {\n");

  classes.push("\n/* color */\n");

  color && color.values.forEach(function (_ref) {
    var name = _ref.name,
        value = _ref.value;

    classes.push("  --" + name + ": " + value + ";");
  });

  classes.push("\n/* spacing */\n");
  padding && padding.values.forEach(function (value) {
    classes.push("  --sp-" + value + ": " + value + padding.unit + ";");
  });

  classes.push("\n/* font-family */\n");

  font_family && font_family.values.forEach(function (value) {
    classes.push("  --font-family-" + value + ": " + value + ";");
  });

  classes.push("\n/* font-weight */\n");

  font_weight && font_weight.values.forEach(function (value) {
    classes.push("  --font-weight-" + value + ": " + value + ";");
  });

  classes.push("\n/* font-size */\n");

  font_size && font_size.values.forEach(function (value) {
    classes.push("  --font-size-" + value + ": " + value + font_size.unit + ";");
  });

  classes.push("\n/* line-height */\n");

  line_height && line_height.values.forEach(function (value) {
    classes.push("  --line-height-" + value + ": " + value + line_height.unit + ";");
  });

  classes.push("\n}");

  return classes.join("\n");
};