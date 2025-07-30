const projectsData = [
  {
    title: "Web Goldendoodle",
    image: "/css&html/WEB1.png",
    description: "Jednostránkový web věnovaný plemenu Goldendoodle.",
    tech: "css",
    details:
      "Procvičení základní struktury HTML dokumentu, tvorby stylů pomocí CSS a jednoduchého rozvržení obsahu.",
    link: "https://github.com/JulMel/1.-web",
  },
  {
    title: "Web Kavárny",
    image: "/css&html/WEB2.png",
    description: "Vícestránkový web pro prezentaci kavárny.",
    tech: "css",
    details:
      "Procvičení základní struktury HTML dokumentu, stylování obsahu pomocí CSS a vytvoření vícestránkového webu.",
    link: "https://github.com/JulMel/2.-web",
  },
  {
    title: "Web řemeslné zmrzliny",
    image: "/css&html/WEB3.png",
    description: "Jednostránkový web pro zmrzlinárnu.",
    tech: "css",
    details:
      "Procvičení základní vizuální hierarchie a zarovnání obsahu, tvorba základního layoutu webové stránky.",
    link: "https://github.com/JulMel/3.-web",
  },
  {
    title: "Úkolníček",
    image: "/react/React1-Tasker.png",
    description:
      "Jednoduchá aplikace pro správu úkolů. Jedná se o můj první projekt vytvořený v rámci kurzu Reactu.",
    tech: "react",
    details:
      "Při tvorbě projektu jsem si osvojila práci s komponentami a se seznamy dat pomocí funkcí map a filter. Také jsem se naučila používat React hook useState pro správu stavu aplikace.",
    link: "https://github.com/JulMel/Tasker",
  },
  {
    title: "Moje zahrada",
    image: "/react/React3-Stromy.png",
    description:
      "Webová aplikace, která zobrazuje seznam stromů. Každý strom je vykreslen pomocí samostatné komponenty.",
    tech: "react",
    details:
      "Při tvorbě webu jsem využila: práci s daty, funkce map a filter, předávání dat pomocí props a správu stavu pomocí hooku useState.",
    link: "https://github.com/JulMel/List",
  },
  {
    title: "Generátor vtipů",
    image: "/react/React4-Chuck-Norris-API.png",
    description:
      "Webová aplikace, která slouží jako generátor vtipů o Chucku Norrisovi s manuálním i automatickým přepínáním.",
    tech: "react",
    details:
      "V rámci tohoto projektu jsem se nově naučila pracovat s API a React hookem useEffect.",
    link: "https://github.com/JulMel/Chuck-Norris-jokes",
  },
  {
    title: "Madeira itinerář",
    image: "/react/React7-Madeira.png",
    description:
      "Tato webová aplikace slouží jako itinerář pro přechod Madeiry. Pro každý den je vytvořena samostatná karta s plánem dne.",
    tech: "react",
    details:
      "V rámci tohoto projektu jsem si osvojila manuální i automatické listování mezi kartami a zároveň jsem se naučila pracovat s knihovnou react-icons.",
    link: "https://github.com/JulMel/Madeira-itinerary",
  },
  {
    title: "Formulář",
    image: "/react/React8-Form.png",
    description:
      "Jednoduchý formulář, ve kterém uživatel vyplní své údaje a po odeslání se data propíší přímo na stránku.",
    tech: "react",
    details:
      "Při práci na tomto projektu jsem si osvojila: správu vstupních polí (formulářových komponent), vytváření nových objektů a jejich ukládání do pole, dynamické vykreslování obsahu pomocí map.",
    link: "https://github.com/JulMel/Form",
  },
  {
    title: "Měsíce v roce",
    image: "/react/React6-Kalendář.png",
    description:
      "Tato aplikace zobrazuje jednotlivé měsíce roztříděné podle ročních období. Součástí stránky je sekce FAQ, jejíž komponenta Question byla otestována pomocí Jest a React Testing Library.",
    tech: "react",
    details:
      "V rámci tohoto projektu jsem zúročila znalosti z předchozích aplikací a zároveň jsem si vyzkoušela generování obrázků pomocí AI. Projekt obsahuje automatizovaný unit test komponenty Question pomocí knihoven Jest a React Testing Library.",
    link: "https://github.com/JulMel/Calendar",
  },
  {
    title: "Nákupní seznam",
    image: "/react/React10-Nákupní-seznam.png",
    description:
      "Tato aplikace slouží k zadávání položek na nákupní seznam prostřednictvím formuláře.",
    tech: "react",
    details:
      "Po přidání položky, případně při odeslání prázdného formuláře, se uživateli krátce zobrazí upozornění formou notifikace. Projekt vznikl v rámci kurzu Reactu a byl zaměřen na efektivnější správu stavů pomocí useReducer.",
    link: "https://github.com/JulMel/Nakupni-seznam",
  },
  {
    title: "Vánoční cukroví",
    image: "/react/React11-Cukrovi.png",
    description:
      "Webová aplikace s recepty na cukroví a objednávkovým formulářem.",
    tech: "react",
    details:
      "Projekt vznikl v rámci studia TypeScriptu. Cílem bylo vytvořit plně funkční aplikaci s komponentovou strukturou v Reactu pomocí TypeScriptu. Využila jsem: typování props a stavů, použití interface a type pro popis datových struktur, a další.",
    link: "https://github.com/JulMel/Cukrovi",
  },
  {
    title: "Plyšová zvířátka",
    image: "/react/React12-Plyšáci.png",
    description:
      "Webová aplikace, která slouží k prohlížení kolekce plyšových zvířátek a jejich filtrování podle názvu.",
    tech: "react",
    details:
      "Uživatel může napsat hledané písmeno nebo slovo a aplikace zobrazí pouze ta zvířátka, jejichž název odpovídá. Projekt vznikl jako cvičení v rámci studia Reactu a TypeScriptu.  Cílem bylo procvičit si typování dat, práci se stavem (`useState`, `useEffect`) a základní filtraci dat.",
    link: "https://github.com/JulMel/Plysaci",
  },
  {
    title: "Kalkulačka",
    image: "/react-native/kalkulačka1.png",
    description:
      "Tento projekt vznikl v rámci kurzu React Native a slouží jako jednoduchá mobilní aplikace kalkulačky.",
    tech: "react-native",
    details:
      "Při práci na tomto projektu jsem se naučila: vytvářet a kombinovat komponenty, spravovat stav aplikace pomocí useState, navrhovat jednoduché rozhraní pomocí StyleSheet a orientovat se v prostředí Expo.",
    link: "https://github.com/JulMel/1.-React-Native-project",
  },
  {
    title: "ToDo App",
    image: "/react-native/ToDo1.png",
    description:
      "ToDo App je jednoduchá mobilní aplikace pro správu úkolů. Umožňuje vytvoření nového úkolu, jeho zobrazení a smazání.",
    tech: "react-native",
    details:
      "Při práci na tomto projektu jsem si procvičila: správu stavu pomocí useState, práci se seznamem dat (map), mazání položek podle ID (pomocí filter) a stylování pomocí StyleSheet.",
    link: "https://github.com/JulMel/ToDo-app",
  },
  {
    title: "Aplikace pro pojišťovnu",
    image: "/react-native/opus1.png",
    description:
      "Mobilní aplikace pro sjednávání pojištění a finančních produktů.",
    tech: "react-native",
    details:
      "Při práci na tomto projektu jsem si osvojila práci s komponentami v prostředí React Native a TypeScriptu, naučila se efektivně pracovat se SVG ikonami a zlepšila jsem se ve spolupráci s UX designéry. Také jsem využila React hook useState pro správu stavů a dynamické zobrazování obsahu.",
  },
];

export default projectsData;
