import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const WhatWeDoSection = () => {
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

    gsap.from('.quote-image', {
      opacity: 0,
      x: 30,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.what-we-do-section',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section className="relative what-we-do-section overflow-hidden bg-white">
      {/* Pattern Dots (Blurred Circles Repeating) */}
      <div className="absolute inset-0 z-0 bg-[url('/images/blur-dot-pattern.svg')] bg-repeat opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 quote-content text-[#1E293B] relative">
          {/* Aligned Quote Mark */}
          

          {/* Name */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#303C69] mb-1">
            Suresh Shyamlal Gupta
          </h3>

          {/* Title */}
          <p className="text-base sm:text-lg font-medium text-[#64748B] mb-6">
            President, AICWA Foundation
          </p>


          {/* Paragraph */}
          <h2 className="text-2xl md:text-xl font-light mb-6">
            Behind the glamour of the Indian film industry lies the painful reality of thousands of workers who cannot educate their children, afford medical care for their families, or dream of owning a home. Their work is uncertain, their income unstable, and their future unsecured. Being part of an unorganised sector, they receive no PF, no retirement plan, and no guarantee of employment. Every year, many lose their lives on sets — due to fires, electric shocks, or negligence — and even then, some families are denied basic compensation. In old age, they face the greatest struggle, unable to fulfill even the simplest dreams for their children. AICWA Foundation was established to bring justice, dignity, and lasting support to these unsung heroes of our industry. We exist so that no cine worker ever feels helpless or forgotten again.
          </h2>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-start">
          <Link to="/donate">
      <button className="flex items-center ms-auto bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg border border-white/20 hover:scale-105 transition-all duration-300">
        <span className="text-sm sm:text-base font-medium">Donate Now</span>
        <span className="bg-[#0b2c48] text-white rounded-full p-2 ml-2">
          <ArrowRight size={16} />
        </span>
      </button>
    </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 quote-image relative">
          <div className="relative z-10 overflow-hidden ">
            <img
              src="/images/suresh.png"
              alt="Suresh Shyamlal Gupta"
              className="w-full h-auto object-cover transform"
            />
          </div>

          {/* Extra decorative blue blur dots */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/70 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300/70 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
