import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

const menu = [
  { id: "about", label: "studio" },
  { id: "advantages", label: "atuty" },
  { id: "services", label: "oferta" },
  { id: "portfolio", label: "portfolio" },
  { id: "prices", label: "cennik" },
  { id: "contact", label: "kontakt" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#hero">HolVas Digital Studio</a>
      </div>

      {/* CONTACT DESKTOP */}
      <div className={styles.contact}>
        <a href="tel:+48736222757">+48 736 222 757</a>
        <a href="mailto:holvascompany@gmail.com">
          holvascompany@gmail.com
        </a>
      </div>

      <nav className={`${styles.nav} ${openMenu ? styles.navActive : ""}`}>
        {menu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpenMenu(false)}
            className={`${styles.link} ${
              active === item.id ? styles.active : ""
            }`}
          >
            {item.label}
            {active === item.id && <span className={styles.dot} />}
          </a>
        ))}
      </nav>

      <button
        className={styles.burger}
        onClick={() => setOpenMenu(!openMenu)}
      >
        ☰
      </button>
    </header>
  );
}
