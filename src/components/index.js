const req = require.context(".", true, /\.\/[^/]+\/\w+\.js$/);

req.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\/\w+\.js/, "$1");
  const moduleData = req(key);
  // console.log(moduleData);
  const componentNameCapitalized =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  // console.log("module", module);
  moduleData.default &&
    (module.exports[componentNameCapitalized] = req(key).default);

  for (const moduleName in moduleData) {
    module.exports[moduleName] = moduleData[moduleName];
  }
});
