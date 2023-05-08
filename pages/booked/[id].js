import Head from "next/head";
import styles from "@/styles/Booking.module.css";
import { useState } from "react";
import { Button, Steps } from "antd";
import useAxios from "@/lib/useAxios";
import AdInFo from "@/components/admin/booked/AdInfo";
import AdRecp from "@/components/admin/booked/AdRecp";
import AdPaym from "@/components/admin/booked/AdPaym";
import AdConfirm from "@/components/admin/booked/AdConfirm";

export default function Booked({ data, room }) {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      key: "info",
      title: "Information",
      content: AdInFo({ data, room }),
    },
    {
      key: "receipt",
      title: "Receipt",
      content: AdRecp({ data, room }),
    },
    {
      key: "payment",
      title: "Payment",
      content: AdPaym({ data }),
    },
    {
      key: "confirm",
      title: "Confirmation",
      content: AdConfirm({ data, room }),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Head>
        <title>Booked Service | Pets Hotel</title>
      </Head>

      <div className={styles.content}>
        <Steps current={current} items={items} />
        <div className={styles.step}>{steps[current].content}</div>
        <div>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

// getServerSideProps
export async function getServerSideProps({ params: { id } }) {
  const res = await useAxios.get(`/booking/${id}`);
  const data = await res.data;
  // console.log(data);
  const res2 = await useAxios.get(`/rooms/${data.room_id}`);
  const room = await res2.data;
  // console.log(room);
  return {
    props: {
      data,
      room,
    },
  };
}
