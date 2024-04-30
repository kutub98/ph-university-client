import AcademicSemester from '../Pages/AcademicManagment/AcademicSemester';

export const AcademicSemesterPath = [
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
];
