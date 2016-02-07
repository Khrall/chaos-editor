var path = require('path');

module.exports = {
	entry: 'mocha!./tests/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
    resolve: {
        extensions: ['', '.js']
    },
	module: {
        /*preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],*/
        loaders: [
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
    devServer: {
    	hostname: 'localhost',
    	port: 8080
    }
}