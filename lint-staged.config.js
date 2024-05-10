module.exports = {
  "*.{ts,tsx}": ["yarn lint:staged", () => "yarn ts:check"],
};
