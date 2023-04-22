import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Dropdown, Typography } from "antd";

const { Text } = Typography;
const items = [
  {
    label: <a href="/profile">Profile</a>,
    key: "0",
  },
  {
    label: <a href="/">Logout</a>,
    key: "1",
  },
];

export default function Usermenu() {
  return (
    <>
      <Row gutter={25} style={{ marginLeft: "0 0 0 10px" }}>
        <Col span={12}>
          <Text style={{ fontWeight: "500" }}>UserID1234</Text>
        </Col>
        <Col span={12}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Avatar src="Hero06.jpg" size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
