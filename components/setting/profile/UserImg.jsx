import styles from "@/styles/Setting.module.css";
import { Image, Row, Upload, Button, Modal, message, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { bufferToBlobUrl } from "@/lib/Image";
import Router from "next/router";

const UserImg = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(GlobalContext);
  const { user_id, user_image } = user;
  const [error, setError] = useState("");

  const [file, setFile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const { user_id } = user;
    handleImage(user_id);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("user_img", file);
    try {
      const res = await useAxios.put(`/users/${user_id}`, formData);
      message.success("Update Profile Image Successfully");
      setIsModalOpen(false);
      // console.log(res);
      setLoading(false);
      Router.reload();
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
      // console.log(info.fileList);
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setFile(info.file.originFileObj);
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
          <Image
            className={styles.img}
            src={(user_image && bufferToBlobUrl(user_image)) || <Spin />}
          />
        </div>
        <Button type="primary" onClick={showModal} style={{ marginTop: 10 }}>
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
          {loading ? (
            <Spin />
          ) : (
            <Upload {...props} maxCount={1} customRequest={({ onSuccess }) => setTimeout(() => { onSuccess("ok", null); }, 0) }>
              <Button icon={<UploadOutlined />}>
                Edit Your Profile Image 🥰
              </Button>
            </Upload>
          )}
        </div>
      </Modal>
    </>
  );
};

export default UserImg;
