let classes = [
  `
/* flex */
`
];

export default config => {
  // generate flex stuff
  const { flex, breakpoints } = config
  if (!flex) return

  const { justifyContent, alignItems, alias }  = flex

  justifyContent.forEach((value) => {
    classes.push(`.${alias}-jc\\:${value} { justify-content: ${value}; }`);
  })

  alignItems.forEach((value) => {
    classes.push(`.${alias}-ai\\:${value} { align-items: ${value}; }`);
  })

  breakpoints.forEach(breakpoint => {
    const breakpoint_alias = Object.keys(breakpoint)[0];
    classes.push(`
@media (${breakpoint[breakpoint_alias]}) {
`);
    justifyContent.forEach((value) => {
      classes.push(`  .${alias}-jc\\:${value}\\@${breakpoint_alias} { justify-content: ${value}; }`);
    })

    alignItems.forEach((value) => {
      classes.push(`  .${alias}-ai\\:${value}\\@${breakpoint_alias} { align-items: ${value}; }`);
    })
    classes.push(`
}`)
  })

  return classes.join("\n");
};
