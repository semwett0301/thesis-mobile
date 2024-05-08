const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("mjs");

module.exports = {
  projectRoot: path.resolve(__dirname),
  ...config,
};
