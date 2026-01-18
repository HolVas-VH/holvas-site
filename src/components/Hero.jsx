import styles from "../styles/Hero.module.css";
import heroBg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section id="hero" 
    className={`${styles.hero} ${styles.heroContent}`}
    style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>HolVas Digital Studio</h1>
      <p>Rozwiązania cyfrowe dla Twojej firmy</p>
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