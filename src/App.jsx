import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio"; // Swiper-слайдер
import Price from "./components/Price";      // Аккордеон
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}


// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Price from "./components/Price";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import "./styles/main.css";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <About />
//       <Portfolio />
//       <Price />
//       <Footer />
//       <Contact />
//     </>
//   );
// }