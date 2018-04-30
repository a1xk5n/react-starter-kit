const path = require('path');

const WebpackBaseConfig = require('./webpack.config');

const autoprefixer = require('autoprefixer');

module.exports = {
    ...WebpackBaseConfig,

    module: {
        ...WebpackBaseConfig.module,
        rules: [
            ...WebpackBaseConfig.module.rules,
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
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
            },
        ],
    },

    plugins: [...WebpackBaseConfig.plugins],

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 1234,
        disableHostCheck: true,
        hot: true,
        historyApiFallback: true,
    },
};
