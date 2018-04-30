const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const WebpackBaseConfig = require('./webpack.config');

module.exports = {
    ...WebpackBaseConfig,
    module: {
        ...WebpackBaseConfig.module,
        rules: [
            ...WebpackBaseConfig.module.rules,
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 },
                        },
                        {
                            loader: 'sass-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [autoprefixer()],
                            },
                        },
                    ],
                }),
            },
        ],
    },

    plugins: [...WebpackBaseConfig.plugins, new ExtractTextPlugin('styles.css')],
};
