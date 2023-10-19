const path = require("path");
module.exports = {
  context: path.resolve(__dirname, "app"),
  entry: {
    main: {
      import: "./main.js",
      dependOn: "shared",
    },
    module: {
      import: "./module.js",
      dependOn: "shared",
    },
    shared: ["lodash", "react", "react-dom"],
  },
  output: {
    filename: "[name].bundle.js",
    clean: true,
  },
};
