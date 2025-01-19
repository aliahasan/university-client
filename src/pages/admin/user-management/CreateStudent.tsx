import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constant/global";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/adminFeatures/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/adminFeatures/userManagement.api";

const studentDummyData = {
  password: "student123",
  name: {
    firstName: "Arabi",
    middleName: "",
    lastName: "Khan",
  },
  gender: "male",
  //   dateOfBirth: "1999-08-10",
  email: "arabi@gmail.com",
  contactNumber: "+1122334455",
  emergencyContactNo: "+1122334455",
  bloodGroup: "B+",
  presentAddress: "789 Maple Street, Greenfield",
  permanentAddress: "101 Oak Avenue, Springfield",

  //
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
    contactNumber: "+12223334456",
    address: "202 Pine Street, Westfield",
  },
  //   admissionSemester: "676ea2f94480049e718a592d",
  //   academicDepartment: "676ea1d14480049e718a5926",
  isDeleted: false,
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  console.log({ data, error });

  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const { data: dData, isLoading: dIsLoading } =
    useGetAcademicDepartmentsQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    await addStudent(formData);

    //  ! This is for development
    //  ! Just for checking
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDummyData}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last name" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={genderOptions}
                name="gender"
                label="Gender"
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={bloodGroupOptions}
                name="bloodGroup"
                label="Blood group"
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Photo">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Divider>Contact Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="contactNumber"
                label="Contact number"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency contact number"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent address"
              />
            </Col>
            <Divider>Guardians Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.fatherName"
                label="Father's name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.fatherOccupation"
                label="Father's occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.fatherContactNumber"
                label="Father's contact number"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.motherName"
                label="Mother's name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.motherOccupation"
                label="Mother's occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardians.motherContactNumber"
                label="Mother's contact number"
              />
            </Col>
            <Divider>Local Guardians Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardians.name"
                label="Local guardian's Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardians.occupation"
                label="Local guardian's Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardians.contactNumber"
                label="Local guardian's contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardians.address"
                label="Local Guardian's address"
              />
            </Col>
            <Divider>Academic Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={semesterOptions}
                name="admissionSemester"
                disabled={sIsLoading}
                label="Admission semester"
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Admission Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
