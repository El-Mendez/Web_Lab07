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
        ]
    },

}