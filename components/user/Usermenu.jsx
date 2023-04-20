import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Dropdown, Button } from "antd";

const items = [
  {
    label: "Profile",
    key: "0",
  },
  {
    label: "Status",
    key: "1",
  },
  {
    label: "History",
    key: "2",
  },
  {
    label: <a href="/">Logout</a>,
    key: "3",
  },
];

export default function Usermenu() {
  return (
    <>
      <Row gutter={25} style={{ margin: "0 0 0 10px" }}>
        <Col span={12}>
          <div>User1234</div>
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
