import { Result } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Wait() {
  return (
    <>
      <Result
        icon={<LoadingOutlined />}
        status="pending"
        title="Your booking is pending"
        subTitle="Please wait for the confirmation from our staff."
      />
    </>
  );
}
