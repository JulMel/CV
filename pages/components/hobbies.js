import { useState } from "react";
import styles from "../../styles/Hobbies.module.css";

const hobbies = [
  {
    title: "Treky",
    image: "/hobbies/trek.png",
    description:
      "Nejraději jsem venku v přírodě, s baťohem na horách, na dálkovém treku nebo trailovém běhu.",
  },
  {
    title: "Sportnovní lezení a ferraty",
    image: "/hobbies/lezeni.png",
    description:
      "Ráda si zajdu na stěnu a když to jde, tak i na skálu. Nejvíc adrenalinu ale zažívám na ferratách.",
  },
  {
    title: "Venčení Gordyho",
    image: "/hobbies/gordy.png",
    description:
      "Ve volném čase chodím na procházky s pejkem, kterého často hlídám rodičům.",
  },
  {
    title: "Jídlo",
    image: "hobbies/jidlo.png",
    description:
      "Miluju jídlo jíst, připravovat a hlavně ochutnávat nové věci. Občas i něco upeču.",
  },
  {
    title: "Cestování",
    image: "hobbies/cestovani.png",
    description:
      "Na cestování mám nejraději poznávání cizích kultur, neokoukaných míst a výstup z komfortní zóny.",
  },
  {
    title: "Knihy",
    image: "hobbies/knihy.png",
    description:
      "Mým oblíbeným žánrem jsou historické romány a skutečné příběhy. Ráda se začtu i do odbornější psychologické literatury.",
  },
];

export default function Hobbies() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % hobbies.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length);
  };

  const hobby = hobbies[index];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Zájmy</h2>
      <div className={styles.card}>
        <img src={hobby.image} alt={hobby.title} className={styles.image} />
        <div className={styles.content}>
          <h3>{hobby.title}</h3>
          <p>{hobby.description}</p>
          <div className={styles.controls}>
            <button
              onClick={prev}
              className={styles.arrow}
              aria-label="Předchozí"
            >
              ←
            </button>
            <button onClick={next} className={styles.arrow} aria-label="Další">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
