import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Home, Users, Utensils, BookOpen } from 'lucide-react';

const DonationComponent = () => {
  return (
    <section className='w-full'>
    <div className="w-full bg-[#303C69] py-16 px-4 md:px-16 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Donation Form */}
        <div className="w-full lg:w-1/2 bg-[#D4AF37] p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-[#2A2A2A] mb-4 transform hover:translate-x-2 transition-transform duration-300">Donate.</h2>
          <p className="text-[#2A2A2A]/80 mb-6">Your contribution helps support film industry workers and their families across India.</p>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Project you want to donate"
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-md"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First name"
                className="p-3 bg-white/90 rounded border-0 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-md"
              />
              <Input
                type="text"
                placeholder="Last name"
                className="p-3 bg-white/90 rounded border-0 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <Input
              type="number"
              placeholder="Your gift (₹)"
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-md"
            />
            
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-md resize-none"
            />
            
            <Button 
              onClick={() => window.location.href = '/donate'}
              className="w-full bg-[#2A2A2A] text-white py-3 rounded font-medium hover:bg-[#1A1A1A] transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px]"
            >
              Proceed to Donate
            </Button>

            <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#2A2A2A] text-sm mb-2">We accept:</p>
              <img 
                src="/pay.png" 
                alt="Accepted Payment Methods" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Impact Areas */}
        <div className="w-full lg:w-1/2 text-white pt-8 lg:pt-16">
          <h2 className="text-4xl font-light mb-12">Our mission is to support film industry workers.</h2>
          
          <div className="space-y-8">
          <div className="flex items-start gap-6">
              <Heart className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Health</h3>
                <p className="text-white/70">Medical support and health insurance coverage for workers and their families.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <GraduationCap className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Education </h3>
                <p className="text-white/70">Providing educational assistance to children of film industry workers, including scholarships and learning materials.</p>
              </div>
            </div>

            

            <div className="flex items-start gap-6">
              <Home className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Rural transformation</h3>
                <p className="text-white/70">Housing assistance and shelter programs for industry workers in need.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Utensils className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Women Empowerment</h3>
                <p className="text-white/70">Ensuring nutritional support and food assistance to workers' families.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <BookOpen className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Art, Culture & heritage</h3>
                <p className="text-white/70">Training programs and workshops for career advancement in the film industry.</p>
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