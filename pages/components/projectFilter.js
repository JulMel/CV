import styles from "../../styles/Projects.module.css";

export default function ProjectFilter({ selected, setSelected }) {
  const filters = [
    { label: "Vše", value: "all" },
    { label: "CSS & HTML", value: "css" },
    { label: "React", value: "react" },
    { label: "React Native", value: "react-native" },
  ];

  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setSelected(filter.value)}
          className={selected === filter.value ? styles.active : ""}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
