import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";

const Auth = () => {
  const { Title } = Typography;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} style={{ paddingLeft: "80px" }}>
          Вход
        </Title>

        <Form.Item
          label="Логин"
          name="username"
          rules={[{ required: true, message: "Пожалуйста введите логин!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Пожалуйста введите пароль!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Вход
          </Button>
        </Form.Item>

        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            Еще не
            <Button type="link" htmlType="submit">
              зарегестрированны
            </Button>
            ?
          </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="link" htmlType="submit">
            Забыл пароль
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
