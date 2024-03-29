import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

export interface GlobalModelState {
  collapsed: boolean;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    collapsed: false,
  },
  effects: {},
  reducers: {
    changeLayoutCollapsed(state = { collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        // tslint:disable-next-line:no-console
        console.log('good', pathname, search);
      });
    },
  },
};

export default GlobalModel;
