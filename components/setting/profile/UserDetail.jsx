import { Typography, Row, Col, Input, Form, Button } from "antd";

const { Text } = Typography;

export default function UserDetail() {
  return (
    <>
      <div>
        <Form>
          <Form.Item>
            <Row>
              <Col span={12}>
                <Text style={{ marginLeft: 10, color: "#434242" }}>
                  Username
                </Text>
                <Input defaultValue={"YUHAMIN001"} disabled />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row gutter={25}>
              <Col span={12}>
                <Text style={{ marginLeft: 10, color: "#434242" }}>
                  Firstname
                </Text>
                <Input defaultValue={"YU"} />
              </Col>
              <Col span={12}>
                <Text style={{ marginLeft: 10, color: "#434242" }}>
                  Lastname
                </Text>
                <Input defaultValue={"HAMIN"} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row gutter={25}>
              <Col span={12}>
                <Text style={{ marginLeft: 10, color: "#434242" }}>E-mail</Text>
                <Input defaultValue={"petshotel@gmail.com"} />
              </Col>
              <Col span={12}>
                <Text style={{ marginLeft: 10, color: "#434242" }}>
                  Contact
                </Text>
                <Input defaultValue={"094-398-6437"} />
              </Col>
            </Row>
          </Form.Item>
        </Form>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
