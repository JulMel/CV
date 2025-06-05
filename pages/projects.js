import { useState } from "react";
import styles from "../styles/Projects.module.css";
import Header from "./header";
import ProjectFilter from "./components/projectFilter";
import ProjectCard from "./components/projectCard";
import projects from "../data/projectsData";

export default function Projects() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((project) => project.tech === selected);

  return (
    <section className={styles.wrapper}>
      <Header />
      <ProjectFilter selected={selected} setSelected={setSelected} />
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
