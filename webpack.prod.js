const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
    mode: "production",
    output: {
        filename: "[name]-bundle-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },

    optimization: {
      minimizer: [
          new HtmlWebpackPlugin({
              template: "./src/app/index.html",
              minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true,
              },
          }),
      ]
    },

    plugins: [
        new MiniCssExtractPlugin({filename: "[name]-bundle-[contenthash].css"}),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    }
});