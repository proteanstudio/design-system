import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'protean-elements',
    outputTargets: [
        {
          type: 'dist',
          esmLoaderPath: '../loader',
          empty: true,
          polyfills: false,
          collectionDir: null
        },
        {
            type: 'www',
            polyfills: false,
            empty: true,
            serviceWorker: null, // disable service workers
        },
    ],
    devServer: {
        port: 3333,
        openBrowser: false,
    },
    hydratedFlag: {
        selector: 'attribute',
        name: 'stencil-hydrated',
    },
    testing: {
        collectCoverage: true,
        coveragePathIgnorePatterns: [
            '/node_modules/',
            '(.*).d.ts',
            '(.*).config.ts',
            'src/index.ts',
            'src/test-helpers/',
            'src/components/protean-icon/icons.tsx',
        ],
        collectCoverageFrom: ['**/*.{ts,tsx}'],
        coverageDirectory: 'coverage',
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
        moduleNameMapper: {
            '@/(.*)': '<rootDir>/src/$1',
        },
    },
};
