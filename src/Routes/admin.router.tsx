import { ReactNode } from 'react';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateAdmin from '../Pages/Admin/CreateAdmin';
import CreateFaculty from '../Pages/Admin/CreateFaculty';
import CreateStudent from '../Pages/Admin/CreateStudent';

type TRoute = {
  path: string,
  element: ReactNode
}

const adminPath2 = [
  {
    name: 'Dashboard',
    path: 'dashboard', // ensure you provide a path
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Student',
        path: 'create-student', // use correct paths
        element: <CreateStudent />,
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
    ],
  },
  {
    name: 'Offered Course',
    path: 'offered-courses', // corrected the path spelling
    element: <AdminDashboard />,
  },
];

export const adminRoutes = adminPath2.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element
      });
    });
  }

  return acc;
}, [] as TRoute[]); 






//! HARD CODE WAY
// export const adminPaht = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
// ];
