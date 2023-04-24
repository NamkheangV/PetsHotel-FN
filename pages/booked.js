import Head from "next/head";
import styles from "@/styles/Booking.module.css";
import { useState } from "react";
import { Button, Steps } from "antd";
import AdInFo from "@/components/admin/booked/AdInfo";
import AdRecp from "@/components/admin/booked/AdRecp";
import AdPaym from "@/components/admin/booked/AdPaym";
import AdConfirm from "@/components/admin/booked/AdConfirm";

const steps = [
  {
    title: "Information",
    content: AdInFo(),
  },
  {
    title: "Receipt",
    content: AdRecp(),
  },
  {
    title: "Payment",
    content: AdPaym(),
  },
  {
    title: "Confirmation",
    content: AdConfirm(),
  },
];

export default function Booked() {
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
