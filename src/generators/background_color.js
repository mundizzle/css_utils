let classes = [
  `
/* background-color */
`
];

export default config => {
  const { background_color, breakpoints } = config;
  const { alias, values } = background_color;
  values.forEach(({name, value}) => {
    classes.push(`.${alias}\\:${name} { background-color: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(({name, value}) => {
      classes.push(
        `  .${alias}\\:${name}\\@${breakpoint_alias} { background-color: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
