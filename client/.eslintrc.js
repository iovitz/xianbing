module.exports = {
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // 一个配置文件可以被基础配置中的已启用的规则继承。
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
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
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/prop-types": 0,
    "react/jsx-no-bind": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/destructuring-assignment": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-props-no-spreading": 0,
    "no-param-reassign": 0,
  },
};
