import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GraduationCap, Heart, Home, Users, Utensils, BookOpen } from 'lucide-react';

const DonationComponent = () => {
  return (
    <div className="w-full bg-[#2A2A2A] py-16 px-4 md:px-16 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Donation Form */}
        <div className="w-full lg:w-1/2 bg-[#D4AF37] p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-[#2A2A2A] mb-4">Donate.</h2>
          <p className="text-[#2A2A2A]/80 mb-6">Your contribution helps support film industry workers and their families across India.</p>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Project you want to donate"
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First name"
                className="p-3 bg-white/90 rounded border-0 placeholder-gray-500"
              />
              <Input
                type="text"
                placeholder="Last name"
                className="p-3 bg-white/90 rounded border-0 placeholder-gray-500"
              />
            </div>
            
            <Input
              type="number"
              placeholder="Your gift (₹)"
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
            />
            
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-white/90 rounded border-0 placeholder-gray-500"
            />
            
            <Button 
              onClick={() => window.location.href = '/donate'}
              className="w-full bg-[#2A2A2A] text-white py-3 rounded font-medium hover:bg-[#1A1A1A] transition-colors"
            >
              Send message
            </Button>

            <div className="mt-6">
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
              <GraduationCap className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Education Support</h3>
                <p className="text-white/70">Providing educational assistance to children of film industry workers, including scholarships and learning materials.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Heart className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Healthcare Assistance</h3>
                <p className="text-white/70">Medical support and health insurance coverage for workers and their families.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Home className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Housing Support</h3>
                <p className="text-white/70">Housing assistance and shelter programs for industry workers in need.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Utensils className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Food Security</h3>
                <p className="text-white/70">Ensuring nutritional support and food assistance to workers' families.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <BookOpen className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-[#D4AF37] mb-2">Skill Development</h3>
                <p className="text-white/70">Training programs and workshops for career advancement in the film industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;