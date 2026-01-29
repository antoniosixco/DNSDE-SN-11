import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    rules: {
      semi: "error",
      quotes: ["error", "single"]
    }
  }
];
