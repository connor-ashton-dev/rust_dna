const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [new CopyWebpackPlugin(["index.html"])],
  devServer: {
    host: "0.0.0.0",
  },
  experiments: {
    syncWebAssembly: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm"],
    alias: {
      // Assuming 'libs' is a sibling to 'www' directory and both are at the root of your project
      "lib-simulation-wasm": path.resolve(
        __dirname,
        "../../libs/simulation-wasm/pkg",
      ),
    },
  },
};
