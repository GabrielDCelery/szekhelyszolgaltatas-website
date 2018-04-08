'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader' // inject CSS to page
            }, {
                loader: 'css-loader' // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: () => { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Awesome App',
            template: './src/html/index.html',
            chunks: 'app'
        })
    ]
};
