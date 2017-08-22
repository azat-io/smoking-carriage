'use strict'

import path from 'path'

import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'
import UglifyJSWebpackPlugin from 'uglifyjs-webpack-plugin'

export default {
    entry: './components/App',

    output: {
        path: path.join(process.cwd(), './public'),
        filename: 'main.[hash].js',
    },

    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new FaviconsWebpackPlugin({
            logo: './assets/logo.svg',
            prefix: 'assets/',
            persistentCache: false,
            emitStats: false,
            inject: true,
            background: '#fff',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),

        new HtmlWebpackPlugin({
            template: HtmlWebpackTemplate,
            title: 'smoking-carriage',
            cache: true,
            inject: false,
            appMountId: 'app',
            mobile: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            },
        }),

        new UglifyJSWebpackPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                output: {
                    comments: false,
                    beautify: false,
                },
                warnings: false,
            },
        }),
    ],

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                '/node_modules/',
                '/public/',
            ],
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true,
                },
            }],
        }],
    },
}
