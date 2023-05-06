import { Table, Tag } from "antd";
import { useRouter } from "next/router";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { useEffect, useState } from "react";
import formatDate from "@/lib/Date";

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
  
];

export default function History() {
  const router = useRouter();

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
              router.push(`/booked/`);
            },
          };
        }}
      />
    </>
  );
}
