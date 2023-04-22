import { Upload, Image, Divider, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "@/styles/Booking.module.css";

const props = {
  beforeUpload: (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(`${file.name} IS NOT FILE IMAGE!`);
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

export default function PaymForm() {
  return (
    <>
      <Image src="QR.jpg" width={300} className={styles.img} />

      <Divider type="vertical" style={{ height: "90%" }} />
      <div>
        <Upload {...props} listType="picture" maxCount={1}>
          <Button icon={<UploadOutlined />}>Upload Your Payment Proof</Button>
        </Upload>
      </div>
    </>
  );
}
