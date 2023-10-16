const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./main.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      // 可以通过 template 来指定模板，如果不指定则直接生成新的html
      // 模板可以理解为 ./index.html 的内容会继承到新生成的 app.html 中
      template: "./index.html",
      // 生成的新 html 的名字
      filename: "app.html",
      // 打包好的 js 会被插入到 body里
      inject: "body",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9991,
  },
};
