import React from "react";
import { Table, Tag, Space } from "antd";
import "./table.css"
import { Container } from "react-bootstrap";

const columns = [
  {
    title: "Image",
    dataIndex: "Image",
    key: "Image",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Sku",
    dataIndex: "Sku",
    key: "Sku",
  },
  {
    title: "Seller",
    dataIndex: "Seller",
    key: "Seller",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",

    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <p>Delete</p>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    Image: "John Brown",
    Name: 32,
    Sku: "New York No. 1 Lake Park",
    Seller: "Jhon Doe",
    tags: ["Green"],
  },
  {
    key: "2",
    Image: "Jim Green",
    Name: 42,
    Sku: "New York No. 1 Lake Park",
    Seller: "Jhon Doe",
    tags: ["Green"],
  },
  {
    key: "3",
    Image: "Joe Black",
    Name: 32,
    Sku: "New York No. 1 Lake Park",
    Seller: "Jhon Doe",
    tags: ["Green"],
  },
];

class Demo extends React.Component {
  state = {
    top: "topLeft",
    bottom: "bottomRight",
  };

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
function Table1com() {
  return (
    <div className="maintable">
    <Container>
    <div>
      <Demo />
      </div>
      </Container>
    </div>
  );
}

export default Table1com;

 
