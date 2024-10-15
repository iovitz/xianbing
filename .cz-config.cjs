// .cz-config.cjs
// 参考文档：https://blog.csdn.net/weixin_44240581/article/details/141998847
module.exports = {
  types: [
    { value: "feat", name: "feat: 完整新功能提交（e.g. 增加用户注册功能）" },
    { value: "fix", name: "fix: 修复Bug（e.g. 注册错误码透传失败）" },
    {
      value: "update",
      name: "update: 功能开发阶段性提交（e.g. 设计用户表的ORM）",
    },
    {
      value: "perf",
      name: "perf: 对程序性能进行优化（e.g. 加载链路耗时优化）",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构，在不影响代码内部行为（e.g. 重构用户注册功能）",
    },
    {
      value: "docs",
      name: "docs: 只修改了文档相关的文件（e.g. 修改README.md）",
    },
    {
      value: "style",
      name: "style: 代码风格、不影响代码功能的更改（e.g. 修改空格缩进，换行规范）",
    },
    {
      value: "ci",
      name: "ci: CI/CD流程变更（e.g. 减少CI运行耗时）",
    },
    {
      value: "chore",
      name: "chore: 构建过程、辅助工具等相关的内容修改（e.g. 更新依赖库）",
    },
    {
      value: "revert",
      name: "revert: 恢复上一次提交（e.g. 回滚feat: 增加用户注册功能）",
    },
    {
      value: "test",
      name: "test: 单元测试相关（e.g. 补充单元测试功能",
    },
  ],

  scopes: [{ name: "app" }, { name: "server" }],

  messages: {
    type: "选择一种你提交的类型(必选):",
    scope: "\n自定义更改范围(可选):",
    subject: "短说明(必填):\n",
    body: '长说明, 使用"|"换行(可选):\n',
    breaking: "列举非兼容性的重大变更(可选):\n",
    footer: "关联关闭的issue, 例如: #31, #34(可选)\n",
    confirmCommit: "确认提交?",
  },

  allowBreakingChanges: ["update", "feat", "fix"],
};
