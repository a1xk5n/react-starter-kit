const path = require('path');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['@babel/polyfill', path.join(__dirname, 'src', 'js', 'index.jsx')],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,

                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{ loader: 'url-loader' }],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {
                from: path.join('src', 'img'),
                to: 'img',
            },
        ]),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            hash: true,
        }),

        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: [path.join(__dirname, 'src', 'js'), 'node_modules'],
        extensions: ['.js', '.jsx', '.scss'],
    },
};
