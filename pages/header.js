import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className={styles.header}>
      <nav>
        <Link
          href="/"
          className={currentPath === "/" ? styles.active : undefined}
        >
          Domů
        </Link>
        <Link
          href="/about"
          className={currentPath === "/about" ? styles.active : undefined}
        >
          O mně
        </Link>
        <Link
          href="/projects"
          className={currentPath === "/projects" ? styles.active : undefined}
        >
          Projekty
        </Link>
      </nav>
    </header>
  );
}
