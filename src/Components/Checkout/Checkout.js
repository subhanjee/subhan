import React from 'react'
import { Steps, Button, message } from 'antd';
import "./checkout.css"
import { Container } from 'react-bootstrap';

const { Step } = Steps;

const steps = [
  {
    title: 'Cart',
    content: 'First-content',
  
  },
  {
    title: 'Delivery',
    content: 'Second-content',
  },
  {
    title: 'Payment',
    content: 'Last-content',
  },
  {
    title: 'Complete',
    content: 'Last-content',
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
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </div>
  )
}

function Checkout() {
    return (
        <div >
        <Container>
        <div className= "stepdiv">
        <App />
        </div>
        </Container>
        </div>
    )
}

export default Checkout
