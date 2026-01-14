import { useEffect, useState } from "react";
import phoneIcon from "../assets/icons/phone_32-removebg.png";
import mailIcon from "../assets/icons/mail_32-removebg.png";
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
      <div className={styles.contactsDesktop}>
        <a href="tel:+48736222757">+48 736 222 757</a>
        <a href="mailto:holvascompany@gmail.com">
          holvascompany@gmail.com
        </a>
      </div>

      {/* CONTACT MOBILE*/}
      <div className={styles.contactsMobile}>
        <a href="tel:+48736222757" aria-label="Call us">
          <img src={phoneIcon} alt="phone" />
        </a>
        <a href="mailto:holvascompany@gmail.com" aria-label="Send email">
          <img src={mailIcon} alt="mail letter" />
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
