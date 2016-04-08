const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const parseArgs = require('minimist');

const argv = parseArgs(process.argv.slice(2), {
  default: {
    dev: false,
    verbose: false,
  },
});

const DEV = argv.dev;
const VERBOSE = argv.verbose;
const GLOBALS = {
  'process.env.NODE_ENV': DEV ? JSON.stringify('development') : JSON.stringify('production'),
};
const PLUGINS = [
  new webpack.DefinePlugin(GLOBALS),
  new HtmlWebpackPlugin({
    title: 'React Foundation Components',
    template: path.join(__dirname, 'index.html'),
    favicon: path.join(__dirname, 'favicon.ico'),
    inject: 'body',
  }),
];
const DEV_PLUGINS = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];
const PROD_PLUGINS = [
  new ExtractTextPlugin('main-[contenthash].css'),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: VERBOSE,
    },
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
];
const ENTRY_MIDDLEWARE = DEV ? ['webpack-hot-middleware/client'] : [];
const BABEL_PLUGINS = [];
const BABEL_DEV_PLUGINS = [
  [
    'react-transform',
    {
      transforms: [
        {
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module'],
        },
        {
          transform: 'react-transform-catch-errors',
          imports: ['react', 'redbox-react'],
        },
      ],
    },
  ],
];
const BABEL_PROD_PLUGINS = [];
const SASS_LOADERS = [
  'style',
  `css?modules${DEV ? '&localIdentName=[path]---[local]' : ''}!postcss!sass`,
];

module.exports = {
  entry: ENTRY_MIDDLEWARE.concat(path.join(__dirname)),

  output: {
    path: path.join(__dirname, 'lib'),
    filename: `[name]-[${DEV ? 'hash' : 'chunkhash'}].js`,
    publicPath: '/react-foundation-components',
  },

  plugins: PLUGINS.concat(DEV ? DEV_PLUGINS : PROD_PLUGINS),

  cache: DEV,
  debug: DEV,
  devtool: DEV ? 'cheap-module-eval-source-map' : false,

  stats: {
    colors: true,
    reasons: true,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  babel: {
    plugins: BABEL_PLUGINS.concat(DEV ? BABEL_DEV_PLUGINS : BABEL_PROD_PLUGINS),
    cacheDirectory: argv.dev,
  },

  sassLoader: {
    precision: 8,
  },

  postcss: [
    autoprefixer({
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 9',
        'Edge >= 1',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }),
  ],

  imagemin: {
    minimize: !DEV,
    gifsicle: {
      interlaced: true,
    },
    jpegtran: {
      progressive: true,
    },
    optipng: {
      optimizationLevel: 7,
    },
    svgo: {
      plugins: [
        {
          removeTitle: true,
        },
        {
          convertPathData: false,
        },
        {
          removeViewBox: false,
        },
      ],
    },
  },

  url: {
    dataUrlLimit: 10000,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: DEV ? SASS_LOADERS.join('!') : ExtractTextPlugin.extract.apply(null, SASS_LOADERS),
      },
      {
        test: /\.(gif|jpe?g|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url!img',
      },
      {
        test: /\.(woff2?|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
      },
    ],
  },
};
