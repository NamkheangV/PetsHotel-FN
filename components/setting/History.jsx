import { Table, Tag, Empty } from "antd";
import styles from "@/styles/Setting.module.css";

const header = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Room Type",
    dataIndex: "roomType",
  },
  {
    title: "Pet Amount",
    dataIndex: "petAmount",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status === "Pending" ? (
          <Tag color="yellow">{status}</Tag>
        ) : status === "Confirmed" ? (
          <Tag color="green">{status}</Tag>
        ) : (
          <Tag color="red">{status}</Tag>
        )}
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Confirmed",
  },
  {
    key: "2",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Cancelled",
  },
  {
    key: "3",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "4",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "5",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "6",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "7",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "8",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "9",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "10",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
  {
    key: "11",
    date: "22-02-2021 to 22-02-2021",
    roomType: "Deluxe",
    petAmount: "2",
    status: "Pending",
  },
];

export default function History() {
  return (
    <>
      <Table
        columns={header}
        dataSource={data}
        size="middle"
        bordered
        pagination={{ pageSize: 8 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              alert("clicked");
            },
          };
        }}
      />
    </>
  );
}
