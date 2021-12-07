import React from "react";
import "./payment.css";
import { Form, Input } from "antd";

const FormSizeDemo = () => {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form.Item label="Name On card">
        <Input />
      </Form.Item>
      <Form.Item label="Card Number">
        <Input />
      </Form.Item>
      <Form.Item label="Expirey Date">
        <Input />
      </Form.Item>
      <Form.Item label="CVV">
        <Input />
      </Form.Item>
    </Form>
  );
};

function Payment() {
  return (
    <div className="paymentdiv">
      <div>
        <h4>Cards Applicable</h4>
        <div >
        <img 
        className="imgcard"
          src="https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"
          alt=""
        />
        <img
        className="imgcard"
          src="https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"
          alt=""
        />
        <img
        className="imgcard"
          src="https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"
          alt=""
        />
        </div>
        <div className="cardpayment">
        <FormSizeDemo />
      </div>
      </div>
    </div>
  );
}

export default Payment;
