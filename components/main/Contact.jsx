import styles from "@/styles/Contact.module.css";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default function Contact() {
  return (
    <div id="contact">
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.h1}>CONTACT US</h1>

          <div className={styles.Icon}>
          </div>
        </div>
      </div>
    </div>
  );
}
