import { Result, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

const Book_status = 3;

const authstatus = "user";

export default function AdConfirm() {
  return (
    <>
      {Book_status === 3 ? (
        <Result
          status="success"
          title="Successfully Booked!"
          subTitle="Order number: 2017182818828182881 You can check history booking in the setting."
        />
      ) : Book_status === 2 ? (
        <Result
          status="error"
          title="Your booking is cancelled"
          subTitle="Please contact our staff for more information."
        />
      ) : (
        <Result
          icon={<LoadingOutlined />}
          status="pending"
          title="Your booking is pending"
          subTitle="Please wait for the confirmation from our staff."
          extra={
            authstatus === "admin" ? (
              [
                <Button type="primary" key="confirm">
                  Confirm
                </Button>,
                <Button type="primary" style={{ backgroundColor: "red" }}>
                  Cancelled
                </Button>,
              ]
            ) : (
              <Link href="/">
                <Button type="primary">Back to Home</Button>
              </Link>
            )
          }
        />
      )}
    </>
  );
}