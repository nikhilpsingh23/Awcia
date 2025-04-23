import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.program-card');
    
    gsap.fromTo(cards, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top center+=100",
      }
    });
  }, []);

  const programs = [
    {
      date: {
        day: '24',
        month: 'APR'
      },
      title: 'Film Industry Workers Rights Workshop',
      category: 'AWARENESS PROGRAM',
      time: '11:00 AM PST',
      location: 'MUMBAI',
      image: 'https://images.unsplash.com/photo-1524512099866-c65c6bfb2617?auto=format&fit=crop&w=800'
    },
    {
      date: {
        day: '29',
        month: 'APR'
      },
      title: 'Artists Support Initiative Launch',
      category: 'CONVERSATIONS',
      time: '06:00 PM',
      location: 'DELHI',
      image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800'
    },
    {
      date: {
        day: '30',
        month: 'APR'
      },
      title: 'Cine Workers Safety Seminar',
      category: 'CONVERSATIONS',
      time: '07:00 PM',
      location: 'MUMBAI',
      image: 'https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming Programs
        </h2>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16"
        >
          {programs.map((program, index) => (
            <div 
              key={index}
              className="program-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 text-center transform transition-transform duration-300 group-hover:translate-y-1 group-hover:shadow-lg">
                  <div className="text-2xl font-bold text-aicwa-orange">
                    {program.date.day}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {program.date.month}
                  </div>
                </div>
              </div>

              <div className="p-6 transform transition-all duration-300 group-hover:bg-gray-50">
                <div className="text-sm font-medium text-aicwa-orange mb-2 group-hover:text-aicwa-orange/80">
                  {program.category}
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-aicwa-orange">
                  {program.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    <Clock size={16} />
                    <span>{program.time}</span>
                  </div>
                  <div className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    <MapPin size={16} />
                    <span>{program.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-aicwa-orange text-white rounded-lg hover:bg-aicwa-orange/90 transition-colors hover:scale-105 duration-300">
            VIEW FULL CALENDAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Program;