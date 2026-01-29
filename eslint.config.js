import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      no_unused_vars: "warn"
    }
  }
];

