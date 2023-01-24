const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
       main: "./src/main.js",
       index: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        clean: true,
        assetModuleFilename:'[name][ext]'
    },
    module: {
        rules: [
            {
                test:/\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env','@babel/preset-react'],
                  },
                },
              },
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: 'src/template.html',
        }),
        new MiniCssExtractPlugin()
    ],
    devtool : 'source-map',
    devServer: {
        static: "./dist",
        port: 3000,
    },
    optimization: {
        usedExports: true
    },
}