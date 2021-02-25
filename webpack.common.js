const path = require("path");

module.exports = {
    entry: {
        main: "./src/app/index.js",
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name]-[hash].[ext]",
                        outputPath: "imgs",
                        emitFile: true,
                    }
                }
            },
        ]
    },

}