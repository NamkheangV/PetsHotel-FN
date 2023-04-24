import { Menu } from "antd";
import { Link } from "react-scroll";
import LogButton from "./LogButton";
import Usermenu from "../user/Usermenu";
import Adminmenu from "../admin/Adminmenu";
import styles from "@/styles/Navbar.module.css";

const status = "admin";

export default function NavMenu() {
  return (
    <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={["2"]}>
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
        {status === "admin" ? (
          <Adminmenu />
        ) : status === "user" ? (
          <Usermenu />
        ) : (
          <LogButton />
        )}
      </Menu.Item>
    </Menu>
  );
}
