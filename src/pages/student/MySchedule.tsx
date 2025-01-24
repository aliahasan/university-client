/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { useGetAllEnrolledCoursesQuery } from "../../redux/features/StudentFeatures/studentCourseManagement.api";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);
  // Prepare table data
  const tableData = data?.data?.map((item: any, index: number) => ({
    key: index, // Unique key for each row
    title: item?.course?.title,
    section: item?.offeredCourse?.section,
    days: item.offeredCourse?.days?.join(", "),
    startTime: item.offeredCourse?.startTime,
    endTime: item.offeredCourse?.endTime,
    faculty: item.faculty?.fullName,
  }));

  // Define table columns
  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Faculty",
      dataIndex: "faculty",
      key: "faculty",
    },
    {
      title: "Days",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ padding: "20px", textAlign: "center" }}>My Schedule</h1>
      <Table columns={columns} dataSource={tableData} bordered />
    </div>
  );
};

export default MySchedule;
