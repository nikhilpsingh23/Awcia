import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DonationComponent = () => {
  return (
    <div className="w-full bg-[#F05323] py-10 px-4 md:px-16 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 bg-cover bg-center p-6 md:p-10 relative" style={{ backgroundImage: "url('https://source.unsplash.com/600x400/?children,poverty')" }}>
          <div className="bg-black bg-opacity-50 p-6 rounded-xl text-white w-full h-full flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold mb-4">Custome Donate Now</h2>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[10, 20, 30, 40, 50].map((amount, index) => (
                <button 
                  key={amount} 
                  className={`${index === 0 ? 'bg-[#F05323]' : 'bg-white text-black'} px-4 py-2 rounded-full font-semibold text-sm`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full">
              <Input 
                type="number"
                placeholder="10" 
                className="w-32 rounded-full px-4 py-2 bg-white text-black" 
              />
              <Button onClick={() => window.location.href = '/donate'} className="bg-[#F05323] text-white rounded-full px-6 py-2 flex items-center gap-2">
                Donate Now
                <span className="ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-white p-6 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white">♥</span>
            <h5 className="text-sm font-semibold">Donate Now</h5>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
            Support Kids by Raising<br />Valuable Donations
          </h2>
          <div className="w-full mb-4">
            <div className="relative w-full h-2 bg-white bg-opacity-30 rounded-full">
              <div className="absolute top-0 left-0 h-2 bg-white rounded-full" style={{ width: '64%' }}></div>
              <div className="absolute -top-6 left-[64%] -translate-x-1/2 text-sm font-semibold">
                64%
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>Raised : $25,000</span>
            <span>Goal : $30,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;
