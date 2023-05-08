import { Upload, Image, Divider, Button, message } from "antd";
import styles from "@/styles/Booking.module.css";
import { bufferToBlobUrl } from "@/lib/Image";

export default function AdPaym({ data }) {
  return (
    <>
      {/* Image from payment_proof */}
      <Image src={bufferToBlobUrl(data.payment_proof)} width={300} className={styles.img} />
    </>
  );
}
