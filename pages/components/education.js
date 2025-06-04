import styles from "../../styles/Education.module.css";

const data = [
  {
    year: "2008 – 2017",
    title: "Gymnázium Vejrostova",
    subtitle: "Osmileté klasické studium",
  },
  {
    year: "2018 – 2022",
    title: "Fakulta sociálních studií, MUNI",
    subtitle: "Sociální antropologie, sociální práce",
  },
  {
    year: "2023",
    title: "Kurz kompletní krizové intervence",
    subtitle: "Déčko Liberec",
  },
  {
    year: "2024",
    title: "Junior Tester",
    subtitle: "Code Biters",
  },
  {
    year: "2024 – 2025",
    title: "CSS a HTML, Moderní JavaScript, TypeScript, React, React Native",
    subtitle: "online kurzy",
  },
];

export default function Education() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.heading}>Vzdělání a kurzy</h2>
      <div className={styles.timelineWrapper}>
        {data.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <span className={styles.year}>{item.year}</span>
            <div className={styles.dot}></div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
