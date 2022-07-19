const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(ttf)$/,
                type: 'asset'
            },
            // when we write asset it can choose inline or resoursce type
            {
                test:/\.(jpg|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ]
    }
}