import Head from "next/head";
import { Layout, Carousel } from "antd";
import styles from "@/styles/Home.module.css";

const { Content } = Layout;
const contentStyle = {
  height: "500px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Pets Hotel</title>
        <meta name="description" content="Pets Hotel,โรงแรมสัตว์เลี้ยง" />
      </Head>

      <Content>
        <div className={styles.container}>
          {/* <h1>Home Page</h1> */}
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img src="/Team7.jpg" alt="team7" style={{ width: "100%" }} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </Content>
    </div>
  );
}
