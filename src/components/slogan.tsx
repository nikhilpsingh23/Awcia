import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Slogan = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && subTextRef.current) {
      const mainText = new SplitText(textRef.current, { type: "words,chars" });
      const subText = new SplitText(subTextRef.current, { type: "words,chars" });

      gsap.fromTo(mainText.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      gsap.fromTo(subText.chars, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.01,
        ease: "power4.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#303C69] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div 
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          "TV par dikhti hai rangin duniya, lekin uske peeche chhupi hai film industry ke mazdooro ki andheri raat."
        </div>
        <div 
          ref={subTextRef}
          className="text-xl md:text-2xl text-yellow-500 font-medium italic"
        >
          AICWA Foundation unhi andheron mein roshni ban kar khada hai.
        </div>
      </div>
    </div>
  );
};

export default Slogan;