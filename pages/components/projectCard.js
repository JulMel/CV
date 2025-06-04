import styles from "../../styles/Projects.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        {/* Přední strana */}
        <div className={styles.front}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        {/* Zadní strana */}
        <div className={styles.back}>
          <h3>{project.title}</h3>
          <p className={styles.details}>{project.details}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Zobrazit projekt →
          </a>
        </div>
      </div>
    </div>
  );
}
