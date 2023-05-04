import styles from "@/styles/Setting.module.css";
import { Image, Row, Upload, Button, Modal, message, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { bufferToUrl, bufferToBlobUrl } from '@/lib/Image';

const UserImg = () => {
  const {user} = useContext(GlobalContext);
  const { user_id, user_image } = user;

  const [file, setFile] = useState(null);

  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const { user_id,  } = user;
    handleImage(user_id);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImage = async () => {
    const formData = new FormData();
    formData.append("user_img", file);
    try {
      const res = await useAxios.put(`/users/${user_id}`, formData);
      message.success("Update Profile Image Successfully");
      setIsModalOpen(false);

      console.log(res);
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
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(`${file.name} IS NOT FILE IMAGE!`);
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      setFile (info.file.originFileObj);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
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
