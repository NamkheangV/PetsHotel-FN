import { Result } from "antd";

const Type = ({ type }) => {
  if (type === "success") {
    return (
      <Result
        status="success"
        title="Successfully Booked!"
        subTitle="Order number: 2017182818828182881 Go to your profile to check your booking status."
      />
    );
  } else if (type === "pending") {
    return (
      <Result
        status="warning"
        title="Your booking is pending"
        subTitle="Please wait for the confirmation from our staff."
      />
    );
  } else if (type === "cancelled") {
    return (
      <Result
        status="error"
        title="Your booking is cancelled"
        subTitle="Please contact our staff for more information."
      />
    );
  }
};

export default function Wait() {
  return (
    <>
      <Type type="success" />
    </>
  );
}
