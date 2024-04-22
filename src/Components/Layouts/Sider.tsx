
const {  Sider } = Layout;
import {  Layout, Menu, } from 'antd';
import { sidebarGenerator } from '../../Utils/sidebarGenerator';
import { adminPath } from '../../Routes/admin.router';
const SiderBar = ({collapsed}: {collapsed: boolean}) => {
  return (
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
            items={sidebarGenerator(adminPath, 'admin')}
          />
        </Sider>
  );
};

export default SiderBar;