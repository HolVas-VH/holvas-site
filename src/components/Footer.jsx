import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Ліва колонка */}
      <div className={styles.top}>
        <h3>HolVas Digital Studio</h3>
        <p>Digital solutions for your business</p>
      </div>

      {/* Середній блок */}
      <div className={styles.middle}>
                {/* Контакти */}
        <div className={styles.contacts}>
          <a href="tel:+48736222757">+48 736 222 757</a>
          <a href="mailto:holvascompany@gmail.com">
            holvascompany@gmail.com
          </a>
        </div>

        {/* Меню */}
        <nav className={styles.menu}>
          <a href="#about">Studio</a>
          <a href="#services">Oferta</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#prices">Cennik</a>
//        <a href="#contact">Kontakt</a>
        </nav>
      </div>

      {/* Нижня частина */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} HolVas Digital Studio
      </div>
    </footer>
  );
}



//     <footer className="footer">
//       <div className="footer__container">

//         {/* Ліва колонка */}
//         <div className="footer__col">
//           <h3 className="footer__logo">HolVas Digital Studio</h3>
//           <p className="footer__desc">
//             Сайти, брендинг, SEO та цифровий маркетинг.
//             Працюємо системно та з фокусом на результат.
//           </p>
//         </div>

//         {/* Меню */}
//         <div className="footer__col">
//           <h4 className="footer__title">Nawigacja</h4>
//           <ul className="footer__menu">
//             <li><a href="#about">Studio</a></li>
//             <li><a href="#atuty">Atuty</a></li>
//             <li><a href="#services">Oferta"</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#prices">Cennik</a></li>
//             <li><a href="#contact">Kontakt</a></li>
//           </ul>
//         </div>

//         {/* Контакти */}
//         <div className="footer__col">
//           <h4 className="footer__title">Контакти</h4>
//           <ul className="footer__contact">
//             <li>📍 Польща / Європа</li>
//             <li>
//               📧 <a href="mailto:hello@holvas.digital">hello@holvas.digital</a>
//             </li>
//             <li>
//               🌐 <a href="https://holvas.digital" target="_blank" rel="noreferrer">
//                 holvas.digital
//               </a>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Нижня частина */}
//       <div className="footer__bottom">
//         <p>
//           © {new Date().getFullYear()} HolVas Digital Studio. Всі права захищені.
//         </p>
//       </div>
//     </footer>
