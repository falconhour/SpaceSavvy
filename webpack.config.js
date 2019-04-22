const path = require('path');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'bootstrap'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    devServer: {
        hot: true,
        open: true,
        logLevel: 'error',
        contentBase: './dist',
        port: 8082
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_module)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/react'],
                        plugins: [
                            'transform-object-rest-spread',
                            'transform-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.(svg}png|jpg|gif|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.ejs'
        })
    ]
};