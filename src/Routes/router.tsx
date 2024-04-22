import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {  adminRoutes } from './admin.router';

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
    children: adminRoutes,
  },
]);

export default router;
