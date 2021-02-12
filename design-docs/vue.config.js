module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    //   module: {
    //     rules: [
    //         {
    //             test: /\.tsx?$/,
    //             loader: 'ts-loader',
    //             options: {
    //               appendTsSuffixTo: [/\.vue$/],
    //             },
    //             exclude: /node_modules/,
    //           },
    //           {
    //             test: /\.vue$/,
    //             loader: 'vue-loader',
    //             options: {
    //                 compilerOptions: {
    //                   isCustomElement: tag => tag.indexOf('protean-') > -1
    //                 }
    //               }
    //           }
    //       ]
    //   }
};
