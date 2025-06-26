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
    <section className="what-we-do-section w-full bg-[#e6e6e6] py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="quote-content text-gray-800">
            <svg className="w-10 h-10 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl lg:text-2xl font-light leading-relaxed">
              I have seen the truth with my own eyes—children walking barefoot without food or books, young girls married off in desperation, families borrowing just to survive. Rural India isn't lacking in strength or spirit—it's lacking in opportunity. At AICWA Foundation, we are here to change that—one village, one family, one life at a time.
            </p>
          </div>

          <div className="quote-author border-l-4 border-yellow-500 pl-4 mt-4">
            <p className="text-lg md:text-xl font-semibold text-gray-800">Suresh Shyamlal Gupta</p>
            <p className="text-sm md:text-base text-gray-500">President, AICWA Foundation</p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full font-medium hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Right Side - President Image with right+bottom border */}
        <div className="md:w-1/2 relative rounded-xl overflow-hidden shadow-lg border-r-[6px] border-b-[6px] border-[#303C69]">
          <img
            src="/images/suresh.png"
            alt="President"
            className="w-80% h-80% object-cover"
          />

          {/* Top-right Tag */}
          <div className="absolute top-4 right-4 bg-[#303C69] text-white px-4 py-1 rounded-full animate-bounce shadow-lg text-sm font-semibold">
            PRESIDENT
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
