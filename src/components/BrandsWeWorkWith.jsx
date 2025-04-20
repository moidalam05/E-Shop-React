import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import pumaLogo from "../Assets/Images/puma.png";

const BrandsWeWorkWith = () => {
  const brands = [
    { id: 1, src: `${pumaLogo}`, alt: "Brand 1" },
    { id: 2, src: `${pumaLogo}`, alt: "Brand 2" },
    { id: 3, src: `${pumaLogo}`, alt: "Brand 3" },
    { id: 4, src: `${pumaLogo}`, alt: "Brand 4" },
    { id: 5, src: `${pumaLogo}`, alt: "Brand 5" },
    { id: 6, src: `${pumaLogo}`, alt: "Brand 6" },
    { id: 7, src: `${pumaLogo}`, alt: "Brand 7" },
    { id: 8, src: `${pumaLogo}`, alt: "Brand 8" },
    { id: 9, src: `${pumaLogo}`, alt: "Brand 9" },
  ];

  return (
    <div className="py-5">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brands.concat(brands).map((brand) => (
          <SwiperSlide key={brand.id + Math.random()}>
            <img
              src={brand.src}
              alt={brand.alt}
              style={{
                width: "80px",
                height: "auto",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsWeWorkWith;
