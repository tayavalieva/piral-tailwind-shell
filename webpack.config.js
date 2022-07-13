const extendConfig = require("piral-cli-webpack5/extend-config");

module.exports ==
  extendConfig({
    cssLoaderOptions: {
      rules: {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["postcss-loader"],
      },
    },
  });
