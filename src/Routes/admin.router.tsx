import AcademicSemester from '../Pages/AcademicManagment/AcademicSemester';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateAdmin from '../Pages/Admin/CreateAdmin';
import CreateFaculty from '../Pages/Admin/CreateFaculty';
import CreateStudent from '../Pages/Admin/CreateStudent';

export const adminPath = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },

  {
    name: 'Academic Semester Management',
    children: [
      {
        name: 'All Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Student',
        path: 'create-student',
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
    path: 'offered-courses',
    element: <AdminDashboard />,
  },
];

// export const adminSideBars = adminPath.reduce((acc: TSidebarRoute[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map(child => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }

//   return acc;
// }, [] as TSidebarRoute[]);
// export const adminRoutes = adminPath2.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach(child => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, [] as TRoute[]);

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
