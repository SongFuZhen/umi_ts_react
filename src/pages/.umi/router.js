import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'E:/github/Z_Playground/umi_ts_antd_example/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.tsx'),
        })
      : require('../../layouts/index.tsx').default,
    routes: [
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index.tsx'),
            })
          : require('../index.tsx').default,
        _title: 'umi_ts_antd_example',
        _title_default: 'umi_ts_antd_example',
      },
      {
        component: () =>
          React.createElement(
            require('E:/github/Z_Playground/umi_ts_antd_example/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'umi_ts_antd_example',
        _title_default: 'umi_ts_antd_example',
      },
    ],
    _title: 'umi_ts_antd_example',
    _title_default: 'umi_ts_antd_example',
  },
  {
    component: () =>
      React.createElement(
        require('E:/github/Z_Playground/umi_ts_antd_example/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'umi_ts_antd_example',
    _title_default: 'umi_ts_antd_example',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
