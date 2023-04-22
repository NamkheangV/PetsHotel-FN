import styles from "@/styles/Setting.module.css";
import { Row, Col } from "antd";
import UserImg from "./profile/UserImg";
import UserDetail from "./profile/UserDetail";

export default function Profile() {
  return (
    <>
      <Row className={styles.row}>
        <Col span={8} className={styles.col}>
          <UserImg />
        </Col>
        <Col span={1}></Col>
        <Col span={15} className={styles.col}>
          <UserDetail />
        </Col>
      </Row>
    </>
  );
}
