import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div id="about" className={styles.page}>
      <h1 className={styles.h1}>ABOUT US</h1>
      <div className={styles.p}>
        <p>
          When mice are kept at high population densities, their behaviour
          changes
        </p>
        <p>
          in a number of ways. Aggressive activity within populations of mice
          rises
        </p>
        <p>
          as density increases. Cannibalism of young also goes up, and so does
        </p>
        <p>
          aberrant sexual activity. Communal nesting, frequent in natural mouse
        </p>
        <p>
          populations, increases abnormally. In one example, 58 mice one to
          three
        </p>
        <p>
          days old (from several litters) were found in one nest, most unusual
        </p>
        <p>
          communal living. None survived because most of the mothers deserted
          them
        </p>
        <p> immediately after birth.</p>
      </div>
    </div>
  );
}
