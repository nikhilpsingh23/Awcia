'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const logos = [
  {
    name: 'Godrej',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png',
  },
  {
    name: 'Godrej',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png',
  },
  {
    name: 'Godrej',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png',
  },
  {
    name: 'Azim Premji Foundation',
    src: 'https://upload.wikimedia.org/wikipedia/en/1/11/Azim_Premji_Philanthropic_Initiatives_logo.png',
  },
  {
    name: 'United Way',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/United_Way_Logo.svg/2560px-United_Way_Logo.svg.png',
  },
  {
    name: 'Hindustan Unilever',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Hindustan_Unilever_Logo.svg/2560px-Hindustan_Unilever_Logo.svg.png',
  },
  {
    name: 'Pramiti',
    src: 'https://pramitifoundation.org/images/logo.png',
  },
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
