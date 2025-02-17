import AcademicDepartment from "../pages/admin/academic-management/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academic-management/AcademicFaculty";
import AcademicSemester from "../pages/admin/academic-management/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academic-management/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academic-management/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academic-management/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/course-management/Courses";
import CreateCourse from "../pages/admin/course-management/CreateCourse";
import OfferCourse from "../pages/admin/course-management/OfferCourse";
import RegisteredSemesters from "../pages/admin/course-management/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/course-management/SemesterRegistration";
import CreateAdmin from "../pages/admin/user-management/CreateAdmin";
import CreateFaculty from "../pages/admin/user-management/CreateFaculty";
import CreateStudent from "../pages/admin/user-management/CreateStudent";
import StudentData from "../pages/admin/user-management/StudentData";
import StudentDetails from "../pages/admin/user-management/StudentDetails";
import OfferedCourse from "../pages/student/OfferedCourse";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },

  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semester",
        path: "registered-semester",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer-Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered-Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];
