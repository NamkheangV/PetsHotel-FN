import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div id="about" className={styles.page}>
      <h1 className={styles.h1}>ABOUT US</h1>
      <div className={styles.p}>
        <p>
          At our pet hotel, we provide the best possible care for your furry
          friends while you're away.
        </p>
        <p>
          Our experienced and dedicated staff is passionate about animals and
          will ensure that your pets receive the attention and care they
          deserve.
        </p>
        <p>
          We offer a range of services to make your pet's stay as comfortable as
          possible.
        </p>
        <p>
          From spacious accommodations to daily exercise and playtime, we strive
          to make our pet hotel a home away from home for your beloved pets.
        </p>
        <p>
          Our facilities are designed with your pet's safety and comfort in
          mind. 
        </p>
        <p>We maintain a clean and hygienic environment to ensure that your
          pets are healthy and happy during their stay.</p>
        <p>
          At our pet hotel, we understand that your pets are a part of your
          family. 
        </p>
        <p>That's why we treat them like our own and provide them with
          the love and attention they need to thrive.</p>
      </div>
    </div>
  );
}
