const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// initialise dotenv:
const envKeys = (() => {
    // call dotenv and it will return an Object with a parsed key
    const env = dotenv.config().parsed;
    // reduce our .env file to a nice single object:
    return Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
})();

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    devServer: {
        // contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
        // To re-direct any rquest coming in starting with /api/ to backend Express app:
        proxy: {
            "/api": "http://localhost:5000",
        },
        port: 3000,
        // hot: true,
        // Only for use in development server!
        allowedHosts: "all",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[[local]]__[path][name]--[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico",
        }),
        new webpack.DefinePlugin(envKeys),
    ],
};
