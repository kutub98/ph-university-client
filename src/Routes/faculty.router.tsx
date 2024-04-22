import FacultyDasboard from '../Pages/Facutly/Faculty.Dashboard';
import StudentDashboard from '../Pages/Student/StudentDashboard';

export const facultyPath = [
  {
    name: 'Facutly',
    path: 'faculty',
    element: <FacultyDasboard />,
  },
  {
    name: 'faculty-course',
    path: 'facutly-course',
    element: <StudentDashboard />,
  },
  {
    name: 'faculty schedule',
    path: 'faculty-schedule',
    element: <StudentDashboard />,
  },
];
