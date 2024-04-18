import { Button, Checkbox, Form, Input } from "antd";
import { Space } from "antd";
import style from "./register.module.css";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate(); //放入组件内部。
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const submit = () => {
    console.log("submit");
    navigate("/main");
  };

  const back = () => {
    console.log("back");
    navigate("/");
  };

  return (
    <div className={style.register}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit" onClick={submit}>
              submit
            </Button>

            <Button htmlType="register" onClick={back}>
              back
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
