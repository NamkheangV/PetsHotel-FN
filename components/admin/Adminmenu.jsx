import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Dropdown, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import Link from "next/link";
import Router from "next/router";

export default function Adminmenu() {
  const { user } = useContext(GlobalContext);

  const { Text } = Typography;
  const items = [
  {
    label: <Link href="/adminService">Service</Link>,
    key: "0",
  },
  {
    label: <Link href="/">Logout</Link>,
    key: "1",
    onClick: () => {
      localStorage.removeItem("user");
      Router.push("/");
      Router.reload();
    },
  },
];
  return (
    <>
      <Row gutter={25} style={{ marginLeft: "0 0 0 10px" }}>
        <Col span={12}>
          <Text style={{ fontWeight: "500" }}>Admin</Text>
        </Col>
        <Col span={12}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Avatar src="admin.jpg" size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
