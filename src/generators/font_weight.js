let classes = [
  `
/* font-weight */
`
];

export default config => {
  const { font_weight, breakpoints } = config;
  if (!font_weight) return
  const { alias, values } = font_weight;
  values.forEach((value) => {
    classes.push(`.${alias}\\:${value} { font-weight: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach((value) => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { font-weight: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
