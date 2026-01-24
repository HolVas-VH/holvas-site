import { useForm, ValidationError } from "@formspree/react";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/ConsultationModal.module.css";

const servicesList = [
  "strona wizytówka","landing page","strona korporacyjna","strona jednostronicowa",
  "sklep internetowy","blog tematyczny","projektowanie stron internetowych","projektowanie etykiet",
  "projektowanie wizytówek","projekt ulotki","projekt zaproszenia","projekt menu","projekt broszury",
  "projekt okładki YouTube","projekt okładki Instagram","projekt okładki Tik-Tok","projekt logo",
  "SMM-Instagram","SMM-Youtube","SMM - Tik-Tok","Zestaw SMM","analiza danych biznesowych",
  "analiza danych produktu","analiza danych SMM-metryki","WEB-analiza danych","tworzenie aplikacji"
];

export default function Form({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    services: [],
    comment: "",
    agree: false
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef(null);

  const [state, handleSubmit] = useForm("xqeenykz");

  const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ]{2,10}$/;
  const phoneRegex = /^[0-9]{6,12}$/;
  const commentRegex = /^[a-zA-Zа-яА-Я0-9\s.,!?-]{10,300}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => (
    nameRegex.test(form.firstName) &&
    nameRegex.test(form.lastName) &&
    phoneRegex.test(form.phone) &&
    emailRegex.test(form.email) &&
    form.services.length > 0 &&
    form.services.length <= 3 &&
    commentRegex.test(form.comment) &&
    form.agree
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return alert("Wypełnij formularz poprawnie (max 3 usługi)");

    await handleSubmit({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      services: form.services.join(", "),
      comment: form.comment
    });

    onSuccess?.();
    setDropdownOpen(false);
  };

  const toggleService = (service) => {
    if (form.services.includes(service)) {
      setForm({ ...form, services: form.services.filter(s => s !== service) });
    } else {
      if (form.services.length >= 3) return alert("Możesz wybrać maksymalnie 3 usługi");
      setForm({ ...form, services: [...form.services, service] });
    }
  };

  // Закриття dropdown при кліку поза інпутом
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label>Imię</label>
      <input
        placeholder="Jak masz na imię?"
        value={form.firstName}
        onChange={e => setForm({ ...form, firstName: e.target.value })}
        required
      />

      <label>Nazwisko</label>
      <input
        placeholder="Jakie jest twoje nazwisko?"
        value={form.lastName}
        onChange={e => setForm({ ...form, lastName: e.target.value })}
        required
      />

      <label>Numer telefonu</label>
      <input
        placeholder="48099123456"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        required
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="example@mail.com"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label>Jakiej usługi potrzebujesz? (max 3)</label>
      <div className={styles.dropdownWrapper} ref={inputRef}>
        <input
          placeholder="Wybierz usługi..."
          value={form.services.join(", ")}
          onFocus={() => setDropdownOpen(true)}
          readOnly
        />
        {dropdownOpen && (
          <div className={styles.dropdown}>
            {servicesList.map(service => (
              <div key={service} className={styles.dropdownItem}>
                <input
                  type="checkbox"
                  checked={form.services.includes(service)}
                  onChange={() => toggleService(service)}
                />
                <span>{service}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <label>Komentarz</label>
      <textarea
        placeholder="Opisz zadanie..."
        value={form.comment}
        onChange={e => setForm({ ...form, comment: e.target.value })}
        required
      />

      <div className={styles.row}>
        <input
          type="checkbox"
          checked={form.agree}
          onChange={() => setForm({ ...form, agree: !form.agree })}
        />
        <span>Nie jestem robotem</span>
      </div>

      <button type="submit" disabled={state.submitting}>
        Wyślij zlecenie
      </button>
    </form>
  );
}
