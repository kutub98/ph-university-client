
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <div>
      <div>THIS ADMIN NAVBER</div>
      <Outlet/>
    </div>
  );
};

export default AdminLayout;