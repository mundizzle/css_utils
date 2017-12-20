let classes = [
  `
/* color */
`
];

export default config => {
  const { color, breakpoints } = config;
  const { alias, values } = color;
  values.forEach(({name, value}) => {
    classes.push(`.${alias}\\:${value} { color: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(({name, value}) => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { color: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
