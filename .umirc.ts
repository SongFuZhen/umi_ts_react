import { resolve } from 'path';
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        dva: { immer: true },
        antd: true,
        dynamicImport: { webpackChunkName: true },
        title: 'umi_ts_antd_example',
        dll: {
          include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es'],
        },
        pwa: {
          manifestOptions: {
            srcPath: 'manifest.json',
          },
        },
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],

  alias: {
    components: resolve(__dirname, './src/components'),
    models: resolve(__dirname, './src/models'),
    pages: resolve(__dirname, './src/pages'),
    utils: resolve(__dirname, './src/utils'),
  },
};

export default config;
