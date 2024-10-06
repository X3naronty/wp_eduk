import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

// const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin');
export default (env: any) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: {
      main: path.resolve(__dirname, 'src', 'index.ts'), // default name
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new htmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
    ],
		module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    
  };
  return config;
};
