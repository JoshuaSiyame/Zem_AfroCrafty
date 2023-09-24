// import modules/packages
import path from "path";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";

// dev configuration
const devConfiguration = merge(commonConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        port: 5000,
        hot: true,
        open: true
    }
});


export default devConfiguration;