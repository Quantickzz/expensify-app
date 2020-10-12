const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
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
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      //Para 404 erros vai po index.html
      historyApiFallback: true,
    },
  };
};
