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
    <section className="bg-[#E84C1C] py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Donation Form */}
          <div className="w-full lg:w-1/2 bg-[#1E1E1E] p-4 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4 sm:mb-6">
              Custome Donate Now
            </h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={cn(
                    "px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-colors",
                    selectedAmount === amount
                      ? "bg-[#E84C1C] text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  )}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full sm:flex-1 px-4 py-2 rounded-full bg-white text-black focus:outline-none text-sm sm:text-base"
                placeholder="Enter amount"
              />
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-[#E84C1C] text-white rounded-full hover:bg-[#E84C1C]/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                Donate Now
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white">♥</span>
              <span className="text-sm sm:text-base">Donate Now</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
              Support Kids by Raising<br className="hidden sm:block" />
              Valuable Donations
            </h2>

            <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 mb-2">
              <div 
                className="bg-white h-full rounded-full" 
                style={{ width: '84%' }}
              ></div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm">
              <span>Raised: $25,000</span>
              <span>Goal: $30,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;