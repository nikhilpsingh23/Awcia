import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemsRef = useRef([]);
  const donateButtonRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const offset = heroSection ? heroSection.offsetHeight - 100 : 100;
      setScrolled(window.scrollY > offset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover animations
  useEffect(() => {
    const menuItems = menuItemsRef.current;
    const donateBtn = donateButtonRef.current;
    const mobileBtn = mobileMenuButtonRef.current;

    const createHoverAnimation = (element) => {
      if (!element) return null;
      const timeline = gsap.timeline({ paused: true });

      if (element === donateBtn) {
        timeline.to(element, {
          scale: 1.05,
          backgroundColor: '#eab308',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else if (element === mobileBtn) {
        timeline.to(element, {
          scale: 1.1,
          rotation: 180,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      } else {
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

    menuItems.forEach((item) => {
      if (item) {
        const anim = createHoverAnimation(item);
        if (anim) {
          item.addEventListener('mouseenter', anim.play);
          item.addEventListener('mouseleave', anim.reverse);
          animations.push({ element: item, enter: anim.play, leave: anim.reverse });
        }
      }
    });

    [donateBtn, mobileBtn].forEach((btn) => {
      const anim = createHoverAnimation(btn);
      if (anim && btn) {
        btn.addEventListener('mouseenter', anim.play);
        btn.addEventListener('mouseleave', anim.reverse);
        animations.push({ element: btn, enter: anim.play, leave: anim.reverse });
      }
    });

    return () => {
      animations.forEach(({ element, enter, leave }) => {
        if (element) {
          element.removeEventListener('mouseenter', enter);
          element.removeEventListener('mouseleave', leave);
        }
      });
    };
  }, []);

  const linkClasses = (isScrolled) =>
    cn(
      "transition-all duration-300 hover:underline underline-offset-4 decoration-yellow-500 decoration-[2px]",
      isScrolled ? "text-aicwa-darkGray" : "text-white"
    );

  const impactLinks = [
    { label: "Health", to: "/impact/health" },
    { label: "Education", to: "/impact/education" },
    { label: "Rural Transformation", to: "/impact/rural-transformation" },
    { label: "Women Empowerment", to: "/impact/women-empowerment" },
    { label: "Art, Culture & Heritage", to: "/impact/art-culture-heritage" }
  ];

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-[#f2f2f2] shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className={cn(
            "text-2xl font-bold",
            scrolled ? "text-aicwa-darkGray" : "text-yellow-500"
          )}>
            AICWA Foundation
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link ref={el => menuItemsRef.current[0] = el} to="/about" className={linkClasses(scrolled)}>About Us</Link>
            <Link ref={el => menuItemsRef.current[1] = el} to="/getinvolved" className={linkClasses(scrolled)}>Volunteer</Link>

            {/* Dropdown */}
            <div className="relative group">
              <button onClick={() => setIsImpactOpen(!isImpactOpen)} className={linkClasses(scrolled)}>
                Area of Impact <ChevronDown size={16} className="ml-1 inline-block" />
              </button>
              <div className={cn(
                "absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out z-50",
                isImpactOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              )}>
                {impactLinks.map(({ label, to }, idx) => (
                  <Link
                    key={idx}
                    to={to}
                    className="block px-4 py-2 text-sm text-aicwa-darkGray hover:bg-gray-100"
                    onClick={() => setIsImpactOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link ref={el => menuItemsRef.current[2] = el} to="/gallery" className={linkClasses(scrolled)}>Gallery</Link>
            <Link ref={el => menuItemsRef.current[3] = el} to="/contact" className={linkClasses(scrolled)}>Contact Us</Link>

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

          {/* Mobile Hamburger */}
          <button
            ref={mobileMenuButtonRef}
            className={cn("md:hidden focus:outline-none transition-transform duration-300", scrolled ? "text-aicwa-darkGray" : "text-white")}
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

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4">
            <Link to="/about" className={linkClasses(scrolled)} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/getinvolved" className={linkClasses(scrolled)} onClick={() => setIsMobileMenuOpen(false)}>Volunteer</Link>

            {/* Mobile Dropdown */}
            <button onClick={() => setIsImpactOpen(!isImpactOpen)} className={linkClasses(scrolled)}>
              Area of Impact <ChevronDown size={16} className="ml-1 inline-block" />
            </button>
            {isImpactOpen && (
              <div className="pl-4 space-y-2">
                {impactLinks.map(({ label, to }, idx) => (
                  <Link
                    key={idx}
                    to={to}
                    className="block px-4 py-2 text-sm text-aicwa-darkGray text-white hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/gallery" className={linkClasses(scrolled)} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className={linkClasses(scrolled)} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link to="/donate" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-opacity-90 transition-colors inline-block w-fit" onClick={() => setIsMobileMenuOpen(false)}>Donate</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
