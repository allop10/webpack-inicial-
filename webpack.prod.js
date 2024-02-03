/*const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {

    node: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({

            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const copyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");



module.exports = {
   // Set mode to 'development', 'production', or 'none' 
  //Establecer el modo en 'desarrollo', 'producción' o 'ninguno'
  mode: 'production',  // or 'production' or 'none'
                       //o 'producción' o 'ninguna'

  output:{
    clean: true,
    filename: 'main.[contenthash].js'
  },

  node: {
    __dirname: false,
    __filename: false,
    global: false,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
        },
    
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test: /styles.css$/i,
        use: [MiniCssExtract.loader, 'css-loader']

      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',

      },

    ],
  },

  optimization:{
    minimize: true,
    minimizer:[
        new CssMinimizer(),
        new Terser(),
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    new MiniCssExtract({
      filename: '[name].[fullhash].css',
      ignoreOrder: false,

    }),

    new copyPlugin({

      patterns: [{
        from:'src/assets/', to: 'assets/'
        }
        
      ]
    }),
    

  ],
};

