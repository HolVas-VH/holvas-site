import styles from "../styles/Advantages.module.css";

const items = [
  {
    title: "Системний підхід",
    text: "Ми будуємо проєкти з чіткою структурою та масштабуванням.",
  },
  {
    title: "Сучасні технології",
    text: "React, Vite, SEO-орієнтовані рішення та швидкість.",
  },
  {
    title: "Фокус на результат",
    text: "Ми працюємо не для галочки, а для росту бізнесу.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className={styles.advantages}>
      <h2>Чому обирають нас</h2>

      <div className={styles.grid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// export default function Advantages() {
//   const items = [
//     {
//       title: "Системний підхід",
//       text: "Ми працюємо системно, прозоро та з фокусом на результат. Кожен етап проєкту має чітку логіку та мету."
//     },
//     {
//       title: "Масштабовані рішення",
//       text: "Будуємо проєкти з чіткою структурою та можливістю росту бізнесу без переробки коду."
//     },
//     {
//       title: "Сучасні технології",
//       text: "React, Vite, SEO-орієнтовані рішення та висока швидкість завантаження."
//     },
//     {
//       title: "Орієнтація на бізнес",
//       text: "Ми працюємо не просто над дизайном, а для реального росту бізнесу та продажів."
//     }
//   ];

//   return (
//     <section id="advantages" className="advantages">
//       <div className="advantages__container">
//         <h2 className="advantages__title">Чому обирають HolVas</h2>

//         <div className="advantages__grid">
//           {items.map((item, idx) => (
//             <div className="advantages__item" key={idx}>
//               <h3>{item.title}</h3>
//               <p>{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
