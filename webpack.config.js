var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
    entry: {
        app: ['./src/style/main.scss','./src/js/main.js', './src/js/foundation.js']
    },
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.jade$/, loader: 'jade'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass")},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({filename: 'index.html', template:'./src/index.jade'})
    ]
};
