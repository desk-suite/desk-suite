module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};

// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: [
//     "plugin:vue/recommended",
//     "eslint:recommended",
//     "prettier/vue",
//     "plugin:prettier/recommended"
//   ],
//   rules: {
//     "vue/component-name-in-template-casing": ["error", "PascalCase"],
//     "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
//   },
//   globals: {
//     $nuxt: true
//   },
//   parserOptions: {
//     parser: "babel-eslint"
//   }
// };
