const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Le informamos a webpack que estamos construyendo un bundle para NodeJS, rather than for the browser
    target: 'node',

    // Le decimos a webpack que el 
    // archivo raíz de nuestra app
    entry: './src/index.js',
    
    // Le decimos a webpack donde poner el archivo de salida
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
