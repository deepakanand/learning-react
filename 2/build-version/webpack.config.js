var webpack = require('webpack');

module.exports = {
    // entry-point files that are going to 
    // start the conversion process
    entry: {
        app: "./private/app.jsx",
        "app-esnext": "./private/app-esnext.jsx"
    },
    // each of the above files shall create
    // a seperate built file in public
    output: {
        path: './public',
        filename: "[name].js"
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
