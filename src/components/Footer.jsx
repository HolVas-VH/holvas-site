export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Ліва колонка */}
        <div className="footer__col">
          <h3 className="footer__logo">HolVas Digital Studio</h3>
          <p className="footer__desc">
            Сайти, брендинг, SEO та цифровий маркетинг.
            Працюємо системно та з фокусом на результат.
          </p>
        </div>

        {/* Меню */}
        <div className="footer__col">
          <h4 className="footer__title">Навігація</h4>
          <ul className="footer__menu">
            <li><a href="#about">Про нас</a></li>
            <li><a href="#services">Послуги</a></li>
            <li><a href="#portfolio">Портфоліо</a></li>
            <li><a href="#prices">Ціни</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </div>

        {/* Контакти */}
        <div className="footer__col">
          <h4 className="footer__title">Контакти</h4>
          <ul className="footer__contact">
            <li>📍 Польща / Європа</li>
            <li>
              📧 <a href="mailto:hello@holvas.digital">hello@holvas.digital</a>
            </li>
            <li>
              🌐 <a href="https://holvas.digital" target="_blank" rel="noreferrer">
                holvas.digital
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Нижня частина */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} HolVas Digital Studio. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
