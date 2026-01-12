import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Про HolVas Digital Studio</h2>
          <p>
            HolVas — це Digital Studio, в якій команда створює сучасні веб-рішення
            для бізнесу: сайти, додатки, брендинг, SEO та цифровий маркетинг.
          </p>
          <p>
            Ми працюємо системно, прозоро та з фокусом на результат.
          </p>
        </div>

        <div className={styles.image}>
          <img src="/assets/about.jpg" alt="HolVas Digital Studio" />
        </div>
      </div>
    </section>
  );
}


// export default function About() {
//     return (
//         <section id="about" className="section">
//       <div className="container">
//         <h2>O mnie</h2>
//         <p>
//           HolVas — студія цифрових рішень. Розробляємо сайти, мобільні та
//           десктоп-додатки, займаєсь онлайн-просуванням бізнесу, веб-,
//           цифровим та поліграфічним дизайном, а також аналітикою даних
//           (business, product, marketing).
//         </p>
//       </div>
//     </section>
//     );
// }