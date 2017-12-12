export default config => {
  const { padding, directions } = config;
  const { alias, values } = padding;
  let classes = [
    `
/* padding */
`
  ];
  values.forEach(value => {
    classes.push(`.${alias}\\:${value} { padding: ${value}; }`);
    directions.forEach(direction => {
      const name = Object.keys(direction)[0];
      classes.push(
        `.${alias}-${direction[name]}\\:${value} { padding-${name}: ${value}; }`
      );
    });
  });
  return classes.join("\n");
};
