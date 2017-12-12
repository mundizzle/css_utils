let classes = [
  `
/* background-color */
`
];

export default config => {
  const { background_color, breakpoints } = config;
  const { alias, values } = background_color;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { background-color: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(value => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { background-color: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
