import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from('.quote-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: '.what-we-do-section',
        start: 'top 80%',
      },
    });

    gsap.from('.quote-author', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.what-we-do-section',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section className="what-we-do-section w-full bg-[#fffaf4] py-16 md:py-24 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Background Circle */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[#f89b36] rounded-full -z-10 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Image */}
          <div className="mb-8">
            <img
              src="/images/suresh.png"
              alt="AICWA Leader"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-lg"
              loading="eager"
            />
          </div>

          {/* Text Content */}
          <div className="quote-content max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#821818] mb-4">
              Follow Our Journey
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              All Indian Cine Workers Association (AICWA) is the only association in Bollywood affiliated with Government of Maharashtra.
            </p>

            {/* Author Info */}
            <div className="quote-author inline-block border-l-4 border-yellow-500 pl-4 mt-4 text-left">
              <p className="text-lg md:text-xl font-semibold text-gray-800">Suresh Shyamlal Gupta</p>
              <p className="text-sm md:text-base text-gray-500">President, AICWA Foundation</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-8">
              {['fb', 'yt', 'insta', 'in', 'tw'].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border hover:scale-105 transition"
                >
                  <img
                    src={`/icons/${icon}.svg`}
                    alt={`${icon} icon`}
                    className="w-5 h-5"
                  />
                </div>
              ))}
            </div>

            {/* Know More Button */}
            <div className="mt-8">
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full font-medium hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
