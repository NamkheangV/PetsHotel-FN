import Head from "next/head";
import styles from "@/styles/Setting.module.css";
import { useState } from "react";
import { Layout, Menu } from "antd";
import React from "react";
import {
  ProfileOutlined,
  HistoryOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import Profile from "@/components/setting/Profile.jsx";
import History from "@/components/setting/History.jsx";
import ChangePass from "@/components/setting/ChangePass.jsx";

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
  {
    title: "Profile",
    key: "0",
    icon: <ProfileOutlined />,
    content: Profile(),
  },
  {
    title: "History",
    key: "1",
    icon: <HistoryOutlined />,
    content: History(),
  },
  {
    title: "Change Password",
    key: "2",
    icon: <KeyOutlined />,
    content: ChangePass(),
  },
];

export default function Setting() {
  const [current, setCurrent] = useState(0);

  // selected item to change content
  const selected = (e) => {
    setCurrent(e.key);
    console.log(e.key);
  };

  const item = items.map((item) => ({
    key: item.key,
    label: item.title,
    icon: item.icon,
  }));

  return (
    <>
      <Head>
        <title>Profile | Pets Hotel</title>
        <meta name="description" content="Pets Hotel" />
      </Head>

      <div className={styles.container}>
        <Layout className={styles.layout}>
          <Sider
            className={styles.sider}
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu
              className={styles.menu}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["0"]}
              onClick={selected}
              items={item}
            />
          </Sider>
          <Layout className={styles.layout}>
            <Content className={styles.content}>
              <div className={styles.box}>{items[current].content}</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
