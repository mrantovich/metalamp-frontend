const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require("svgo");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

//const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss/,
                use: [MiniCssExtracPlugin.loader, 
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: {
                                    mode: 'icss'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtracPlugin.loader, 
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: {
                                    mode: 'icss'
                                }
                            }
                        },
                    ]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(?:png|gif|jpg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './img/[hash][ext]'
                }
            },
            {
                test: /\.(?:png|gif|jpg|svg)$/i,
                use: [
                    {
                        loader: ImageMinimizerPlugin.loader,
                        options: {
                            severityError: "warning",
                            minimizerOptions: {
                                plugins: [
                                    ["gifsicle", { interlaced: true }], 
                                    ["jpegtran", { progressive: true }], 
                                    ["optipng", { optimizationLevel: 5 }],
                                    [
                                        "svgo",
                                        {
                                            plugins: extendDefaultPlugins([
                                                {
                                                    name: "removeViewBox",
                                                    active: false,
                                                },
                                                {
                                                    name: "addAttributesToSVGElement",
                                                    params: {
                                                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
                                                    }
                                                }
                                            ])
                                        }
                                    ]
                                ]
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(ttf|woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/landing/landing.pug'),
            filename: 'index.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/search/search.pug'),
            filename: 'search.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/room-details/room-details.pug'),
            filename: 'room-details.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/registration/registration.pug'),
            filename: 'registration.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/signin/signin.pug'),
            filename: 'signin.html',
            inject: 'body'
        }),
        new MiniCssExtracPlugin({
            filename: 'style.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}