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
    padding.values.forEach((value) => {
      classes.push(`  --sp-${value}: ${value};`);
    });

classes.push(  `
/* font-family */
`)

    font_family.values.forEach((value) => {
      classes.push(`  --font-family-${value}: ${value};`);
    });

classes.push(  `
/* font-weight */
`)

    font_weight.values.forEach((value) => {
      classes.push(`  --font-weight-${value}: ${value};`);
    });

classes.push(  `
/* font-size */
`)

    font_size.values.forEach((value) => {
      classes.push(`  --font-size-${value}: ${value};`);
    });

    classes.push(`
}`);

  return classes.join("\n");
};
