// import modules/packages
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfig, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";

// define a type
type Configuration = WebpackConfig & {
    devServer?: WebpackDevServerConfig
};

// webpack configuration
const commonConfig: Configuration = {
    entry: {
        app: "./src/Index.tsx"
    },
    output: {
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|JPG)$/i,
                exclude: /node_modules/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new HotModuleReplacementPlugin()
    ]
} 

export default commonConfig;