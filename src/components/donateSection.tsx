import { useState } from 'react';
import { cn } from '@/lib/utils';

const DonateSection = () => {
  const [customAmount, setCustomAmount] = useState('10');
  const [selectedAmount, setSelectedAmount] = useState('10');

  const predefinedAmounts = ['10', '20', '30', '40', '50'];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  return (
    <section className="bg-[#2A2A2A] py-8 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Featured Video Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Featured Video
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/de9G2V4bIb4"
                title="AICWA Featured Video"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm sm:text-base font-medium">FEATURED STORY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Supporting Film Industry Workers
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Learn about how AICWA is making a difference in the lives of film industry workers 
              through our various initiatives and support programs.
            </p>
            <button className="px-6 py-3 bg-white text-[#E84C1C] rounded-full hover:bg-white/90 transition-colors font-medium">
              WATCH MORE VIDEOS
            </button>
          </div>
        </div>

        {/* Donation Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Rest of the donation form and progress section remains the same */}
      </div>
      </div>
    </section>
  );
};

export default DonateSection;