import { useEffect, useState } from 'react';

interface Story {
  name: string;
  quote: string;
  imageSrc: string;
  company: string;
}

const Story = () => {
  const stories: Story[] = [
    {
      name: "Snehal Waghmare,",
      quote: "Behind every performance is a thousand silent sacrifices. AICWA Foundation stands for all of us who dared to dream but needed a foundation that actually stood by us.",
      imageSrc: "/images/story1.jpeg",
      company: "Actress"
    },
    {
      name: "Yogeshh rawale,",
      quote: "We light up sets daily, but our own homes stayed dark for years. AICWA Foundation is bringing light to our lives—through healthcare, housing, and humanity",
      imageSrc: "/images/story4.jpeg",
      company: "Lightman"
    },
    {
      name: "Rakesh Yadav,",
      quote: "Behind every performance is a thousand silent sacrifices. AICWA Foundation stands for all of us who dared to dream but needed a foundation that actually stood by us.",
      imageSrc: "/images/story3.jpeg",
      company: "Spot Boy"
    },
    {
      name: "Michael Brown",
      quote: "The impact they've had on local families is remarkable. A beacon of hope for many.",
      imageSrc: "/images/suresh.png",
      company: "Grand Party Rental"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPaused, stories.length]);

  const currentStory = stories[currentIndex];

  return (
    <div
      className="relative w-full py-20 px-4 md:px-8 text-white"
      style={{
        backgroundImage: `url('/images/cover2.png')`, // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#303C69]/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <img
          src={currentStory.imageSrc}
          alt={currentStory.name}
          className="w-36 h-auto mb-6 object-contain rounded-md shadow-lg"
        />

        {/* Quote */}
        <span className="text-3xl font-bold text-yellow-400 mb-2">“</span>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 px-2">
          {currentStory.quote}
        </p>

        {/* Name & Company */}
        <h3 className="text-white text-lg font-semibold">{currentStory.name}</h3>
        <p className="text-sm italic text-white/70">{currentStory.company}</p>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
