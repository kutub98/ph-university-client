import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import { adminPath } from './admin.router';
import { generateRoutes } from '../Utils/routesGenertate';
import { studentPath } from './student.route';
import { facultyPath } from './faculty.router';
import Login from '../Pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/admin',
    element: <App />,
    children: generateRoutes(adminPath),
  },
  {
    path: '/student',
    element: <App />,
    children: generateRoutes(studentPath),
  },
  {
    path: '/faculty',
    element: <App />,
    children: generateRoutes(facultyPath),
  },
  {
    path: '/login',
    element: <Login></Login>,
    // children: [
    //   {
    //     index: true,

    //   }
    // ],
  },
]);

export default router;
