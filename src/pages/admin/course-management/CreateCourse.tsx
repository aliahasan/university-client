import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/adminFeatures/courseManagement.api";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  const [createCourse] = useAddCourseMutation();

  const prerequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item?.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating.....");
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      prerequisiteCourses: data?.prerequisiteCourses
        ? data?.prerequisiteCourses?.map((item: Record<string, unknown>) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    try {
      const result = (await createCourse(courseData)) as TResponse<any>;
      if (result?.error) {
        toast.error(result?.error?.data?.message, { id: toastId });
      } else {
        toast.success("course is created successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="number" name="code" label="Code" />
          <PHInput type="number" name="credits" label="Credits" />
          <PHSelect
            mode="multiple"
            label="PrerequisiteCourses"
            name="prerequisiteCourses"
            options={prerequisiteCoursesOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
