import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options;
	const isDev = mode === 'development';

	return {
    mode: mode ?? 'development',
    entry: {
      main: paths.entry, // default name
    },
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}