var webpack = require('webpack');
var path = require("path");

module.exports = {
    context: path.join(__dirname, "app"),
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "public","dist"),
        filename: "bundle.js"
    },
    module:{
        loaders:[{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }]
    }

};