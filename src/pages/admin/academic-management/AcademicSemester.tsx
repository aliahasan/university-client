import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  return (
    <div>
      <h1>This is Academic semesters </h1>
    </div>
  );
};

export default AcademicSemester;
