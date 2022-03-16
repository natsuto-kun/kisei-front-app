module.exports = {
    mode: "production",
    entry: './pages/index.js',
    output: {
        filename: 'bundle.js', 
    },
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { url: false }
            }
          ]
        },
        {
            test:/\.png$/,
            loader:'url-loader'
        },
      ]
    },
  };