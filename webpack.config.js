'use strict';

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

module.exports = {
    context: __dirname,
    entry: [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap-theme.css',
        './client/css/styles.scss',
        'bootstrap',
        './client/js/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                include: /client\/images/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'images/[name].[ext]'
                    }
                }]
            }, {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }, {
                    loader: 'file-loader',
                    query: {
                        name: 'images/[name].[ext]'
                    }
                    // options: {
                    //     minimize: true
                    // },
                }],
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }, {
                test: /\.woff2$/,
                include: /(src\/fonts|node_modules)/,
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            // limit: 10000,
                            mimetype: 'image/svg+xml',
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

