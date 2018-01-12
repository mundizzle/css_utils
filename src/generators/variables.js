let classes = [
  `
/* color */
`
];

export default config => {
  const { color, padding, font_family, font_weight, font_size, line_height, variable_scope } = config;

  classes.push(`
${variable_scope || ':root'} {
`);

    classes.push(  `
/* color */
`)

    color && color.values.forEach(({name, value}) => {
      classes.push(`  --${name}: ${value};`);
    });

classes.push(  `
/* spacing */
`)
    padding && padding.values.forEach((value) => {
      classes.push(`  --sp-${value}: ${value}${padding.unit};`);
    });

classes.push(  `
/* font-family */
`)

    font_family && font_family.values.forEach((value) => {
      classes.push(`  --font-family-${value}: ${value};`);
    });

classes.push(  `
/* font-weight */
`)

    font_weight && font_weight.values.forEach((value) => {
      classes.push(`  --font-weight-${value}: ${value};`);
    });

classes.push(  `
/* font-size */
`)

    font_size && font_size.values.forEach((value) => {
      classes.push(`  --font-size-${value}: ${value}${font_size.unit};`);
    });

classes.push(  `
/* line-height */
`)

    line_height && line_height.values.forEach((value) => {
      classes.push(`  --line-height-${value}: ${value}${line_height.unit};`);
    });

    classes.push(`
}`);

  return classes.join("\n");
};
