import { Table, Tag , message} from "antd";
import { useRouter } from "next/router";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import formatDate from "@/lib/Date";
import { set } from "date-fns";

const header = [
  {
    key: "1",
    title: "Date",
    dataIndex: "",
    render: (_, { checkin_date, checkout_date }) => (
      <>
        {formatDate(checkin_date)} - {formatDate(checkout_date)}
      </>
    ),
  },
  {
    key: "2",
    title: "Room Type",
    dataIndex: "room_id",
  },
  {
    key: "3",
    title: "Pet Amount",
    dataIndex: "bk_pet_amount",
  },
  {
    key: "4",
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

export default function History() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user } = useContext(GlobalContext);
  const { user_id } = user;

  const [userBooked, setUserBooked] = useState([]);

  useEffect(() => {
    fetchUserBooked();
  }, [user_id]);

  const fetchUserBooked = async () => {
    setLoading(true);
    try {
      console.log("user_id", user_id);
      const res = await useAxios.get(`/booking/user/${user_id}`);
      // console.log("Res", res.data);
      if (res.data) {
        setUserBooked(res.data);
        setLoading(false);
      } else {
        setUserBooked([]);
        // message.open({ type: "error", content: "Not found!  😱" });
        console.log("No data");
      }
    } catch (e) {
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          setError("This user not found");
        }
      } else setError("Something went wrong.");
    }
  };

  return (
    <>
      <Table
        columns={header}
        dataSource={loading ? [] : userBooked}
        size="middle"
        bordered
        pagination={{ pageSize: 8 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/booked/${record.bk_id}`);
            },
          };
        }}
      />
    </>
  );
}
