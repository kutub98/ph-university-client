/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllAcademicSemesterQuery } from '../../Redux/Featurs/academicSemesterApi';

const AcademicSemester = () => {
  const { data, isError, isLoading } =
    useGetAllAcademicSemesterQuery(undefined);

  const ErrorHandling = () => {
    if (isError) {
      return (
        <div>
          <h1>Something went wrong</h1>
        </div>
      );
    }
    return null;
  };
  const IsLoadingHandle = () => {
    if (isLoading) {
      return (
        <div>
          <h1>Loading data</h1>
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <h1>Academic Semester Page</h1>
      <ErrorHandling></ErrorHandling>
      <IsLoadingHandle />
    </div>
  );
};

export default AcademicSemester;
