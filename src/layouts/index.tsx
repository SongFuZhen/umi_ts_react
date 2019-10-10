import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import styles from './index.css';
import { ConnectState } from '@/models/connect';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export interface BasicLayoutProps {
  collapsed: boolean;
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, children, collapsed } = props;

  const handleMenuCollapse = (): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: !collapsed,
      });
    }
  };

  return (
    <Layout>
      <Sider collapsed={collapsed}>
        <Menu theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={handleMenuCollapse}
          />
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default connect(({ global }: ConnectState) => ({
  collapsed: global.collapsed,
}))(BasicLayout);
