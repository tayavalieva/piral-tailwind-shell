const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const extendConfig = require("piral-cli-webpack5/extend-config");

function getStyleLoaders() {
  if (process.env.NODE_ENV === "production") {
    return [MiniCssExtractPlugin.loader];
  } else {
    return ["style-loader"];
  }
}

module.exports = extendConfig({
  removeRules: ["css-loader"],
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [...getStyleLoaders(), "css-loader", "postcss-loader"],
    },
  ],
});
