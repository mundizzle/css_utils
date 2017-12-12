let classes = [
  `
/* padding */
`
];

export default config => {
  const { padding, directions, breakpoints } = config;
  const { alias, values } = padding;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { padding: ${value}; }`);
    directions.forEach(direction => {
      const name = Object.keys(direction)[0];
      classes.push(
        `.${alias}-${direction[name]}\\:${value} { padding-${name}: ${value}; }`
      );
    });
  });
  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    values.forEach(value => {
      classes.push(
        `  .${alias}\\:${value}\\@${breakpoint_alias} { padding: ${value}; }`
      );
      directions.forEach(direction => {
        const name = Object.keys(direction)[0];
        classes.push(
          `  .${alias}-${
            direction[name]
          }\\:${value}\\@${breakpoint_alias} { padding-${name}: ${value}; }`
        );
      });
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
