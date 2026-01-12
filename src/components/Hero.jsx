import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>HolVas Digital Studio</h1>
      <p>Цифрові рішення для вашого бізнесу</p>
      <button>Замовити консультацію</button>
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