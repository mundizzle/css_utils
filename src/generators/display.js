let classes = [
  `
/* display */
`
];

export default config => {
  const { display, breakpoints } = config;
  if (!display) return
  const { alias, values } = display;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { display: ${value}; }`);
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(value => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { display: ${value}; }`
      );
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
