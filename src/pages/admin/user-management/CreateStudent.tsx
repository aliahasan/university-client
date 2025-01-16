import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Jisan",
      middleName: "",
      lastName: "Khan",
    },
    gender: "male",
    dateOfBirth: "1999-08-10",
    email: "jisan@gmail.com",
    contactNumber: "111",
    emergencyContactNo: "+1122334455",
    bloodGroup: "B+",
    presentAddress: "789 Maple Street, Greenfield",
    permanentAddress: "101 Oak Avenue, Springfield",
    guardians: {
      fatherName: "John Smith",
      fatherOccupation: "Doctor",
      fatherContactNumber: "+1122334455",
      motherName: "Linda Smith",
      motherOccupation: "Nurse",
      motherContactNumber: "+1234567890",
    },
    localGuardians: {
      name: "Aunt Kate",
      occupation: "Architect",
      contactNo: "+12223334456",
      address: "202 Pine Street, Westfield",
    },
    admissionSemester: "676ea2f94480049e718a592d",
    academicDepartment: "676ea1d14480049e718a5926",
    isDeleted: false,
  },
};
const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(formData.get("data"));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
          </Row>
          {/* <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
          </Row> */}

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
