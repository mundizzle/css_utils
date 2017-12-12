let classes = [
  `
/* margin */
`
];

export default config => {
  const { margin, directions, breakpoints } = config;
  const { alias, values } = margin;
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { margin: ${value}; }`);
    directions.forEach(direction => {
      const name = Object.keys(direction)[0];
      classes.push(
        `.${alias}-${direction[name]}\\:${value} { margin-${name}: ${value}; }`
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
        `  .${alias}\\:${value}\\@${breakpoint_alias} { margin: ${value}; }`
      );
      directions.forEach(direction => {
        const name = Object.keys(direction)[0];
        classes.push(
          `  .${alias}-${
            direction[name]
          }\\:${value}\\@${breakpoint_alias} { margin-${name}: ${value}; }`
        );
      });
    });
    classes.push(`
}`);
  });
  return classes.join("\n");
};
