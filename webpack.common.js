const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/app/index/index.js",
        about: "./src/app/aboutMe/aboutMe.js",
        identificame: "./src/app/identificame/identificame.js",
        libros: "./src/app/libros/libros.js",
        sitiosWeb: "./src/app/sitiosWeb/sitiosWeb.js",
        gustos: "./src/app/gustos/gustos.js",
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
        new HtmlWebpackPlugin({
            template: "./src/app/identificame/identificame.html",
            filename: "identificame.html",
            chunks: ["identificame"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/app/libros/libros.html",
            filename: "libros.html",
            chunks: ["libros"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/app/sitiosWeb/sitiosWeb.html",
            filename: "sitiosWeb.html",
            chunks: ["sitiosWeb"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/app/gustos/gustos.html",
            filename: "gustos.html",
            chunks: ["gustos"],
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