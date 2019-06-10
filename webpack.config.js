var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    mode: "development",
    module: {
        rules: [
            {
             test: /\.js$/, // include .js files
             exclude: /node_modules/, // exclude any and all files in the node_modules folder
             
             loader: 'babel-loader',
             
      }
    
        ]
    }

}