const Webpack = require("webpack");
const WebpackConfig = require('./webpack.config.js');

const fs = require('fs');

const xml2js = require('xml2js');
const parser = new xml2js.Parser(); // for parse xml (back end web config file)

// TODO: the output path may need to be change
// prodConfig.output.path = './production/app';

// Uglify
WebpackConfig.plugins.push(
    new Webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: { screw_ie8 : true, keep_fnames: true }, 
        compress: { screw_ie8: true },
        comments: false
    })
);

module.exports = WebpackConfig;