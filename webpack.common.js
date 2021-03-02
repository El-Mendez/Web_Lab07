const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/app/index/index.js",
        about: "./src/app/aboutMe/aboutMe.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/app/aboutMe/aboutMe.html",
            filename: "aboutMe.html",
            chunks: ["about"],
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
            {
                test: /\.mp3$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name]-[hash].[ext]",
                        outputPath: "audio",
                    }
                }
            },
        ]
    },

}