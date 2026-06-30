const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      main: './js/main.js',
      services: './js/services.js',
      about: './js/about.js',
      insights: './js/insights.js',
      work: './js/work.js',
      serviceDetail: './js/service-detail.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services.html',
        filename: 'html/services.html',
        chunks: ['services'],
      }),
      new HtmlWebpackPlugin({
        template: './html/about.html',
        filename: 'html/about.html',
        chunks: ['about'],
      }),
      new HtmlWebpackPlugin({
        template: './html/insights.html',
        filename: 'html/insights.html',
        chunks: ['insights'],
      }),
      new HtmlWebpackPlugin({
        template: './html/work.html',
        filename: 'html/work.html',
        chunks: ['work'],
      }),
      // Service Detail Pages
      new HtmlWebpackPlugin({
        template: './html/services/web-development.html',
        filename: 'html/services/web-development.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/website-renovation.html',
        filename: 'html/services/website-renovation.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/search-engine-optimization.html',
        filename: 'html/services/search-engine-optimization.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/social-media-marketing.html',
        filename: 'html/services/social-media-marketing.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/mentoring.html',
        filename: 'html/services/mentoring.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/branding.html',
        filename: 'html/services/branding.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/copywriting.html',
        filename: 'html/services/copywriting.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/digital-marketing-strategy.html',
        filename: 'html/services/digital-marketing-strategy.html',
        chunks: ['serviceDetail'],
      }),
      new HtmlWebpackPlugin({
        template: './html/services/application-development.html',
        filename: 'html/services/application-development.html',
        chunks: ['serviceDetail'],
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'styles/[name].[contenthash].css' : 'styles/[name].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'design-assets/*.svg', to: '[path][name][ext]' },
          { from: 'design-assets/*.png', to: '[path][name][ext]' },
          { from: 'images/illustrations/*.svg', to: '[path][name][ext]' },
          // Copy the entire images/ tree (logos, photos/, etc.). These are referenced
          // directly in HTML <img> tags and are NOT handled by the asset/resource rule
          // (that only processes images imported in JS/SCSS). force:false (default) means
          // it won't clobber anything the asset pipeline already emitted.
          { from: 'images', to: 'images' },
          { from: 'static/robots.txt', to: 'robots.txt' },
          { from: 'static/sitemap.xml', to: 'sitemap.xml' },
          { from: 'images/mhm-logo.png', to: 'favicon.png' },
        ],
      }),
    ],
    optimization: isProduction ? {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    } : {},
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};