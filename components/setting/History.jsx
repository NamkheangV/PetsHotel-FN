import { Table } from "antd";
import styles from "@/styles/Setting.module.css";

const header = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];
export default function History() {
  return (
    <>
      <Table
        className={styles.table}
        columns={header}
        dataSource={data}
        size="middle"
        bordered={true}
      />
    </>
  );
}
