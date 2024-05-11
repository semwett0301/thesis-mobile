module.exports = {
  "*.{ts,tsx}": ["git add .", "yarn lint:staged", () => "yarn ts:check"],
};
