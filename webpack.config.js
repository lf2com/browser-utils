/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const BUILD_PATH = './dist';
const ENTRY_POINT_ROOT = path.resolve(__dirname, 'src');
const ENTRY_POINTS = fs.readdirSync(ENTRY_POINT_ROOT)
  .reduce((list, fileName) => {
    const filePath = `${ENTRY_POINT_ROOT}/${fileName}`;

    if (!fs.statSync(filePath).isDirectory()) {
      return list.concat(fileName);
    }

    const rootFileName = fs.readdirSync(filePath)
      .find((name) => (
        /^index\.[tj]s$/.test(name)
      ));

    if (rootFileName === undefined) {
      return list;
    }

    return list.concat(
      `${fileName}/${rootFileName}`,
    );
  }, [])
  .reduce((list, fileName) => {
    const [key] = fileName
      .replace(/\.[tj]s$/, '')
      .split(/[\\|/]/);

    return {
      ...list,
      [key]: path.resolve(ENTRY_POINT_ROOT, fileName),
    };
  }, {});

module.exports = (env, options) => {
  const PRODUCTION_MODE = options.mode === 'production';
  const DEV_PUBLIC = (!PRODUCTION_MODE
    && env.public
    && !/false/.test(env.public)
  );

  return {
    entry: ENTRY_POINTS,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, BUILD_PATH),
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            },
          },
        },
        {
          test: /\.ts$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/typescript',
              ],
            },
          },
        },
      ],
    },
    plugins: [],
    devtool: 'inline-source-map',
    devServer: {
      https: false,
      host: DEV_PUBLIC ? 'local-ip' : 'localhost',
      port: '8080',
      compress: true,
      open: [
        '/demo',
      ],
      hot: true,
      static: {
        directory: path.resolve(__dirname),
        publicPath: '/',
        serveIndex: true,
      },
    },
  };
};
