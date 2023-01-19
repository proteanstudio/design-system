module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Protean Design System';
            return args;
        });
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...options.compilerOptions,
                    isCustomElement: tag => tag.startsWith('protean-'),
                };
                return options;
            });
    },
};
