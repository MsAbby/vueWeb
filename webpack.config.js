const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 解析vue
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // 入口
    entry: path.resolve(__dirname, './src/main.js'),
    // 出口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js',
    },
    // loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'), // 只处理src下面的文件
                loader: "babel-loader",
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    // plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new VueLoaderPlugin()
    ],
    // mode
    mode: "development",
    devtool: "source-map",
    // dev-sever
    devServer: {
        port: 8080,
        hot: true,
        open: true
    }
}