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
    <section className="bg-[#E84C1C] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Donation Form */}
          <div className="w-full lg:w-1/2 bg-[#1E1E1E] p-8 rounded-2xl">
            <h3 className="text-2xl text-white font-semibold mb-6">
              Custome Donate Now
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-colors",
                    selectedAmount === amount
                      ? "bg-[#E84C1C] text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  )}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="flex-1 px-4 py-2 rounded-full bg-white text-black focus:outline-none"
                placeholder="Enter amount"
              />
              <button className="px-6 py-2 bg-[#E84C1C] text-white rounded-full hover:bg-[#E84C1C]/90 transition-colors flex items-center gap-2">
                Donate Now
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white">♥</span>
              <span>Donate Now</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-8">
              Support Kids by Raising<br />
              Valuable Donations
            </h2>

            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div 
                className="bg-white h-full rounded-full" 
                style={{ width: '84%' }}
              ></div>
            </div>

            <div className="flex justify-between text-sm">
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