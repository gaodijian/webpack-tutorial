const path = require("path");

// module.exports = {
//   entry: "./main.js",
//   output: {
//     filename: "main.bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   mode: "development",
// };

const webpackConfig =
  process.env.NODE_ENV === "production"
    ? require("./webpack.config.prod")
    : require("./webpack.config.dev");

module.exports = webpackConfig;
