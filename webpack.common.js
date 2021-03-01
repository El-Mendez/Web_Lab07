const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/app/index/index.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name]-[hash].[ext]",
                        outputPath: "imgs",
                    }
                }
            },
        ]
    },

}