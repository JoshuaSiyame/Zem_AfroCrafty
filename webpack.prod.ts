// import modules/packages
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";

// production configuration
const prodConfiguration = merge(commonConfig, {
    mode: "production",
    devtool: "source-map"
});

export default prodConfiguration;