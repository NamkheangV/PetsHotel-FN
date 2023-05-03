import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Dropdown, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/AppContext";
import Link from "next/link";
import Router from "next/router";

export default function Usermenu() {
  const { user } = useContext(GlobalContext);

  const { Text } = Typography;
  const items = [
  {
    label: <Link href="/setting">Setting</Link>,
    key: "0",
  },
  {
    label: <Link href="/">Logout</Link>,
    key: "1",
    onClick: () => {
      localStorage.removeItem("user");
      Router.push("/");
      Router.reload();
    }
  },
];

  return (
    <>
      <Row gutter={25} style={{ marginLeft: "0 0 0 10px" }}>
        <Col span={12}>
          <Text style={{ fontWeight: "500" }}>{user.user_id}</Text>
        </Col>
        <Col span={12}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Avatar src="ProPic.png" size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
