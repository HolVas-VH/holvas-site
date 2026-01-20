import styles from "../styles/Hero.module.css";
import heroBg from "../assets/images/hero.webp";

export default function Hero() {
  return (
    <section id="hero" 
    className={`${styles.hero} ${styles.heroContent}`}
    style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>HolVas Digital Studio</h1>
      <p>Rozwiązania cyfrowe dla Twojej firmy<br/>
         Tworzymy nowoczesne rozwiązania cyfrowe, które wspierają rozwój biznesu w Polsce i w całej Europie, 
         łącząc technologię z realnymi potrzebami firm. Działamy jako partnerzy — projektujemy stabilne, 
         skalowalne produkty i pomagamy klientom skutecznie przejść przez proces transformacji cyfrowej.</p>
      <button>Zamów konsultację</button>
    </section>
  );
}


// export default function Hero() {
//     return (
//         <section className="hero">
//       <div className="container">
//         <h1>Цифрові рішення для вашого бізнесу</h1>
//         <p>Сайти, додатки, аналітика та дизайн під ключ</p>
//       </div>
//     </section>
//     );
// }