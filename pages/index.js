import styles from "../styles/Home.module.css";
import Header from "./header";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../public/illustration.png";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Ahoj, jsem Julie 👋</h1>
          <p className={styles.subtitle}>
            Tento web vznikl jako součást mé cesty do světa informačních
            technologií.
          </p>
          <Link href="/projects" className={styles.ctaButton}>
            Zobrazit moje projekty
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={heroImg}
            alt="Ilustrace laptop a hrnek"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className={styles.introSection}>
        <div className={styles.paragraph}>
          <p>
            Vše začalo kurzem manuálního testování – skvělá první zkušenost,
            která mi pomohla pochopit základy. Když jsem se ale začala učit
            automatizované testování, objevila jsem v sobě zájem o programování
            – a u něj jsem zůstala.
          </p>
          <p>
            Postupně jsem se začala orientovat v HTML a CSS, pokračovala jsem s
            JavaScriptem a později přešla k Reactu. Učím se pracovat s Next.js,
            který mi pomáhá spojovat jednotlivé části do funkčního webu. Zkouším
            také TypeScript, React Native a pomalu si osvojuji nástroje, které
            mi umožní tvořit praktické aplikace – nejen pro web, ale i pro
            mobilní zařízení.
          </p>

          <p>
            Cílem tohoto webu není ukázat dokonalý kód, ale cestu, jak se k němu
            krok za krokem přibližuju. Najdete tu něco málo o mně, moje první
            programovací pokusy, malé úspěchy i věci, které bych za rok možná
            přepsala úplně jinak.
          </p>

          <p>
            Web zatím není kompletní – stejně jako moje cesta v IT. Postupně ho
            budu doplňovat, jak se budu učit nové věci a získávat zkušenosti.
            Moje projekty najdete také na&nbsp;
            <a
              href="https://github.com/JulMel"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHubu
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
