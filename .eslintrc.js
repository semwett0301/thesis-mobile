module.exports = {
  extends: [
    "@feature-sliced",
    "plugin:@conarti/feature-sliced/recommended",
    "airbnb-typescript-prettier",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    "react",
    "@conarti/feature-sliced",
    "@typescript-eslint",
    "typescript-sort-keys",
    "simple-import-sort",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "no-param-reassign": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unstable-nested-components": "off",
    "global-require": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    camelcase: "off",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "react/react-in-jsx-scope": "off",
    "react/style-prop-object": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
