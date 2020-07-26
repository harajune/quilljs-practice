var path = require('path');

module.exports = {
  entry: "./editor.ts",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      'parchment': path.resolve(__dirname, 'node_modules/parchment/src/parchment.ts'),
      'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js'),
    },
    extensions: ['.js', '.ts', '.svg', 'scss']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
		    loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env"]
        }
      }],
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // オプションでCSS内のurl()メソッドの取り込みを禁止する
            url: false,
            // ソースマップの利用有無
            sourceMap: true
          }
        },
      ]
    }, {
      test: /\.sass$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // オプションでCSS内のurl()メソッドの取り込みを禁止する
            url: false,
            // ソースマップの利用有無
            sourceMap: true,

            // 0 => no loaders (default);
            // 1 => postcss-loader;
            // 2 => postcss-loader, sass-loader
            importLoaders: 2
          }
        },
        {
          loader: 'sass-loader'
        },
      ]
    }, {
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: false,
            target: 'es5',
            module: 'commonjs'
          },
          transpileOnly: true
        }
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  }
}
