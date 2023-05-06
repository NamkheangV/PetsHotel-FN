import {
  Form,
  Input,
  Row,
  Col,
} from "antd";
import styles from "@/styles/Booked.module.css";
import { useEffect } from "react";
import formatDate from "@/lib/Date";

export default function AdInFo({ data }) {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("data", data);
    form.setFieldsValue({
      cus_fname: data.bk_cus_fname,
      cus_lname: data.bk_cus_lname,
      cus_contact: data.bk_cus_phone,
      petamount: data.bk_pet_amount+"",
      pet_name: data.bk_pet_name,
      breed: data.bk_pet_breed,
      roomtype: data.room_type,
      checkdate: `${formatDate(data.checkin_date)} - ${formatDate( data.checkout_date)}`,
    });
  }, [data]);

  return (
    <div className={styles.container}>
      <Form form={form} size="large" labelCol={{ span: 10 }}>
        <Row gutter={100}>
          <Col span={12}>
            <Form.Item label="Firstname" name="cus_fname">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Contact" name="cus_contact">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Breed" name="breed">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Room Type" name="roomtype">
              <Input disabled />
            </Form.Item>
          </Col>

          {/* Right */}
          <Col span={12}>
            <Form.Item label="Lastname" name="cus_lname">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Pet(s)" name="petamount">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Pet name" name="pet_name">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Check IN-OUT" name="checkdate">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
