module.exports = {
  "*": ["npm run format", "npm run lint"],
  "**/*.ts?(x)": () => "npm run check-types",
};
