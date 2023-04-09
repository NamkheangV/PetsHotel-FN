import Link from "next/link";
import { Carousel, Button, Divider } from "antd";
import styles from "@/styles/Home.module.css";

export default function Hero() {
  return (
    <div id="Home" className={styles.page}>
      <div className={styles.container}>
        {/* <h1>Home Page</h1> */}
        <Carousel autoplay>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/pet04.png" alt="img01" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/pet06.png" alt="img02" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/pet01.png" alt="img03" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/pet05.png" alt="img04" style={{ width: "100%" }} />
            </h3>
          </div>
        </Carousel>

        <div className={styles.buttons}>
          <Link href="/rooms">
            <Button className={styles.button} shape="round">
              BOOKING ROOM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
