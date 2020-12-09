import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'protean-elements',
    outputTargets: [
        // {
        //   type: 'dist',
        //   esmLoaderPath: '../loader',
        // },
        // {
        //   type: 'dist-custom-elements-bundle',
        // },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    devServer: {
        port: 3333,
    },
    hydratedFlag: {
        selector: 'attribute',
        name: 'stencil-hydrated',
    },
    testing: {
        collectCoverage: true,
        // collectCoverageFrom: ['src/components/**/*','src/utils/*', 'src/utils/**/*'],
        coveragePathIgnorePatterns: ['/node_modules/', 'src/test-helpers/'],
        browserDevtools: true,
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
};
