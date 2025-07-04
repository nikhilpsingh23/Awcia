
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Refs for menu items
  const menuItemsRef = useRef([]);
  const donateButtonRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const offset = heroSection.offsetHeight - 100;
        setScrolled(window.scrollY > offset);
      } else {
        setScrolled(window.scrollY > 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover animations for all menu items
  useEffect(() => {
    const menuItems = menuItemsRef.current;
    const donateBtn = donateButtonRef.current;
    const mobileBtn = mobileMenuButtonRef.current;

    const createHoverAnimation = (element) => {
      if (!element) return null;

      const timeline = gsap.timeline({ paused: true });
      
      if (element === donateBtn) {
        // Special animation for donate button
        timeline.to(element, {
          scale: 1.05,
          backgroundColor: '#eab308', // yellow-600
          duration: 0.3,
          ease: 'power2.out'
        });
      } else if (element === mobileBtn) {
        // Animation for mobile menu button
        timeline.to(element, {
          scale: 1.1,
          rotation: 180,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      } else {
        // Animation for regular menu items
        timeline.to(element, {
          y: -2,
          scale: 1.05,
          duration: 0.2,
          ease: 'power1.out'
        });
      }

      return timeline;
    };

    const animations = [];

    // Setup animations for all menu items
    menuItems.forEach((item) => {
      if (item) {
        const anim = createHoverAnimation(item);
        if (anim) {
          const handleEnter = () => anim.play();
          const handleLeave = () => anim.reverse();
          
          item.addEventListener('mouseenter', handleEnter);
          item.addEventListener('mouseleave', handleLeave);
          
          animations.push({ element: item, enter: handleEnter, leave: handleLeave });
        }
      }
    });

    // Setup animation for donate button
    if (donateBtn) {
      const anim = createHoverAnimation(donateBtn);
      if (anim) {
        const handleEnter = () => anim.play();
        const handleLeave = () => anim.reverse();
        
        donateBtn.addEventListener('mouseenter', handleEnter);
        donateBtn.addEventListener('mouseleave', handleLeave);
        
        animations.push({ element: donateBtn, enter: handleEnter, leave: handleLeave });
      }
    }

    // Setup animation for mobile menu button
    if (mobileBtn) {
      const anim = createHoverAnimation(mobileBtn);
      if (anim) {
        const handleEnter = () => anim.play();
        const handleLeave = () => anim.reverse();
        
        mobileBtn.addEventListener('mouseenter', handleEnter);
        mobileBtn.addEventListener('mouseleave', handleLeave);
        
        animations.push({ element: mobileBtn, enter: handleEnter, leave: handleLeave });
      }
    }

    // Cleanup
    return () => {
      animations.forEach(({ element, enter, leave }) => {
        if (element) {
          element.removeEventListener('mouseenter', enter);
          element.removeEventListener('mouseleave', leave);
        }
      });
    };
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-[#e6e6e6] shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className={cn(
            "text-2xl font-bold",
            scrolled ? "text-aicwa-darkGray" : "text-yellow-500"
          )}>
           Aicwa Foundation
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              ref={el => menuItemsRef.current[0] = el}
              to="/about" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
            >
              About Us
            </Link>

            {/* Add refs to all menu items */}
            <Link to="/getinvolved" className={cn(
              "hover:text-aicwa-orange transition-colors",
              scrolled ? "text-aicwa-darkGray" : "text-white"
            )}>
              Volunteer
            </Link>
            
            {/* Area of Impact Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setIsImpactOpen(!isImpactOpen)}
                className={cn(
                  "flex items-center hover:text-aicwa-orange transition-colors",
                  scrolled ? "text-aicwa-darkGray" : "text-white"
                )}
              >
                Area of Impact <ChevronDown size={16} className="ml-1" />
              </button>
              
              <div className={cn(
                "absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out",
                isImpactOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              )}>
                
                <Link 
                  to="/impact/health"
                  className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                  onClick={() => setIsImpactOpen(false)}
                >
                  Health
                </Link>
                <Link 
                  to="/impact/education"
                  className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                  onClick={() => setIsImpactOpen(false)}
                >
                  Education
                </Link>
                <Link 
                  to="/impact/child-welfare"
                  className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                  onClick={() => setIsImpactOpen(false)}
                >
                  Child Welfare
                </Link>
                <Link 
                  to="/impact/old-age"
                  className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                  onClick={() => setIsImpactOpen(false)}
                >
                  Old Age Support
                </Link>
                <Link 
                  to="/impact/humanity"
                  className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                  onClick={() => setIsImpactOpen(false)}
                >
                  Humanity Awareness
                </Link>
              </div>
            </div>
            
            <Link to="/gallery" className={cn(
              "hover:text-aicwa-orange transition-colors",
              scrolled ? "text-aicwa-darkGray" : "text-white"
            )}>
              Gallery
            </Link>
            
            {/*<Link to="/story" className={cn(
              "hover:text-aicwa-orange transition-colors",
              scrolled ? "text-aicwa-darkGray" : "text-white"
            )}>
              Story
            </Link> */}
            
            <Link to="/contact" className={cn(
              "hover:text-aicwa-orange transition-colors",
              scrolled ? "text-aicwa-darkGray" : "text-white"
            )}>
              Contact Us
            </Link>
            
             
                
                <Link to="/donate">
                <button
                ref={donateButtonRef}
                  className="flex items-center bg-yellow-500 text-white px-2 py-2 rounded-full shadow-md border border-gray-200 transition duration-300 hover:shadow-lg"
                >
                  <span className="px-4 text-base font-medium">Donate Now</span>
                  <span className="bg-[#0b2c48] text-white rounded-full p-2">
                   <ArrowRight size={16} />
                  </span>
                </button>
              </Link>
          </div>
          
          <button 
            ref={mobileMenuButtonRef}
            className={cn(
              "md:hidden focus:outline-none transition-transform duration-300",
              scrolled ? "text-aicwa-darkGray" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/about" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link 
              to="/getinvolved" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            
            <button 
              onClick={() => setIsImpactOpen(!isImpactOpen)}
              className={cn(
                "flex items-center hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
            >
              Area of Impact <ChevronDown size={16} className="ml-1" />
            </button>
            
            <div className={cn(
              "pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out",
              isImpactOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            )}>
              {/* Update dropdown items */}
              <Link 
                to="/impact/health"
                className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Health
              </Link>
              <Link 
                to="/impact/education"
                className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                to="/impact/child-welfare"
                className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Child Welfare
              </Link>
              <Link 
                to="/impact/old-age"
                className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Old Age Support
              </Link>
              <Link 
                to="/impact/humanity"
                className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Humanity Awareness
              </Link>
            </div>
            
            <Link 
              to="/gallery" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            
            <Link 
              to="/story" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Story
            </Link>

            <Link 
              to="/contact" 
              className={cn(
                "hover:text-aicwa-orange transition-colors",
                scrolled ? "text-aicwa-darkGray" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
              
              <Link 
                to="/donate" 
                className="px-4 py-2 bg-aicwa-orange text-white rounded-md hover:bg-opacity-90 transition-colors inline-block w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
