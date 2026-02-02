import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";

const imgSlider = [
  { id: 1, url: "img/galeria/ranitas.jpg", alt: "Velas Decorativas Caseras" },
  { id: 2, url: "img/galeria/assassinsCreed.webp", alt: "Macetas DIY con Material Reciclado" },
  { id: 3, url: "img/galeria/arbolDeLaVida.webp", alt: "Pulseras de Hilo Fácil" },
  { id: 4, url: "img/galeria/benimaru.webp", alt: "Cuadernos Personalizados DIY" },
  { id: 5, url: "img/galeria/elefante.webp", alt: "Lámparas con Tarros de Cristal" },
  { id: 6, url: "img/galeria/hollowKnightMonedas.webp", alt: "Marcapáginas Creativos" },
  { id: 7, url: "img/galeria/nirvana.webp", alt: "Figuras de Arcilla Polimérica" },
  { id: 8, url: "img/galeria/oso.jpg", alt: "Decoración con Papel Maché" },
  { id: 9, url: "img/galeria/ranita.jpg", alt: "Bolsas de Tela Personalizadas" },
  { id: 10, url: "img/galeria/spiderman.webp", alt: "Collares y Pulseras con Cuentas" }
];

function Galeria() {
  return (
    <section
      className="galeria-section"
      aria-label="Galería de manualidades"
    >
      <div className="galeria-heading">
        <span className="fancy-dash fancy-dash--on-blue" />
        <h2 className="section-title">Galería</h2>
        <span className="fancy-dash fancy-dash--on-blue" />
      </div>

      <Swiper
        className="galeria-swiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }}
        a11y={{
          prevSlideMessage: "Anterior",
          nextSlideMessage: "Siguiente",
          firstSlideMessage: "Primera diapositiva",
          lastSlideMessage: "Última diapositiva",
          slideLabelMessage: "{{index}} de {{slidesLength}}"
        }}
      >
        {imgSlider.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="slide-card">
              <img src={img.url} alt={img.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Galeria;
