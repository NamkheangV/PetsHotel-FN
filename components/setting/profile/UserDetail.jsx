import { Typography, Row, Col, Input, Form, Button, message, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import cookieCutter from "cookie-cutter";
import { Router } from "next/router";

const { Text } = Typography;

export default function UserDetail() {
  const { user, setUser } = useContext(GlobalContext);
  const { user_id, user_fname, user_lname, user_email, user_phone } = user;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: user_id,
      fname: user_fname,
      lname: user_lname,
      email: user_email,
      phone: user_phone,
    });
  }, [user]);

  const onFinish = (values) => {
    const { username, fname, lname, email, phone } = values;
    handleUpdate(username, fname, lname, email, phone);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUpdate = async (
    user_id,
    user_fname,
    user_lname,
    user_email,
    user_phone
  ) => {
    setLoading(true);
    try {
      const res = await useAxios.put(`/users/${user_id}`, {
        user_id,
        user_fname,
        user_lname,
        user_email,
        user_phone,
      });
      message.open({ type: "success", content: "Updated successfully! 🎉" });
      useAxios
        .get(`/users/${user_id}`)
        .then((r) => {
          const { user_image, ...userWithoutImg } = r.data;
          cookieCutter.set("user", JSON.stringify(userWithoutImg));
          console.log("ress" , r.data);
          setUser({ ...r.data, user_image: r.data.user_image });
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    } catch (e) {
      setLoading(false);
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

  return (
    <>
      <Form
        form={form}
        name="detailForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={12}>
            <Form.Item name="username">
              <Text style={{ marginLeft: 10, color: "#434242" }}>Username</Text>
              <Input value={user_id} disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col span={12}>
            <Text style={{ marginLeft: 10, color: "#434242" }}>Firstname</Text>
            <Form.Item name="fname">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Text style={{ marginLeft: 10, color: "#434242" }}>Lastname</Text>
            <Form.Item name="lname">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col span={12}>
            <Text style={{ marginLeft: 10, color: "#434242" }}>E-mail</Text>
            <Form.Item name="email">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Text style={{ marginLeft: 10, color: "#434242" }}>Contact</Text>
            <Form.Item name="phone">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row style={{ display: "flex", justifyContent: "flex-end" }}>
          <Form.Item>
            <Button htmlType="submit" style={{ marginLeft: 10 }}>
              {loading ? <Spin /> : "Save"}
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
}
