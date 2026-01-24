/*
Форма має:
✅ Коректну валідацію email (@ + крапка)
✅ Поточкову валідацію (показує помилки біля кожного поля)
✅ Обробку серверних помилок
✅ Красивий мультиселект з автоматичним закриттям
✅ Валідацію телефону (тільки цифри)
✅ Зрозумілу зворотній зв'язок (спінер, повідомлення про успіх/помилку)
*/

import { useForm, ValidationError } from "@formspree/react";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/ConsultationModal.module.css";

const servicesList = [
  "strona wizytówka", "landing page", "strona korporacyjna", "strona jednostronicowa",
  "sklep internetowy", "blog tematyczny", "projektowanie stron internetowych", "projektowanie etykiet",
  "projektowanie wizytówek", "projekt ulotki", "projekt zaproszenia", "projekt menu", "projekt broszury",
  "projekt okładki YouTube", "projekt okładki Instagram", "projekt okładki Tik-Tok", "projekt logo",
  "SMM-Instagram", "SMM-Youtube", "SMM - Tik-Tok", "Zestaw SMM", "analiza danych biznesowych",
  "analiza danych produktu", "analiza danych SMM-metryki", "WEB-analiza danych", "tworzenie aplikacji"
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

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRef = useRef(null);
  const [state, handleSubmit] = useForm("xqeenykz");

  const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ]{2,30}$/;
  const phoneRegex = /^[0-9]{6,12}$/;
  const commentRegex = /^.{10,500}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "Imię jest wymagane";
        else if (!nameRegex.test(value)) error = "Imię musi mieć 2-30 liter";

        break;
      case "lastName":
        if (!value.trim()) error = "Nazwisko jest wymagane";
        else if (!nameRegex.test(value)) error = "Nazwisko musi mieć 2-30 liter";
        break;
      case "phone":
        if (!value.trim()) error = "Numer telefonu jest wymagany";
        else if (!phoneRegex.test(value)) error = "Numer telefonu musi mieć 6-12 cyfr";
        break;
      case "email":
        if (!value.trim()) error = "Email jest wymagany";
        else if (!emailRegex.test(value)) error = "Wprowadź poprawny email (np. example@mail.com)";
        break;
      case "services":
        if (value.length === 0) error = "Wybierz przynajmniej jedną usługę";
        else if (value.length > 3) error = "Możesz wybrać maksymalnie 3 usługi";
        break;
      case "comment":
        if (!value.trim()) error = "Komentarz jest wymagany";
        else if (!commentRegex.test(value)) error = "Komentarz musi mieć 10-500 znaków";
        break;
      case "agree":
        if (!value) error = "Musisz potwierdzić, że nie jesteś robotem";
        break;
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.firstName = validateField("firstName", form.firstName);
    newErrors.lastName = validateField("lastName", form.lastName);
    newErrors.phone = validateField("phone", form.phone);
    newErrors.email = validateField("email", form.email);
    newErrors.services = validateField("services", form.services);
    newErrors.comment = validateField("comment", form.comment);
    newErrors.agree = validateField("agree", form.agree);
    
    setErrors(newErrors);
    
    return Object.values(newErrors).every(error => error === "");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);
    setIsSubmitted(false);
    
    if (!validateForm()) {
      return;
    }
    
    const formData = new FormData(e.target);
    
    formData.set('firstName', form.firstName);
    formData.set('lastName', form.lastName);
    formData.set('phone', form.phone);
    formData.set('email', form.email);
    formData.set('services', form.services.join(", "));
    formData.set('comment', form.comment);
    
    await handleSubmit(formData);
  };

  // Ефект для обробки стану відправки
  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      
      setTimeout(() => {
        onSuccess?.();
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          services: [],
          comment: "",
          agree: false
        });
        setErrors({});
        setDropdownOpen(false);
        setIsSubmitted(false);
      }, 2000);
    }
    
    if (state.errors) {
      setServerError("Wystąpił problem z wysłaniem formularza. Spróbuj ponownie później.");
    }
  }, [state.succeeded, state.errors, onSuccess]);

  // Закриття dropdown при виборі будь-якої послуги (через 1 секунду після вибору)
  useEffect(() => {
    if (form.services.length > 0 && dropdownOpen) {
      const timer = setTimeout(() => {
        setDropdownOpen(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [form.services.length, dropdownOpen]);

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

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const toggleService = (service) => {
    if (form.services.includes(service)) {
      const newServices = form.services.filter(s => s !== service);
      setForm({ ...form, services: newServices });
      if (errors.services) {
        setErrors({ ...errors, services: validateField("services", newServices) });
      }
    } else {
      if (form.services.length >= 3) {
        setErrors({ ...errors, services: "Możesz wybrać maksymalnie 3 usługi" });
        return;
      }
      const newServices = [...form.services, service];
      setForm({ ...form, services: newServices });
      if (errors.services) {
        setErrors({ ...errors, services: validateField("services", newServices) });
      }
    }
  };

  const clearServices = () => {
    setForm({ ...form, services: [] });
    if (errors.services) {
      setErrors({ ...errors, services: "" });
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {/* Server error */}
      {serverError && (
        <div className={styles.serverError}>
          <span className={styles.errorIcon}>⚠️</span>
          {serverError}
        </div>
      )}

      {/* Success message */}
      {isSubmitted && (
        <div className={styles.successMessage}>
          <span className={styles.successIcon}>✓</span>
          Formularz został pomyślnie wysłany!
        </div>
      )}

      <div className={styles.formGroup}>
        <label className={styles.required}>Imię</label>
        <input
          name="firstName"
          placeholder="Jak masz na imię?"
          value={form.firstName}
          onChange={e => handleInputChange("firstName", e.target.value)}
          className={errors.firstName ? styles.errorInput : ""}
          required
        />
        {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.required}>Nazwisko</label>
        <input
          name="lastName"
          placeholder="Jakie jest twoje nazwisko?"
          value={form.lastName}
          onChange={e => handleInputChange("lastName", e.target.value)}
          className={errors.lastName ? styles.errorInput : ""}
          required
        />
        {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
      </div>

      <div className={styles.formGroup}>
  <label className={styles.required}>Numer telefonu</label>
  <input
    type="tel" // ЗМІНИВ НА tel
    name="phone"
    placeholder="np. 48099123456"
    value={form.phone}
    onChange={(e) => {
      // Дозволяємо тільки цифри
      const value = e.target.value.replace(/[^\d]/g, '');
      handleInputChange("phone", value);
    }}
    pattern="[0-9]*" // Додаємо pattern для браузера
    inputMode="numeric" // Для мобільних пристроїв
    className={errors.phone ? styles.errorInput : ""}
    required
    maxLength="12" // Максимальна довжина
  />
  {errors.phone && <div className={styles.error}>{errors.phone}</div>}
</div>

      <div className={styles.formGroup}>
        <label className={styles.required}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={e => handleInputChange("email", e.target.value)}
          className={errors.email ? styles.errorInput : ""}
          required
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* MULTISELECT - ПОЛНОСТЬЮ ПЕРЕПИСАНИЙ */}
      <div className={styles.formGroup}>
        <label className={styles.required}>Jakiej usługi potrzebujesz? (max 3)</label>
        <div className={styles.multiselectWrapper} ref={inputRef}>
          <div 
            className={`${styles.multiselectTrigger} ${errors.services ? styles.errorInput : ""} ${dropdownOpen ? styles.active : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className={styles.triggerContent}>
              <div className={styles.placeholderText}>
                {form.services.length === 0 
                  ? <span className={styles.placeholder}>Wybierz usługi (1-3)...</span> 
                  : <span className={styles.selectedPreview}>{form.services.length} wybrano</span>
                }
              </div>
              <div className={styles.triggerControls}>
                {form.services.length > 0 && (
                  <button 
                    type="button" 
                    className={styles.clearTrigger}
                    onClick={(e) => {
                      e.stopPropagation();
                      clearServices();
                    }}
                    title="Wyczyść wybór"
                  >
                    ×
                  </button>
                )}
                <span className={`${styles.arrowIcon} ${dropdownOpen ? styles.up : styles.down}`}>
                  {dropdownOpen ? "▲" : "▼"}
                </span>
              </div>
            </div>
          </div>
          
          {form.services.length > 0 && (
            <div className={styles.selectedServices}>
              <div className={styles.selectedList}>
                {form.services.map((service, index) => (
                  <span key={index} className={styles.selectedTag}>
                    <span className={styles.tagText}>{service}</span>
                    <button 
                      type="button" 
                      className={styles.removeTag}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleService(service);
                      }}
                      title="Usuń"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className={styles.selectionInfo}>
                <span className={styles.counter}>Wybrano: {form.services.length}/3</span>
                <button 
                  type="button" 
                  className={styles.clearAll}
                  onClick={clearServices}
                >
                  Wyczyść wszystkie
                </button>
              </div>
            </div>
          )}
          
          {dropdownOpen && (
            <div className={styles.servicesDropdown}>
              <div className={styles.dropdownHeader}>
                <div className={styles.headerContent}>
                  <span className={styles.headerTitle}>Wybierz usługi</span>
                  <div className={styles.headerControls}>
                    <span className={styles.selectedCount}>
                      {form.services.length}/3
                    </span>
                    {form.services.length > 0 && (
                      <button 
                        type="button" 
                        className={styles.closeDropdown}
                        onClick={() => setDropdownOpen(false)}
                        title="Zamknij"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.selectionHint}>
                  Wybierz od 1 do 3 usług. Kliknij ponownie, aby odznaczyć.
                </div>
              </div>
              <div className={styles.dropdownList}>
                {servicesList.map(service => (
                  <div 
                    key={service} 
                    className={`${styles.dropdownItem} ${form.services.includes(service) ? styles.selected : ""}`}
                    onClick={() => toggleService(service)}
                  >
                    <div className={styles.checkboxContainer}>
                      <div className={styles.customCheckbox}>
                        {form.services.includes(service) && <span className={styles.checkmark}>✓</span>}
                      </div>
                      <span className={styles.serviceName}>{service}</span>
                    </div>
                    {form.services.includes(service) && (
                      <span className={styles.selectedIndicator}>wybrano</span>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.dropdownFooter}>
                <button 
                  type="button" 
                  className={styles.closeButton}
                  onClick={() => setDropdownOpen(false)}
                >
                  Zamknij listę
                </button>
              </div>
            </div>
          )}
          {errors.services && <div className={styles.error}>{errors.services}</div>}
        </div>
        <input type="hidden" name="services" value={form.services.join(", ")} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.required}>Komentarz</label>
        <textarea
          name="comment"
          placeholder="Opisz zadanie (10-500 znaków)..."
          value={form.comment}
          onChange={e => handleInputChange("comment", e.target.value)}
          className={errors.comment ? styles.errorInput : ""}
          rows={4}
          required
        />
        <div className={styles.charCounter}>
          {form.comment.length}/500
        </div>
        {errors.comment && <div className={styles.error}>{errors.comment}</div>}
      </div>

      <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
        <label className={`${styles.checkboxLabel} ${errors.agree ? styles.errorCheckbox : ""}`}>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={() => handleInputChange("agree", !form.agree)}
            className={styles.checkboxInput}
          />
          <div className={styles.customCheckbox}>
            {form.agree && "✓"}
          </div>
          <span className={styles.checkboxText}>Nie jestem robotem</span>
        </label>
        {errors.agree && <div className={styles.error}>{errors.agree}</div>}
      </div>

      <button 
        type="submit" 
        disabled={state.submitting || isSubmitted}
        className={state.submitting ? styles.submitting : ""}
      >
        {state.submitting ? (
          <>
            <span className={styles.spinner}></span>
            Wysyłanie...
          </>
        ) : isSubmitted ? (
          "Wysłano! ✓"
        ) : (
          "Wyślij zlecenie"
        )}
      </button>
      
      {/* <div className={styles.requiredInfo}>* - pole wymagane</div> */}
    </form>
  );
}