import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Home, Users, Utensils, BookOpen, Power, ChartBar } from 'lucide-react';

const DonationComponent = () => {
  return (
    <section className='w-full'>
    <div className="w-full bg-[#303C69] py-16 px-4 md:px-16 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Donation Form */}
        {/* Left Section - Donation Form */}
<div className="w-full lg:w-1/2 bg-[#D4AF37] p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
  <h2 className="text-3xl font-light text-[#2A2A2A] mb-4">Payment Details</h2>

  <div className="space-y-4"> 
    <Input
      type="text"
      placeholder="Name"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />
    <Input
      type="email"
      placeholder="Email"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />
    <Input
      type="tel"
      placeholder="Phone"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />
    <Input
      type="text"
      placeholder="Address (Optional)"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />
    <Input
      type="text"
      placeholder="Pan Number (Optional)"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />
    <Input
      type="number"
      placeholder="Amount"
      className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
    />

    <Button className="w-full bg-[#2A2A2A] text-white py-3 rounded font-medium hover:bg-[#1A1A1A] transition-all duration-300">
      Proceed to Pay 
    </Button>

    <div className="pt-4">
      <img
        src="/pay.png" // Replace with actual image path from your project
        alt="Payment Methods"
        className="h-8 object-contain"
      />
    </div>
  </div>
</div>


        {/* Right Section - Impact Areas */}
        <div className="w-full lg:w-1/2 text-white pt-8 lg:pt-1">
          <h2 className="text-4xl font-light mb-12">Our mission is to support film industry workers.</h2>
          
          <div className="space-y-8">
          <div className="flex items-start gap-6">
              <Heart className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Health</h3>
                <p className="text-white/70"> No worker is denied treatment due to lack of money — providing medical aid, essential medicines, and building charity hospitals for free healthcare access</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <GraduationCap className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Education </h3>
                <p className="text-white/70">Free education from school to college for workers’ children, with scholarships for higher studies and building affordable colleges to secure their future.</p>
              </div>
            </div>

            

            <div className="flex items-start gap-6">
              <Home className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Rural transformation</h3>
                <p className="text-white/70">Reaching the poorest villages with food, clothing, education, medical help, and building homes — ensuring no family is left behind in the journey of development.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <ChartBar className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Women Empowerment</h3>
                <p className="text-white/70">In the film industry, we protect women from exploitation, threats, and blackmail — ensuring their safety, dignity, and empowering them to raise their voice without fear.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <BookOpen className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Art, Culture & heritage</h3>
                <p className="text-white/70">Building film cities in every state, theaters in every district, and uplifting regional cinema while providing free or affordable training to nurture India’s creative heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="relative w-full -mt-20">
  <svg
    viewBox="0 0 1440 150"
    className="w-full h-24 md:h-32"
    preserveAspectRatio="none"
  >
    <path
      fill="#f2f2f2"
      d="M0,0 C480,120 960,120 1440,0 L1440,150 L0,150 Z"
    />
  </svg>
</div>
    </section>
  );
};

export default DonationComponent;