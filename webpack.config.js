const webpack = require("webpack"); // Import webpack
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "localhost",
      PORT: "8080",
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable Hot Module Replacement
  ]
};
