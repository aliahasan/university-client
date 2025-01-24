/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const defaultValues = {
    id: "2025010001",
    password: "student123",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in...");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res?.data?.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      if (res?.data?.needPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (error) {
      toast.error("Invalid ID or Password", { id: toastId, duration: 2000 });
    }
  }; //password123
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="UserId:"></PHInput>
        <PHInput type="password" name="password" label="Password"></PHInput>
        {/* <PHInput type="text" name="password" label="Password"></PHInput> */}
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
