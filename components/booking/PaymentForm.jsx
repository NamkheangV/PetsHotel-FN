import { Upload, Image, Divider, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "@/styles/Booking.module.css";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PaymForm({ bookingData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { bk_id } = bookingData;

  const [file, setFile] = useState(null);
  
  const handlePayment = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("payment_proof", file);
    console.log("formData", formData);
    try {
      const res = await useAxios.put(`/booking/${bk_id}`, formData);
      console.log("Update", res.data);
      message.success("Update Payment Successfully");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          setError("This user not found");
          message.open({
            type: "error",
            content: "Something went wrong!  😱",
          });
        }
      } else setError("Something went wrong.");
    }
  };

  const props = {
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error(`${file.name} IS NOT FILE IMAGE!`);
      }
      return isJpgOrPng || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
        setFile(info.file.originFileObj);
        handlePayment();
      }
    },
  };

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
