import { Layout } from "antd";

const { Footer } = Layout;

export default function myFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
        color: "black",
      }}
    >
      Pets Hotel ©2023 | Created by Suchanart
    </Footer>
  );
}
