import { Button, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useChangePasswordMutation } from "../redux/features/adminFeatures/userManagement.api";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { TResponse } from "../types";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [ChangePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = (await ChangePassword(data)) as TResponse<any>;
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login", { replace: true });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password"></PHInput>
        <PHInput type="text" name="newPassword" label="New Password"></PHInput>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
