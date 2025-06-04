import { useState } from "react";
import styles from "../../styles/Experiences.module.css";

const socialWork = [
  {
    position: "Sociální pracovnice",
    company: "různé organizace",
    year: "2016 – 2025",
    description: [
      "Působila jsem na různých pozicích v sociálních službách a v humanitárních organizacích (Persefona, Bwindi Orphans, Amnesty International, a další).",
      "Pracovala jsem s různorodými cílovými skupinami, vedla jsem konzultace i krizové intervence a podílela se na koordinaci několika projektů.",
      "Tyto zkušenosti mi daly pevné základy v řešení problémů, zvládání stresových situací a efektivní komunikaci.",
    ],
  },
];

const itExperience = [
  {
    position: "IT stážistka",
    company: "LemonITech",
    year: "2023 - 2025",
    description: [
      "V současné době jsem na stáži ve vývojářském týmu, kde se podílím na menších projektech v prostředí React Native. Zaměřuji se především na:",
      "- tvorbu a úpravu komponent,",
      "- řešení drobných issue z GitHubu,",
      "- manuální testování nových funkcionalit.",
      "Tato zkušenost mi umožňuje rozvíjet nejen technické dovednosti, ale také schopnost pracovat s kódem v týmu, reagovat na zpětnou vazbu a chápat workflow běžné vývojářské praxe.",
    ],
  },
];

function ExperienceBlock({ title, data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.column}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${openIndex === index ? styles.open : ""}`}
        >
          <button className={styles.cardHeader} onClick={() => toggle(index)}>
            <div>
              <strong>{item.position}</strong>, {item.company}
            </div>
            <span>{item.year}</span>
            <span className={styles.arrow}>
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.cardContent}>
              {item.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Experiences() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Pracovní zkušenosti</h2>
      <div className={styles.columns}>
        <ExperienceBlock title="Sociální práce" data={socialWork} />
        <ExperienceBlock title="IT praxe" data={itExperience} />
      </div>
    </section>
  );
}
