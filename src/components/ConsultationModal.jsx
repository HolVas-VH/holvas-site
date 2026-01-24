import { useEffect, useState } from "react";
import styles from "../styles/ConsultationModal.module.css";
import Form from "./Form";

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);

   useEffect(() => {
    // Знаходимо кнопку вже існуючого Hero
    const btn = document.getElementById("consultation");
    if (!btn) return;

    const handleClick = () => setOpen(true);
    btn.addEventListener("click", handleClick);

    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);

    // cleanup
    return () => {
      btn.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setOpen(false)}>x</button>
        <h2>Nie zwlekaj – zamów usługi IT HolVas</h2>
        <Form onSuccess={() => setOpen(false)} />
      </div>
    </div>
  );
}
