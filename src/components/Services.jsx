import styles from "../styles/Services.module.css";

const services = [
  {
    title: "Розробка сайтів",
    text: "Landing Page, корпоративні сайти, веб-додатки.",
  },
  {
    title: "UI/UX дизайн",
    text: "Продуманий дизайн, що конвертує відвідувачів у клієнтів.",
  },
  {
    title: "SEO та оптимізація",
    text: "Покращення видимості сайту та швидкості завантаження.",
  },
  {
    title: "Підтримка та розвиток",
    text: "Оновлення, масштабування та технічний супровід.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>Наші послуги</h2>

      <div className={styles.list}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.service}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
