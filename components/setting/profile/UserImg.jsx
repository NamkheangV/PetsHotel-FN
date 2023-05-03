import styles from "@/styles/Setting.module.css";
import { Image, Row, Upload, Button, Modal, message, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";

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

const UserImg = () => {
  const {user} = useContext(GlobalContext);
  const { user_id, user_image } = user;

  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {};
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImage = async (user_id, user_image) => {
    
  };

  return (
    <>
      <Row
        style={{
          display: "flex",
          flexDirection: "colunm",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "300px",
          }}
        >
          <Image name="image" className={styles.img} src="ProPic.png" />
        </div>
        <Button type="primary" onClick={showModal}>
          Change Profile Image
        </Button>
      </Row>

      <Modal
        title="Edit Your Image"
        width={450}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Upload {...props} listType="picture" className="upload-list-inline">
            <Button icon={<UploadOutlined />}>
              Edit Your Profile Image 🥰
            </Button>
          </Upload>
        </div>
      </Modal>
    </>
  );
};

export default UserImg;
