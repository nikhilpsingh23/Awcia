import { useState } from 'react';

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
    <section className="bg-[#f2f2f2]  py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* ✅ Title exactly like image */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#012B61] mb-4">
        AICWA Takes a Stand, So Every Workers Can Stand Tall.
        </h2>

        
        {/* ✅ Centered YouTube iframe with shadow & rounded corners */}
        <div className="rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/atR6cijcG2s?si=s3whqCRD79scdolf" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              
              className="absolute top-0 left-0 w-full h-full"
              
            ></iframe>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
