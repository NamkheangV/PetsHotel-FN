import { Layout } from "antd";
import Link from "next/link";
import NavMenu from "./NavMenu";
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
        <h1 className={styles.h1}>Pets Hotel</h1>
      </div>
      
      <NavMenu />
    </Header>
  );
}
