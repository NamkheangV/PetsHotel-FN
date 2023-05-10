import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Dropdown, Typography, Spin } from "antd";
import React, { useContext} from "react";
import { GlobalContext } from "@/lib/AppContext";
import Link from "next/link";
import Router from "next/router";
import { bufferToBlobUrl } from "@/lib/Image";
import cookieCutter from 'cookie-cutter';

export default function Usermenu() {
  const { user } = useContext(GlobalContext);
  const { user_id, user_image } = user;

  const { Text } = Typography;
  const items = [
  {
    label: <Link href="/Setting">Setting</Link>,
    key: "0",
  },
  {
    label: <Link href="/">Logout</Link>,
    key: "1",
    onClick: async () => {
      cookieCutter.set('user', null, {expires: new Date(0)});
      await Router.push("/");
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
            <Avatar
              src={(user_image && bufferToBlobUrl(user_image)) || <Spin />}
              size="large"
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
