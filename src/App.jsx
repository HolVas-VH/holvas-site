import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio"; // Swiper-слайдер
import Price from "./components/Price";      // Аккордеон
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Services />
        <Portfolio />
        <Price />
        <Contact />
      </main>

    {/* Підключаємо модалку */}
      <ConsultationModal />

      <Footer />
    </> 
  );
}
