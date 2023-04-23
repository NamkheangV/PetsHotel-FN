import Head from "next/head";
import styles from "@/styles/Admin.module.css";
import { Table, Tag } from "antd";
const header = [
  {
    title: "Customer name",
    dataIndex: "customerName",
  },
  {
    title: "Date In - Out",
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
    title: "Contact",
    dataIndex: "contact",
  },
  {
    title: "Payment Proof",
    dataIndex: "paymentProof",
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
    customerName: "John Brown",
    date: "2021-01-01 - 2021-01-02",
    roomType: "Standard",
    petAmount: 1,
    contact: "081-234-6789",
    paymentProof: "https://www.google.com",
    status: "Pending",
  },
];

export default function Admin() {
  return (
    <>
      <Head>
        <title>Booked Service | Pets Hotel</title>
        <meta name="description" content="Pets Hotel" />
      </Head>

      <div className={styles.container}>
        <h1 style={{ margin: 30 }}>Booked List</h1>
        <Table
          columns={header}
          dataSource={data}
          size="middle"
          bordered
          // tableLayout="fixed"
          pagination={{ pageSize: 10 }}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                alert("clicked");
              },
            };
          }}
        />
      </div>
    </>
  );
}
