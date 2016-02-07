var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'chaos-editor.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }

            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}