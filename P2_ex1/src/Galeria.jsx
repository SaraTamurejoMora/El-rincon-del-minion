import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importar módulos desde swiper/modules
import { Navigation, Pagination } from "swiper/modules";

const imgSlider = [
  { id: 1, url: "img/galeria/1.jpg", alt: "Velas Decorativas Caseras" },
  { id: 2, url: "img/galeria/2.jpg", alt: "Macetas DIY con Material Reciclado" },
  { id: 3, url: "img/galeria/3.jpg", alt: "Pulseras de Hilo Fácil" },
  { id: 4, url: "img/galeria/4.jpg", alt: "Cuadernos Personalizados DIY" },
  { id: 5, url: "img/galeria/5.jpg", alt: "Lámparas con Tarros de Cristal" },
  { id: 6, url: "img/galeria/6.jpg", alt: "Marcapáginas Creativos" },
  { id: 7, url: "img/galeria/7.jpg", alt: "Figuras de Arcilla Polimérica" },
  { id: 8, url: "img/galeria/8.jpg", alt: "Decoración con Papel Maché" },
  { id: 9, url: "img/galeria/9.jpg", alt: "Bolsas de Tela Personalizadas" },
  { id: 10, url: "img/galeria/10.jpg", alt: "Collares y Pulseras con Cuentas" }
];

function Galeria() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
      }}
    >
      {imgSlider.map((img) => (
        <SwiperSlide key={img.id}>
          <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <img
              src={img.url}
              alt={img.alt}
              //style={{ width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Galeria;
