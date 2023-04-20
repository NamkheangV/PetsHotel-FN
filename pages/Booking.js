import Head from "next/head";
import styles from "@/styles/Booking.module.css";
import { useState } from "react";
import { Button, message, Steps } from "antd";
import InfoForm from "@/components/user/InfoForm.jsx";
import PaymForm from "@/components/user/PaymentForm.jsx";

const steps = [
  {
    title: "Information",
    content: InfoForm(),
  },
  {
    title: "Payment",
    content: PaymForm(),
  },
  {
    title: "Reciept",
    content: "Last-content",
  },
];

export default function Booking() {
  const [current, setCurrent] = useState(0);
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
        <title>Booking Room | Pets Hotel</title>
        <meta name="description" content="Pets Hotel" />
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
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Booking Completed! Thank You 😻")}
            >
              Confirm
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
