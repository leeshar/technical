const { resolve } = require("path");
const path = require("path");

module.exports = {
  context: resolve(__dirname, "client"),
  entry: ["./index.js"],
  output: {
    filename: "bundle.js", // output filename
    path: resolve(__dirname, "static"), // output path
    publicPath: "/"
  },
  resolve: {
    modules: [path.join(__dirname, "client"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
