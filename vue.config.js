// vue.config.js
const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {

        config.module
            .rule('scss')
            .oneOf('vue')
            .use('resolve-url-loader')
            .loader('resolve-url-loader').options({
                keepQuery: true
            })
            .before('sass-loader')

        config.module
            .rule('scss')
            .oneOf('vue')
            .use('sass-loader')
            .loader('sass-loader')
            .tap(options => ({
                ...options,
                sourceMap: true,
                sourceMapContents: false
            }))
    },

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
}