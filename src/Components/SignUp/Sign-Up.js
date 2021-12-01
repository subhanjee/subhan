import React, { useState } from "react";
import "./login.css";
import {
  Form,
  Input,
  Select,
  // Row,
  // Col,
  Checkbox,
  Button,
  // AutoComplete,
} from "antd";
import PasswordStrengthIndicator from "../Password/Passwordstre";
const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function Login() {

  const [passwordFocused, setPasswordFocused]=useState(false)
  const [password, setPassword]=useState("")
  const [passwordValidity, setPasswordValidity]=useState({
    minChar: null,
    number: null,
    specailChar: null,
  })
  
  const onChangePassword = password => {
    setPassword(password);

    setPasswordValidity({
        minChar: password.length >= 8 ? true : false,
        number: isNumberRegx.test(password) ? true : false,
        specialChar: specialCharacterRegx.test(password) ? true : false
    });
};

  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  // };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="92">+92</Option>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="Maindiv">
      <div className="subdiv">
        <div className="signup">
          <h2>SignUp</h2>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "92",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail/Username"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onChange={e => onChangePassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your password!",
                // pattern: "(?=.*d)(?=.*[a-z])(?=.*[!@%])(?=.*[A-Z]).{8,}",
              
              },
            ]}
            hasFeedback
          >
            <Input.Password  />
            {passwordFocused && (
              <PasswordStrengthIndicator
                  validity={passwordValidity}
              />
          )}
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
           SignUp
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
