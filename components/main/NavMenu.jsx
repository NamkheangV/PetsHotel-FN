import { Menu } from "antd";
import { Link } from "react-scroll";
import LogButton from "./LogButton";
import Usermenu from "../user/Usermenu";
import Adminmenu from "../admin/Adminmenu";
import styles from "@/styles/Navbar.module.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/lib/AppContext";

export default function NavMenu() {
  const { user } = useContext(GlobalContext);

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
        {user.user_type === 1 ? (
          <Usermenu />
        ) : user.user_type === 0 ? (
          <Adminmenu />
        ) : (
          <LogButton />
        )}
      </Menu.Item>
    </Menu>
  );
}
