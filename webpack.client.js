const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {
    // Le decimos a webpack que el 
    // archivo raíz de nuestra app
    entry: './src/client/client.js',
    
    // Le decimos a webpack donde poner el archivo de salida
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};

module.exports = merge(baseConfig, config);
