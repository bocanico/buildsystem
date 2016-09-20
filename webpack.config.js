var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/index.jade",
    output: {
        filename: "./src/index.html"
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade-" }
        ]
    }
};
