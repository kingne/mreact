const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: './src/index.js',
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                options: {
                    presets:[
                        [require.resolve('@babel/preset-react')]
                    ],
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = config;