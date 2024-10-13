import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port: number;
  analyser?: boolean;
  platform?: BuildPlatform; 
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    favicon: path.resolve(__dirname, 'src/assets', 'app-image.svg'),
    public: path.resolve(__dirname, 'public'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port,
    mode: env.mode ?? 'development',
    paths,
    analyser: env.analyser,
    platform: env.platform ?? 'desktop',
  });
  return config;
};


