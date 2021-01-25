const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/custom.css",
      // chunkFilename: 'css/chunk.[id].css', // Esta linea es nueva no se ha probado aun
    }),
  ]
}