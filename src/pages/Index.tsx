
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, UserRound, GraduationCap, PartyPopper } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import DonateSection from '@/components/donateSection';
import JoinUs from '@/components/joinus';
import AboutUs from '@/components/aboutUs';
import DonationComponent from '@/components/donate';
import SupportersCarousel from '@/components/ourSupporter';
import Slogan from '@/components/slogan';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import Story from '@/components/StoryCard';
import GridSection from '@/components/GridSection';
import { motion } from 'framer-motion';

const Index = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Apply parallax effect to the about section image
      if (aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current;
        const aboutImage = aboutSection.querySelector('.about-image') as HTMLElement;
        
        if (aboutImage) {
          const rect = aboutSection.getBoundingClientRect();
          const offsetY = (window.innerHeight - rect.top) * 0.2;
          
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            aboutImage.style.transform = `translateY(${offsetY}px)`;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const impactAreas = [
    {
      title: 'Health',
      description: 'Providing healthcare access and wellness programs to underserved communities.',
      icon: Heart,
      imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600',
      link: '/impact/health',
      delay: 'animate-delay-100',
    },
    {
      title: 'Education',
      description: 'Empowering through knowledge with educational initiatives for all ages.',
      icon: GraduationCap,
      imageSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600',
      link: '/impact/education',
      delay: 'animate-delay-200',
    },
    {
      title: 'Child Welfare',
      description: 'Supporting children with nutrition, education, and safety programs.',
      icon: BookOpen,
      imageSrc: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600',
      link: '/impact/child-welfare',
      delay: 'animate-delay-300',
    },
    {
      title: 'Old Age Support',
      description: 'Caring for the elderly through companionship and assistance programs.',
      icon: UserRound,
      imageSrc: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=600',
      link: '/impact/old-age',
      delay: 'animate-delay-400',
    },
    {
      title: 'Humanity Awareness',
      description: 'Promoting awareness, compassion, and action on humanitarian issues.',
      icon: PartyPopper,
      imageSrc: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600',
      link: '/impact/humanity',
      delay: 'animate-delay-500',
    },
  ];
  
 
  
  const heroImages = [
    "./images/8.JPG",
    "./images/1-home.HEIC",
    "./images/7.jpeg",
    "./images/1-rural.jpeg",
    
    "./images/2.HEIC",
     
    "./images/5.jpg"
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Social Media Icons - Desktop */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-l-lg shadow-lg">
        <a
          href="https://x.com/sureshsgupta"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black hover:bg-gray-800 text-white rounded transition-all duration-300 hover:scale-110"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.facebook.com/aicwafoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all duration-300 hover:scale-110"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://youtube.com/@aicwafoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-all duration-300 hover:scale-110"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.instagram.com/aicwafoundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-all duration-300 hover:scale-110"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/aicwafoundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-800 hover:bg-blue-900 text-white rounded transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Social Media Icons - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white/10 backdrop-blur-sm p-2 flex justify-center gap-4">
        <a
          href="https://x.com/AICWAFoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 active:scale-95"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://www.facebook.com/aicwafoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 active:scale-95"
        >
          <FaFacebook size={18} />
        </a>
        <a
          href="https://youtube.com/@aicwafoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 active:scale-95"
        >
          <FaYoutube size={18} />
        </a>
        <a
          href="https://www.instagram.com/aicwafoundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all duration-300 active:scale-95"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://www.linkedin.com/company/aicwafoundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition-all duration-300 active:scale-95"
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      <Navbar/>
      
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
  {/* Background Image Carousel */}
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    loop={true}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    className="absolute inset-0 w-full h-full -z-10"
  >
    {heroImages.map((image, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-screen">
          <img
            src={image}
            alt={`Hero ${index}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0b2c48]/60" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Text Overlay */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 px-4 text-white text-center max-w-[90%]"
  >
    <h1 className="text-[1.5rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-md">
      Support the Hands Behind Indian Cinema
    </h1>
    <p className="text-[1rem] sm:text-[1.25rem] mb-6">
      Empowering the Backbone <br className="hidden sm:inline" /> of Indian Cinema
    </p>

    <Link to="/donate">
      <button className="flex items-center mx-auto px-[1.5rem] py-[0.75rem] rounded-full bg-yellow-500 text-white text-[1rem] font-medium shadow-md hover:scale-105 transition-transform duration-300">
        <span>Donate Now</span>
        <span className="ml-3 bg-[#0b2c48] p-2 rounded-full">
          <ArrowRight size={16} color="white" />
        </span>
      </button>
    </Link>
  </motion.div>
</section>








      {/* Scrollable Content Container */}
      <div className="relative bg-white">
        <div className="relative z-10">
          <Slogan/>
          <DonationComponent/>
          <GridSection/>
          {/*<AreaOfImpact/>*/}
          <WhatWeDoSection/>
          <DonateSection/>

          <section className="py-20 px-4 bg-[#f2f2f2]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-[#303C69] mb-12">Empowering Indian Cinema’s Backbone</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/mariage.JPG"
          alt="Daughters’ Marriage Support"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Daughters’ Marriage Support
          </h3>
          <p className="text-gray-600 text-lg">
            We proudly take full responsibility for organizing and funding the marriage of film workers' daughters—covering every detail so they begin their new life with dignity and joy.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="./images/3.HEIC"
          alt="Child Education Sponsorship"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Child Education Sponsorship
          </h3>
          <p className="text-gray-600 text-lg">
            From school fees to college books, we sponsor every step of a worker’s child’s education journey — ensuring no dream is ever hindered by financial barriers.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/aoi-health.jpg"
          alt="Medical Treatment & Healthcare Aid"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Medical Treatment & Daily Healthcare Aid
          </h3>
          <p className="text-gray-600 text-lg">
            From sudden emergencies to daily medicine needs, we cover complete medical expenses for workers and their families — making health a right, not a privilege.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/rural-cover.jpeg"
          alt="Building Homes in Villages"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Building Homes in Villages
          </h3>
          <p className="text-gray-600 text-lg">
            We help our film workers build homes in their native villages — turning dreams of security, comfort, and pride into brick-and-mortar reality.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/fashion.JPG"
          alt="Mr. & Miss AICWA Fashion Show"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Mr. & Miss AICWA — National Fashion Show
          </h3>
          <p className="text-gray-600 text-lg">
            India’s most inspiring fashion event, giving hidden talents from small towns a national platform, career break, and spotlight in fashion and film.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/award.JPG"
          alt="AICWA Excellence Awards"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            AICWA Excellence Awards
          </h3>
          <p className="text-gray-600 text-lg">
            Our annual awards celebrate unsung heroes — from spot boys to senior technicians — who build Indian cinema from behind the scenes.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

          <Story/>
          {/*<AboutUs/>
          <JoinUs/> */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

