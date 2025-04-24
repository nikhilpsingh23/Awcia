'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const logos = [
  {
    name: 'Godrej',
    src: 'https://www.godrej.com/assets/images/godrej-logo.png',
  },
  {
    name: 'Tata Trust',
    src: 'https://www.tatatrusts.org/images/Tata_Trusts_Logo.png',
  },
  {
    name: 'Azim Premji Foundation',
    src: 'https://azimpremjifoundation.org/sites/default/files/apf-logo.png',
  },
  {
    name: 'United Way',
    src: 'https://www.unitedway.org/assets/img/logo.png',
  },
  {
    name: 'Hindustan Unilever',
    src: 'https://www.hul.co.in/Images/hul-logo_tcm1255-459077_w160.png',
  },
  {
    name: 'Bill & Melinda Gates Foundation',
    src: 'https://www.gatesfoundation.org/-/media/gfo/4_resources/logo.png',
  },
  {
    name: 'Reliance Foundation',
    src: 'https://www.reliancefoundation.org/sites/all/themes/reliancefoundation/images/logo.png',
  }
];

export default function SupportersCarousel() {
  return (
    <section className="bg-[#f68e44] py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 font-[Comic_Sans_MS]">
        Our Supporters
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md w-36 h-36 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
