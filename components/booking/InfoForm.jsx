import {
  Form,
  Input,
  Select,
  Radio,
  DatePicker,
  InputNumber,
  Row,
  Col,
  message,
  Button,
  Tooltip,
  Spin,
} from "antd";
import styles from "@/styles/Booking.module.css";
import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "@/lib/AppContext";

const { RangePicker } = DatePicker;

export default function InfoForm({setBookingData}) {
  const { user } = useContext(GlobalContext);
  const { user_id } = user 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [roomType, setRoomType] = useState([]);
  const [roomTypeSet, setRoomTypeSet] = useState([]);

  useEffect(() => {
    fetchRoomType();
  }, []);

  useEffect(() => {
    if (roomType.length > 0) {
      // console.log({ roomType });
      const roomTypeName = roomType.map((item) => item.room_type);
      const roomTypeSet = new Set(roomTypeName);

      setRoomTypeSet([...roomTypeSet]);
      // console.log(roomTypeSet);
    }
  }, [roomType]);

  const fetchRoomType = async () => {
    try {
      const res = await useAxios.get("/rooms");
      setRoomType(res.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 409) {
          setError("This username is already taken");
        } else setError("Something went wrong");
      }
    }
  };

  const onFinish = (values) => { 
    const {
      cus_fname,
      cus_lname,
      cus_contact,
      petamount,
      breed,
      pet_name,
      checkdate,
      roomtype,
    } = values;
    // transform array date to string
    const checkin_date = checkdate[0].format("YYYY/MM/DD");
    const checkout_date = checkdate[1].format("YYYY/MM/DD");
   
    // console.log(values);

    const room_id = roomType.find(
      (item) => item.room_type === roomtype
    ).room_id;

    handleSave(
      cus_fname,
      cus_lname,
      cus_contact,
      petamount,
      breed,
      pet_name,
      checkin_date,
      checkout_date,
      room_id
    );
  };

  const handleSave = async (
    bk_cus_fname,
    bk_cus_lname,
    bk_cus_phone,
    bk_pet_amount,
    bk_pet_breed,
    bk_pet_name,
    checkin_date,
    checkout_date,
    room_id
  ) => {
    setLoading(true);
    try {
      const res = await useAxios.post("/booking", {
        bk_cus_fname,
        bk_cus_lname,
        bk_cus_phone,
        bk_pet_amount,
        bk_pet_breed,
        bk_pet_name,
        checkin_date,
        checkout_date,
        room_id,
        user_id: user_id,
      });
      setBookingData(res.data);
      console.log("setBookingData", res.data);
      message.open({ type: "success", content: "Booking successfully! 😘" });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 409) {
          setError("This username is already taken");
          message.open({
            type: "error",
            content: "This username is already taken!  😱 ",
          });
        } else setError("Something went wrong");
      } else setError("Something went wrong.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Form
        size="large"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{ justifyContent: "end" }}>
          <Form.Item>
            <Tooltip title="Save information">
              <Button htmlType="submit" shape="circle">
                {loading ? <Spin /> : <DownloadOutlined />}
              </Button>
            </Tooltip>
          </Form.Item>
        </Row>

        <Row gutter={100}>
          <Col span={12}>
            <Form.Item label="Firstname" name="cus_fname">
              <Input placeholder="Suchanart" />
            </Form.Item>

            <Form.Item label="Contact" name="cus_contact">
              <Input placeholder="091-234-5678" />
            </Form.Item>

            <Form.Item label="Breed" name="breed">
              <Radio.Group>
                <Radio value="Dog"> Dog </Radio>
                <Radio value="Cat"> Cat </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Room Type" name="roomtype">
              <Select placeholder="Select Room Type">
                {roomTypeSet &&
                  roomTypeSet.map((item) => (
                    <Select.Option value={item}>{item}</Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Right */}
          <Col span={12}>
            <Form.Item label="Lastname" name="cus_lname">
              <Input placeholder="Khumbungkhla" />
            </Form.Item>

            <Form.Item label="Pet(s)" name="petamount">
              <InputNumber placeholder="0" min={1} max={3} />
            </Form.Item>

            <Form.Item label="Pet name" name="pet_name">
              <Input placeholder="Moon, Sunshine, Pepermint" />
            </Form.Item>

            <Form.Item label="Check IN-OUT" name="checkdate">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
