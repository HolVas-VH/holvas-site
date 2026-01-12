// React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Модулі
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//імпорт стилів Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    const slides = ["Przed / Po 1", "Przed / Po 2", "Przed / Po 3"];
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination = {{ clickable: true}}
            autoplay = {{delay: 3000}}
            loop = {true}
            >
            {slides.map((text,idx) => (
                <SwiperSlide key={idx}>
                    <div className="slide">{text}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}