import logoImg from "../assets/icons/logo-long_hv.svg";
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

            HolVas — rozwiązania cyfrowe dla Twojej firmy  
            W HolVas wierzymy, że skuteczne rozwiązania cyfrowe zaczynają się od głębokiego zrozumienia biznesu, 
            a nie wyłącznie od technologii. Wspieramy firmy w Polsce oraz na terenie całej Europy, pomagając im 
            przekształcać cele biznesowe w stabilne, skalowalne i realnie działające produkty cyfrowe. Projektujemy 
            i wdrażamy nowoczesne aplikacje webowe, systemy biznesowe oraz rozwiązania dopasowane do indywidualnych 
            potrzeb klientów. Naszą siłą jest partnerskie podejście, elastyczność oraz szybka reakcja na zmieniające 
            się wymagania rynku. Dzięki doświadczeniu i pracy zgodnej z europejskimi standardami, HolVas staje się 
            zaufanym partnerem w długofalowej transformacji cyfrowej.
          </p>
          <p>
            Ми працюємо системно, прозоро та з фокусом на результат.
          </p>
        </div>

        <div className={styles.image}>
          <img src={logoImg} alt="HolVas Digital Studio" />
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