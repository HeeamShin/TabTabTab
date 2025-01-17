module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "autofix",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "no-trailing-spaces": ["error"],
    "no-multi-spaces": "error",
    "@typescript-eslint/no-unsafe-return": "warn",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
      }
    ]
  },
}
