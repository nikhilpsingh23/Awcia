import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Story {
  name: string;
  quote: string;
  imageSrc: string;
  company: string;
}

const Story = () => {
  const stories: Story[] = [
    {
      name: "Snehal Waghmare",
      quote: "Behind every performance is a thousand silent sacrifices. AICWA Foundation stands for all of us who dared to dream but needed a foundation that actually stood by us.",
      imageSrc: "/images/story1.jpeg",
      company: "Actress"
    },
    {
      name: "Yogeshh Rawale",
      quote: "We light up sets daily, but our own homes stayed dark for years. AICWA Foundation is bringing light to our lives—through healthcare, housing, and humanity.",
      imageSrc: "/images/story4.jpeg",
      company: "Lightman"
    },
    {
      name: "Rakesh Yadav",
      quote: "Behind every performance is a thousand silent sacrifices. AICWA Foundation stands for all of us who dared to dream but needed a foundation that actually stood by us.",
      imageSrc: "/images/story3.jpeg",
      company: "Spot Boy"
    },
    {
      name: "Ashima Chauhan",
      quote: "In this industry, a woman’s silence is often expected—but I choose to speak. Because when we break the silence, we don’t just protect ourselves. we protect every woman who comes after us. ",
      imageSrc: "/images/ashima.jpeg",
      company: "Actress"
    },
    {
      name: "Rishav Trivedi",
      quote: "In this industry, every actor carries not just dreams, but daily battles—financial pressure, lack of support, and uncertainty. AICWA Foundation gives us more than help; it gives us strength, stability, and the belief that we’re not alone ",
      imageSrc: "/images/rishav.jpeg",
      company: "Actor"
    },
    {
      name: "Dhara Somaiya",
      quote: "On set, I create beautiful looks—but in real life, even basic needs were sometimes a struggle. AICWA Foundation brought stability, support, and self-respect to people like us who’ve given our lives to this industry",
      imageSrc: "/images/somaiya.jpeg",
      company: "Costume Designer"
    },
    {
      name: "Jay Shankar Singh",
      quote: "People see the lights and glamour, but no one sees the camera attendants like us struggling behind the scenes. AICWA Foundation is the first to support us with healthcare, housing, and financial help.",
      imageSrc: "/images/jai-shankar.jpeg",
      company: "Camera Attendant"
    },
    {
      name: "Nikita Dadhich",
      quote: "Behind every glamorous walk on the ramp, there’s a world struggle—especially for young talents without support. AICWA Foundation is empowering women, uplifting artists, and building a future where every dream gets a fair chance. ",
      imageSrc: "/images/nikita.jpeg",
      company: "Super Model"
    },
        {
      name: "Ishita Thakur",
      quote: "“Many come to Mumbai with dreams, but not everyone finds support. AICWA Foundation is ensuring that no artist is left behind—especially women fighting both personal and professional battles.",
      imageSrc: "/images/ishita.jpeg",
      company: "Super Model"
    },
    {
      name: "Shruti Tulli",
      quote: "Beyond the glamour of fashion, many of us walk a tough path—no insurance, no safety. AICWA Foundation is giving us what the industry never did: security, strength, and solidarity. ",
      imageSrc: "/images/shruti.jpeg",
      company: "Super Model"
    },
    {
      name: "Arshi Bharti Shandilya ",
      quote: "In an industry that often writes women as fragile, I chose to rewrite myself as fearless. Empowerment is not just about survival—it’s about owning your voice, your space, and your story, unapologetically. ",
      imageSrc: "/images/arshi.jpeg",
      company: "Actress"
    },
    {
      name: "Pankaj Jha ",
      quote: "The journey of an actor is never easy—uncertain income, emotional stress, no safety net. AICWA Foundation has become that net, that hope, that silent power backing thousands like me. ",
      imageSrc: "/images/pankaj.jpeg",
      company: "Actor"
    },
    {
      name: "Jail Cowasji  ",
      quote: "We frame stories through our lenses, but our own lives often remained out of focus. AICWA Foundation is bringing clarity, care, and structure to the lives of technicians like us.",
      imageSrc: "/images/jail.jpeg",
      company: "Cinematographer"
    },
    {
      name: "Purna Behera  ",
      quote: "In regional industries like ours, cine workers are often unheard and unprotected. AICWA Foundation has united us under one powerful mission—bringing healthcare, education, housing, and financial security to the very hands that keep this industry alive.",
      imageSrc: "/images/purna.jpeg",
      company: "Cinematographer"
    },
    {
      name: "Simran Khan  ",
      quote: "The spotlight is easy to chase, but the struggle behind it is real. AICWA Foundation has become that rare light that guides us—not with fame, but with care, security, and true support",
      imageSrc: "/images/simran.jpeg",
      company: "Actress"
    },

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStory = stories[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div
      className="relative w-full py-20 px-4 md:px-8 text-white"
      style={{
        backgroundImage: `url('/images/story-cover.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#303C69]/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Arrows */}
        <div className="flex justify-between items-center w-full max-w-sm mb-6">
          <button onClick={handlePrev} className="text-white hover:text-yellow-400 transition">
            <FaChevronLeft size={24} />
          </button>
          <img
            src={currentStory.imageSrc}
            alt={currentStory.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <button onClick={handleNext} className="text-white hover:text-yellow-400 transition">
            <FaChevronRight size={24} />
          </button>
        </div>

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
