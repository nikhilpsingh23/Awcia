
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, UserRound, GraduationCap, PartyPopper } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImpactCard from '@/components/ImpactCard';
import StoryCard from '@/components/StoryCard';
import SectionTitle from '@/components/SectionTitle';
import AreaOfImpact from '@/components/areaofimpact';
import DonateSection from '@/components/donateSection';
import JoinUs from '@/components/joinus';
import AboutUs from '@/components/aboutUs';
import DonationComponent from '@/components/donate';
import SupportersCarousel from '@/components/ourSupporter';


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
  
  const stories = [
    {
      name: 'Priya Sharma',
      quote: 'AICWA\'s education program changed my life. I\'m now the first in my family to attend college and can build a better future for my community.',
      imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600',
    },
    {
      name: 'Rahul Kumar',
      quote: 'The healthcare camp organized by AICWA in our village provided medical services to over 200 people who had never seen a doctor before. We are forever grateful.',
      imageSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600',
    },
    {
      name: 'Sanjay Patel',
      quote: 'At 78, I felt forgotten. AICWA\'s elderly support program connected me with volunteers who visit weekly. Now I have friends who care about me.',
      imageSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600',
    },
    {
      name: 'Meera Singh',
      quote: 'My children now have access to quality education through AICWA\'s school support program. Their future looks brighter than I could have imagined.',
      imageSrc: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=600',
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      <img
  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Make sure to add this image to your public/images folder
  alt="Child portrait"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="px-6 max-w-2xl ml-8 md:ml-16 lg:ml-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Donate.
        </h1>
        <h2 className="text-3xl md:text-5xl font-light mb-6">
          Help people<br />
          around the World.
        </h2>
        <Link to="/donate">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-sm text-lg font-medium transition-colors">
            Donate
          </button>
        </Link>
      </div>
      </section>
      
      {/* Areas of Impact */}

      <AreaOfImpact/>
      <DonationComponent/>
      <DonateSection/>
      { /* <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Areas of Impact"
            subtitle="AICWA focuses on these critical areas to create sustainable, positive change in communities."
            centered
          />
          
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area) => (
              <ImpactCard
                key={area.title}
                title={area.title}
                description={area.description}
                icon={area.icon}
                imageSrc={area.imageSrc}
                link={area.link}
                delay={area.delay}
              />
            ))}
          </div>
        </div>
      </section> */}
      
      {/* About Section with Parallax */}
      <AboutUs/>
     {/* <section 
        ref={aboutSectionRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 slide-in-left">
            <SectionTitle
              title="About AICWA"
              subtitle="For over 15 years, we've been working to create positive change in communities across India."
            />
            <p className="text-aicwa-gray mb-6">
              AICWA was founded with a simple mission: to improve the lives of India's most vulnerable populations. 
              What began as a small initiative has grown into a multi-faceted organization addressing critical needs 
              in healthcare, education, child welfare, elderly support, and humanitarian awareness.
            </p>
            <p className="text-aicwa-gray mb-8">
              Our dedicated team and volunteers work tirelessly to implement sustainable programs 
              that create lasting impact and foster self-reliance in the communities we serve.
            </p>
            <Link to="/about">
              <Button>Read More</Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] relative overflow-hidden rounded-lg shadow-xl slide-in-right">
            <div className="about-image absolute inset-0 h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920"
                alt="AICWA volunteers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Why Donate Section */}
      <JoinUs/>
      {/*<SupportersCarousel/>*/}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <SectionTitle
                title="Why You Should Donate"
                className="fade-in-up"
              />
              <ul className="space-y-4 text-aicwa-gray fade-in-up animate-delay-100">
                <li className="flex items-start">
                  <Heart className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Your donation directly helps vulnerable communities across India.</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>100% transparency in how your funds are utilized.</span>
                </li>
                <li className="flex items-start">
                  <User className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Support children's education and healthcare needs.</span>
                </li>
                <li className="flex items-start">
                  <UserRound className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Provide dignity and care for the elderly.</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Join a community of changemakers with similar values.</span>
                </li>
              </ul>
              <div className="mt-8 fade-in-up animate-delay-200">
                <Button size="lg">Donate Now</Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <SectionTitle
                title="What We Do"
                className="fade-in-up"
              />
              <div className="fade-in-up animate-delay-100">
                <p className="text-aicwa-gray mb-6">
                  AICWA implements a variety of programs and initiatives designed to address the root causes of poverty, 
                  inequality, and lack of opportunity. Our holistic approach creates sustainable, long-term change:
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Community Development</h4>
                  <p className="text-aicwa-gray">
                    We partner with local communities to identify needs and implement solutions that work for their unique context.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Education Initiatives</h4>
                  <p className="text-aicwa-gray">
                    From early childhood programs to adult literacy, we're building foundations for lifelong success.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Healthcare Access</h4>
                  <p className="text-aicwa-gray">
                    Our mobile clinics, health camps, and wellness programs bring essential services to underserved areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Story Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Stories of Impact"
            subtitle="Real people, real changes. Hear from the communities we serve."
            centered
          />
          
          <div className="fade-in-up">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {stories.map((story, index) => (
                <SwiperSlide key={index}>
                  <StoryCard
                    name={story.name}
                    quote={story.quote}
                    imageSrc={story.imageSrc}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/story">
              <Button variant="outline">Read More Stories</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
