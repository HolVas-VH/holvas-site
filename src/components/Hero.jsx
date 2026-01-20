import styles from "../styles/Hero.module.css";
import heroBg from "../assets/images/hero.webp";

export default function Hero() {
  return (
    <section id="hero" 
    className={`${styles.hero} ${styles.heroContent}`}
    style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>HolVas Digital Studio</h1>
      <p className={styles.heroPdesc}>
        Tworzymy nowoczesne rozwiązania cyfrowe,<br/> które wspierają rozwój biznesu w Polsce i w całej Europie, 
        łącząc technologię z realnymi potrzebami firm. Działamy jako partnerzy — projektujemy stabilne, 
        skalowalne produkty i pomagamy klientom skutecznie przejść przez proces transformacji cyfrowej.</p>

      <p className={styles.heroPmobile}>
        Tworzymy nowoczesne rozwiązania cyfrowe, <br/>które wspierają rozwój biznesu w Polsce i w całej Europie. 
      </p>
      <button>Zamów konsultację</button>
    </section>
  );
}