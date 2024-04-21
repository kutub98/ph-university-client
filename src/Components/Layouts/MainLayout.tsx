import React, { Children, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Items = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'User',
  },
  {
    key: '3',
    label: 'Create user',
    children: [
      {
        key: '1.1',
        label: 'Create Admin',
      },
      {
        key: '1.2',
        label: 'Create Faculty',
      },
      {
        key: '1.3',
        label: 'Create User',
      },
    ],
  },
];
const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <div
        className=""
        style={{
          width: '98%',
          margin:"auto",
          background: 'rgb(19, 1, 60)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          padding: '8px 12px',
          top: '0',
          left: '0',
          position: 'sticky',
          zIndex: '999',
        }}
      >
        <h1>PH-UNIVERSITY</h1>
        <Button>LOG OUT</Button>
      </div>
      <Layout>
        <Sider
          style={{ height: '100vh', position: 'static' }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={Items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
