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
      name: 'stencil-hydrated'
  }

};
