import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
  const projects = [
    { title: "Проект 1", image: "/assets/project1.jpg" },
    { title: "Проект 2", image: "/assets/project2.jpg" },
    { title: "Проект 3", image: "/assets/project3.jpg" },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Наші проекти</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ padding: "20px 0" }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.slide}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


// import Slider from './Slider';
// export default function Portfolio() {
//     return (
//         <section id="portfolio" className="section">
//       <div className="container">
//         <h2>Portfolio</h2>
//         <Slider />
//       </div>
//     </section>
//     );
// }