const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        //Para que webpack leia js
        //Estes loaders tem de ser yarn add
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        //Para que webpack leia css
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    //Para 404 erros vai po index.html
    historyApiFallback: true,
  },
};
