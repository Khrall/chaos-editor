var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js'
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
    }
}