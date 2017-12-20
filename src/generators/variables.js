let classes = [
  `
/* color */
`
];

export default config => {
  const { color, padding, font_family, font_weight, font_size, variable_scope } = config;

  classes.push(`
${variable_scope || ':root'} {
`);

    classes.push(  `
/* color */
`)

    color.values.forEach(({name, value}) => {
      classes.push(`  --${name}: ${value};`);
    });

classes.push(  `
/* spacing */
`)
    padding.values.forEach((value, index) => {
      classes.push(`  --sp-${index}: ${value};`);
    });

classes.push(  `
/* font-family */
`)

    font_family.values.forEach((value, index) => {
      classes.push(`  --font-family-${index + 1}: ${value};`);
    });

classes.push(  `
/* font-weight */
`)

    font_weight.values.forEach((value, index) => {
      classes.push(`  --font-weight-${index + 1}: ${value};`);
    });

classes.push(  `
/* font-size */
`)

    font_size.values.forEach((value, index) => {
      classes.push(`  --font-size-${index + 1}: ${value};`);
    });

    classes.push(`
}`);

  return classes.join("\n");
};
