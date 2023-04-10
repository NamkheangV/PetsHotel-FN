import Link from "next/link";
import { Carousel, Button, Divider } from "antd";
import styles from "@/styles/Home.module.css";

export default function Hero() {
  return (
    <div id="home" className={styles.page}>
      <div className={styles.container}>
        <Carousel autoplay>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/try01.png" alt="img01" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/try02.png" alt="img02" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/try04.png" alt="img03" style={{ width: "100%" }} />
            </h3>
          </div>
          <div>
            <h3 className={styles.contentStyle}>
              <img src="/try03.png" alt="img04" style={{ width: "100%" }} />
            </h3>
          </div>
        </Carousel>

        {/* <div className={styles.buttons}>
          <Link href="/">
            <Button className={styles.button} shape="round">
              BOOKING ROOM
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
