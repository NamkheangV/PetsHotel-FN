import { Layout, Menu, Button } from "antd";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header className={styles.header}>
      <div
        style={{
          float: "left",
          width: 280,
          height: 50,
          // backgroundColor: "red",
        }}
      >
        <Link href="/">
          <img
            alt="logo"
            src="/animal-shelter.png"
            style={{
              float: "left",
              width: "52px",
              height: "52px",
              margin: "4px 18px 0 0",
            }}
          />
        </Link>
        {/* <p>PETS HOTEL</p> */}
        <h1 className={styles.h1}>Pets Hotel</h1>
      </div>
      <Menu
        className={styles.menu}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="home">
          <Link href="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="rooms">
          <Link href="/#roomtest">ROOMS & SUITES</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href="/#contact">CONTACT</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link href="/login">
            <Button className={styles.btn} type="primary" shape="round">
              LOGIN / REGISTER
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
