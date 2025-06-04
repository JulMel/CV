import styles from "../styles/About.module.css";
import Header from "./header";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Hobbies from "./components/hobbies";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <Education />
      <Experiences />
      <Hobbies />
    </div>
  );
}
