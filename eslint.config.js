// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintConfigPrettier,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/array-type": ["warn", { default: "generic", readonly: "generic" }],
      "@typescript-eslint/no-unused-expressions": ["warn", { allowTernary: true }],
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/consistent-type-definitions": ["off"],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          style: "camelCase",
        },
      ],
      "@angular-eslint/template/eqeqeq": ["off", { allowNullOrUndefined: true }],
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
);
