import React from "react";
import "./delivery.css";
import { Form, Input } from "antd";

const FormSizeDemo = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form.Item label="Street">
        <Input />
      </Form.Item>
      <Form.Item label="House">
        <Input />
      </Form.Item>
      <Form.Item label="Area">
        <Input />
      </Form.Item>
      <Form.Item label="City">
        <Input />
      </Form.Item>
      <Form.Item label="Phone">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
    </Form>
  );
};

function Delivery() {
  return (
    <div className="formdiv">
      <div>
        <FormSizeDemo />
      </div>
    </div>
  );
}

export default Delivery;
