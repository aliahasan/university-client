import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/adminFeatures/courseManagement.api";
import { useGetAllFacultiesQuery } from "../../../redux/features/adminFeatures/userManagement.api";

const Courses = () => {
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    code: `${prefix}-${code}`,
  }));
  const columns = [
    {
      title: "Course Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Course Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];
  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

const AddFacultyModal = ({ facultyInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  const [assignFaculties] = useAddFacultiesMutation();

  const facultiesOptions = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handleSubmit = async (data) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };
    const res = await assignFaculties(facultyData);
    if (res.data?.data && res.data?.data?.success) {
      toast.success("Faculties assigned successfully");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Assign faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            label="Faculty"
            mode="multiple"
            name="faculties"
            options={facultiesOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
