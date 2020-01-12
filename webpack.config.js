// Webpack uses this to work with directories
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: "./src",

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: { modules: true, exportOnlyLocals: false }
              }
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],

  // webpack dev server config
  devServer: {
    contentBase: "src",
    compress: true,
    port: 3000
  }
};
