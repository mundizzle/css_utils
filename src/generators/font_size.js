let classes = [
  `
/* font-size */
`
];

export default config => {
  const { font_size, breakpoints } = config;
  const { alias, values, unit } = font_size;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { font-size: ${value}${unit}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(value => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { font-size: ${value}${unit}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
