let classes = [
  `
/* line-height */
`
];

export default config => {
  const { line_height, breakpoints } = config;
  if (!line_height) return
  const { alias, values, unit } = line_height;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { line-height: ${value}${unit}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(value => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { line-height: ${value}${unit}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
