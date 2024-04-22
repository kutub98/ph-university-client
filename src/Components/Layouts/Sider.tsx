const { Sider } = Layout;
import { Layout, Menu } from 'antd';
import { sidebarGenerator } from '../../Utils/sidebarGenerator';
import { adminPath } from '../../Routes/admin.router';
import { facultyPath } from '../../Routes/faculty.router';
import { studentPath } from '../../Routes/student.route';

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};
const SiderBar = ({ collapsed }: { collapsed: boolean }) => {
  const role = 'faculty';
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarGenerator(facultyPath, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarGenerator(studentPath, userRole.STUDENT);
      break;
  }

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
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SiderBar;
