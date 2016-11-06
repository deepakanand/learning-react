var webpack = require('webpack');

module.exports = {
    // file thats going to start the conversion process
    entry: './private/app.jsx',
    output: {
        path: './public',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
