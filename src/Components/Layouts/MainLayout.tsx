import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import SiderBar from './Sider';
import { useAppDispatch } from '../../Redux/Hooks';
import { logOut } from '../../Redux/auth/authSlice';

const { Header, Content } = Layout;

// const Items = [
//   {
//     key: 'dashboard',
//     label: <NavLink to="/admin/dashboard">Dashobard</NavLink>,
//   },
//   {
//     key: '2',
//     label: 'Profile',
//   },
//   {
//     key: 'usermanagement',
//     label: 'User Mangement',
//     children: [
//       {
//         key: 'create admin',
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: 'Create faculty',
//         label: <NavLink to="/admin/create-faculty">Create faculty</NavLink>,
//       },
//       {
//         key: 'Create student',
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
// ];
const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <>
      <div
        className=""
        style={{
          width: '98%',
          margin: 'auto',
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
        <Button onClick={signOut}>LOG OUT</Button>
      </div>
      <Layout>
        <SiderBar collapsed={collapsed} />
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
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
