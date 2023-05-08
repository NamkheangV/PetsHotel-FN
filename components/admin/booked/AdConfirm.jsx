import { Result, Button, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import Router from "next/router";

export default function AdConfirm({ data }) {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(GlobalContext);
  const { user_type } = user;

  const { bk_status } = data;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const res = await useAxios.put(`/booking/${data.bk_id}`, {
        bk_status: 1,
      });
      message.open({ type: "success", content: "The booked is confirmed! 😘" });
      setLoading(false);
      Router.reload();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          message.open({
            type: "error",
            content: "This booking not found! 😥",
          });
        }
      } else message.open({ type: "error", content: "Update fail! 😥" });
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    setLoading(true);
    try {
      const res = await useAxios.put(`/booking/${data.bk_id}`, {
        bk_status: 2,
      });
      message.open({ type: "success", content: "The booked is cancelled! 😭" });
      setLoading(false);
      Router.reload();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          message.open({
            type: "error",
            content: "This booking not found! 😥",
          });
        }
      } else message.open({ type: "error", content: "Update fail! 😥" });
      setLoading(false);
    }
  };

  if (bk_status === 0) {
    return (
      <Result
        icon={<LoadingOutlined />}
        status="pending"
        title="Your booking is pending"
        subTitle="Please wait for the confirmation from our staff."
        extra={
          user_type === 0 ? (
            [
              <Button  key="confirm" onClick={handleConfirm}>
                {loading ? <Spin /> : "Confirm"}
              </Button>,
              <Button
                type="primary"
                style={{ backgroundColor: "red" }}
                onClick={handleCancel}
              >
                {loading ? <Spin /> : "Cancel"}
              </Button>,
            ]
          ) : (
            <Link href="/">
              <Button type="primary">Back to Home</Button>
            </Link>
          )
        }
      />
    );
  } else if (bk_status === 1) {
    return (
      <Result
        status="success"
        title="Successfully Booked!"
        subTitle="Order number: 2017182818828182881 You can check history booking in the setting."
      />
    );
  } else {
    return (
      <Result
        status="error"
        title="Your booking is cancelled"
        subTitle="Please contact our staff for more information."
      />
    );
  }
}
