import Head from "next/head";
import styles from "@/styles/Admin.module.css";
import { Table, Tag, message, Spin } from "antd";
import { useRouter } from "next/router";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { useEffect, useState } from "react";
import formatDate from "@/lib/Date";

const header = [
  {
    key: "1",
    title: "Firstname",
    dataIndex: "bk_cus_fname",
  },
  {
    key: "2",
    title: "Lastname",
    dataIndex: "bk_cus_lname",
  },

  {
    key: "3",
    title: "Date In - Out",
    dataIndex: "",
    render: (_, { checkin_date, checkout_date }) => (
      <>
        {formatDate(checkin_date)} - {formatDate(checkout_date)}
      </>
    ),
  },
  {
    key: "5",
    title: "Room Type",
    dataIndex: "room_id",
  },
  {
    key: "6",
    title: "Contact",
    dataIndex: "bk_cus_phone",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "bk_status",
    render: (_, { bk_status }) => (
      <>
        {bk_status === 0 ? (
          <Tag color="yellow">Pending</Tag>
        ) : bk_status === 1 ? (
          <Tag color="green">Confirm</Tag>
        ) : (
          <Tag color="red">Cancelled</Tag>
        )}
      </>
    ),
  },
];

export default function Admin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [booked, setBooked] = useState([]);

  useEffect(() => {
    fetchBooked();
  }, []);

  const fetchBooked = async () => {
    setLoading(true);
    try {
      const res = await useAxios.get("/booking");
      if (res.data) {
        setBooked(res.data);
        setLoading(false);
      } else {
        setBooked([]);
      }
    } catch (e) {
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          setError("This user not found");
          message.open({
            type: "error",
            content: "Something went wrong!  😱",
          });
        }
      } else setError("Something went wrong.");
    }
  };

  return (
    <>
      <Head>
        <title>Booked Service | Pets Hotel</title>
        <meta name="description" content="Pets Hotel" />
      </Head>

      <div className={styles.container}>
        <h1 style={{ margin: 30 }}>Booked List {loading && <Spin />}</h1>
        <Table
          columns={header}
          dataSource={loading ? [] : booked}
          size="middle"
          bordered
          pagination={{ pageSize: 10 }}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                router.push(`/booked/${record.bk_id}`);
                console.log(record);
              },
            };
          }}
        />
      </div>
    </>
  );
}
