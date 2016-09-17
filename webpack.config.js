var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/main.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    //watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],
    }
};

module.exports = config;