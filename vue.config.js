const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: "localhost",
  },
  lintOnSave: false, //关闭lint
});
