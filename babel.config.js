module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
  ];
  const plugins = [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-runtime',
    ["import", {
      "libraryName": "mand-mobile",
      "libraryDirectory": "components"
    }]
  ];
  return {
    presets,
    plugins
  };
}

