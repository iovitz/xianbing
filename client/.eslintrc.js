module.exports = {
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // 一个配置文件可以被基础配置中的已启用的规则继承。
  extends: ["plugin:react/recommended", "eslint:recommended", "airbnb", "plugin:prettier/recommended"],
  // 自定义全局变量
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // 必须有这行才能解析
  parser: "@typescript-eslint/parser",
  // 配置解析器支持的语法
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-undef": 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/prop-types": 0
  },
};
