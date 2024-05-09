module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            shared: "./src/shared",
            pages: "./src/pages",
            features: "./src/features",
            widgets: "./src/widgets",
            entities: "./src/entities",
          },
        },
      ],
    ],
  };
};
