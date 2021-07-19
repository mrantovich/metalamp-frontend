const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss/,
                use: [MiniCssExtracPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(ttf|woff|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/main/main.pug'),
            filename: 'index.html',
        }),
        new MiniCssExtracPlugin({
            filename: 'style.css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}