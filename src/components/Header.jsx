import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>HolVas Digital Studio</div>
      <nav className={`${styles.nav} ${openMenu ? styles.active : ""}`}>
        <a href="#about">studio</a>
        <a href="#advantages">atuty</a>
        <a href="#services">oferta</a>
        <a href="#portfolio">portfolio</a>
        <a href="#prices">cennik</a>
        <a href="#contact">kontakt</a>
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


// import { useEffect, useState } from "react";
// import styles from "../styles/Header.module.css";
// const sections = ["about", "advantages", "services", "portfolio", "prices", "contact"];
// // "studio", "atuty", "oferta", "portfolio", "cennik", "kontakt"

// export default function Header() {
//   const [active, setActive] = useState("");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach(id => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>HolVas</div>
//       <nav className={styles.nav}>
//         {sections.map(id => (
//           <a
//             key={id}
//             href={`#${id}`}
//             className={active === id ? styles.active : ""}
//           >
//             {id}
//           </a>
//         ))}
//       </nav>
//     </header>
//   );
// }

// export default function Header() {
//     return (
//         <header className="header">
//       <div className="container">
//         <div className="logo">HolVas</div>
//         <nav className="nav">
//           <a href="#about">Pro Studio</a>
//           <a href="#portfolio">Prtfolio</a>
//           <a href="#price">Oferta</a>
//           <a href="#contact">Kontakt</a>
//         </nav>
//       </div>
//     </header>
//   );
// }