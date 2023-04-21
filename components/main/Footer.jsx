import { Layout } from "antd";

const { Footer } = Layout;

export default function myFooter() {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        Projext Pets Hotel ©2023 | Created by Suchanart Khumbungkhla 6401861
      </Footer>
    </>
  );
}
