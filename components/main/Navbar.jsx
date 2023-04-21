import { Layout, Menu } from "antd";
import { Link } from "react-scroll";
import styles from "@/styles/Navbar.module.css";
import LogButton from "./LogButton";
import Usermenu from "../user/Usermenu";

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
        <h1 className={styles.h1}>Pets Hotel</h1>
      </div>

      <Menu
        className={styles.menu}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="home">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            HOME
          </Link>
        </Menu.Item>
        <Menu.Item key="rooms">
          <Link to="room" spy={true} smooth={true} offset={-100} duration={500}>
            ROOMS & SUITES
          </Link>
        </Menu.Item>

        <Menu.Item key="contact">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </Menu.Item>

        <Menu.Item key="login">
          <Usermenu />
        </Menu.Item>
      </Menu>
    </Header>
  );
}
