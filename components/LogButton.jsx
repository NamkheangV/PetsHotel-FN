import { useState } from "react";
import { Button, Modal, Row, Col, Divider } from "antd";
import styles from "@/styles/Navbar.module.css";
import Login from "./Login";
import Register from "./Register";

const LogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        className={styles.btn}
        onClick={showModal}
        type="primary"
        shape="round"
      >
        LOGIN / REGISTER
      </Button>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={880}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Login />
          </Col>
          <Col span={1}>
            <Divider type="vertical" style={{ height: "100%" }} />
          </Col>
          <Col span={11}>
            <Register />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default LogButton;
