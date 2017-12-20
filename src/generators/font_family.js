let classes = [
  `
/* font-family */
`
];

export default config => {
  const { font_family, breakpoints } = config;
  if (!font_family) return
  const { alias, values } = font_family;
  values.forEach((value) => {
    classes.push(`.${alias}\\:${value} { font-family: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach((value) => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { font-family: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
