import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

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
    <section className="relative bg-[#303C69] text-white overflow-hidden what-we-do-section">
  {/* Centered Content */}
  <div className="max-w-4xl mx-auto px-4 pt-20 pb-10 flex flex-col items-center text-center">
    {/* Top Name + Title */}
    <h4 className="text-lg mb-2">Hello! I'm</h4>
    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
          Suresh Shyamlal Gupta
        </h1>
        <p className="text-yellow-400 text-lg mt-2 font-medium">
          President, AICWA Foundation
        </p>

    {/* Social Media Icons */}


    {/* Image Middle Section */}
    <div className="-mb-20 mt-12 z-10">
      <img
        src="/images/suresh.png"
        alt="Jane Williamson"
        className="w-64 h-auto object-contain"
      />
    </div>
  </div>

  {/* Bottom Curve */}
  <div className="relative">
    <svg
      viewBox="0 0 1440 150"
      className="w-full h-auto text-white"
      preserveAspectRatio="none"
    >
      <path
        fill="white"
        d="M0,0 C480,120 960,120 1440,0 L1440,150 L0,150 Z"
      ></path>
    </svg>

    {/* Know More Button */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
      <Link to="#about">
        <Button className="text-black bg-yellow-500 px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          Know More
        </Button>
      </Link>
    </div>
  </div>
</section>

  );
};

export default WhatWeDoSection;
