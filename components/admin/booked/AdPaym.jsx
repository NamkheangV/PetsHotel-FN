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

export default function AdPaym() {
  return (
    <>
      <Image src="QR.jpg" width={300} className={styles.img} />
    </>
  );
}
