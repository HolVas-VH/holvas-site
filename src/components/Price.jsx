import { useState } from "react";
import styles from "../styles/Prices.module.css";

export default function Prices() {
  const [openIndex, setOpenIndex] = useState(null);
  const prices = [
    { title: "Розробка сайту", description: "Вартість від 1000zł" },
    { title: "SEO оптимізація", description: "Вартість від 1500zł" },
    { title: "SMM маркетинг", description: "Вартість від 300zł" },
  ];

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="prices" className={styles.prices}>
      <h2>Ціни на послуги</h2>
      {prices.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <button onClick={() => toggle(idx)}>{item.title}</button>
          {openIndex === idx && <div className={styles.description}>{item.description}</div>}
        </div>
      ))}
    </section>
  );
}
