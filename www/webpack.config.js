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
    extensions: [".js", ".json", ".wasm"], // Ensure Webpack resolves these extensions.
    alias: {
      // Create an alias for 'lib-simulation-wasm' to point to the correct directory
      "lib-simulation-wasm": path.resolve(
        __dirname,
        "../libs/simulation-wasm/pkg",
      ),
    },
  },
};
