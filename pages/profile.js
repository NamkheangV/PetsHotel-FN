import Head from "next/head";
import styles from "@/styles/Profile.module.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { ProfileOutlined, HistoryOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Content, Sider } = Layout;
const items = [
  getItem("Profile", "1", <ProfileOutlined />),
  getItem("Hisory", "2", <HistoryOutlined />),
  getItem("Option 3", "3"),
];

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Pets Hotel</title>
        <meta name="description" content="Pets Hotel" />
      </Head>

      <div className={styles.container}>
        <Layout>
          <Sider
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </Sider>
          <Layout>
            <Content className={styles.content}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  backgroundColor: "#0001",
                }}
              >
                Content
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
