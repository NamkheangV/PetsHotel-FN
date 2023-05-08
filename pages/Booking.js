import Head from "next/head";
import styles from "@/styles/Booking.module.css";
import { useState } from "react";
import { Button, message, Steps } from "antd";
import InfoForm from "@/components/booking/InfoForm.jsx";
import PaymForm from "@/components/booking/PaymentForm.jsx";
import ReceiptForm from "@/components/booking/ReceiptForm";
import Wait from "@/components/booking/Wait";

export default function Booking() {
  const [current, setCurrent] = useState(0);

  const [bookingData, setBookingData] = useState([]);

  const steps = [
    {
      key: "info",
      title: "Information",
      content: InfoForm({ setBookingData }),
    },
    {
      key: "receipt",
      title: "Receipt",
      content: ReceiptForm({ bookingData }),
    },
    {
      key: "payment",
      title: "Payment",
      content: PaymForm({ bookingData }),
    },
    {
      key: "confirm",
      title: "Confirmation",
      content: Wait(),
    },
  ];
  
  const next = () => {
    setCurrent(current + 1);
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
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button
              type="primary"
              onClick={() =>
                message.success("Booking Completed! Thank You 😻") && next()
              }
            >
              Confirm
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
