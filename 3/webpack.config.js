var webpack = require('webpack'),
    path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/public')
var APP_DIR = path.resolve(__dirname + '/private')


module.exports = {
    // entry-point files that are going to 
    // start the conversion process
    entry: APP_DIR + '/clientApp.jsx',
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /.json$/, loader: "json" },
        ]
    }
};
