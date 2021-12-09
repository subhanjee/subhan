import React from "react";
import { Steps, Button, message } from "antd";
import "./checkout.css";
import { Container } from "react-bootstrap";
import Table from "../Table1compo/Table1com";
import Delivery from "../Delivery/Delivery";
import Payment from "../Payment/Payment";
import Complete from "../Complete/Complete";

const { Step } = Steps;

const steps = [
  {
    title: "Cart",
    content: <Table />,
  },
  {
    title: "Delivery",
    content: <Delivery />,
  },
  {
    title: "Payment",
    content: <Payment />,
  },
  {
    title: "Complete",
    content: <Complete />,
  },
];

const App = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content tablestep">{steps[current].content}</div>
      <div className="steps-action tablebtn ">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Book Order
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
              opacity: ".5",
              border: "solid 1px white",
              color: "black",
            }}
            onClick={() => prev()}
          >
            Back
          </Button>
        )}
      </div>
    </div>
  );
};

function Checkout() {
  return (
    <div className="checkdiv">
      <div className="stepdiv">
        <Container>
          <h4 style={{ marginTop: ".5rem" }}>Checkout</h4>
          <App />
        </Container>
      </div>
    </div>
  );
}

export default Checkout;
