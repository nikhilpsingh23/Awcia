import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    interests: '',
    experience: '',
    availability: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic (API call or DB save)
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
  <img
    src="/images/volunteer.JPG"
    alt="Volunteer Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Volunteer With Us</h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
      Join our mission to create positive change and make a lasting impact in the lives of those who need it most.
    </p>
  </div>

  {/* Left-aligned floating breadcrumb (half overlay) */}
  <div className="absolute -bottom-6 left-6 z-20">
    <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
      <a href="/" className="hover:underline">Home</a>
      <span className="text-[#4b2d0c] font-bold">›</span>
      <span>Volunteer</span>
    </div>
  </div>
</section>

{/* Spacer below breadcrumb so next section doesn't overlap */}
<div className="h-10" />

        {/* Section 2 - Why Volunteer */}
        <section className="py-16 md:py-24 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Why Volunteer With Us?
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Join our mission to create lasting change in the lives of children and communities across India. As a volunteer, you'll be part of a dedicated team working towards meaningful social impact.
                  </p>
                  <p>Your time and skills can make a real difference in:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Education and skill development programs</li>
                    <li>Community outreach initiatives</li>
                    <li>Healthcare awareness campaigns</li>
                    <li>Rural development projects</li>
                    <li>Women empowerment programs</li>
                  </ul>
                  <p>
                    Together, we can create positive change and build a better future for those in need.
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 group transition-transform duration-500 hover:scale-105"
                style={{ borderColor: '#303C69' }}
              >
                {/* Volunteering Tag */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-black font-semibold text-sm px-4 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Volunteering
                </div>

                {/* Image */}
                <img
                  src="/images/s8.png"
                  alt="Volunteers working together"
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Join Form */}
        <section className="py-16 md:py-24 bg-[#303C69]">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            {/* Section Heading */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join Our Volunteer Community
              </h2>
              <p className="text-xl text-gray-200">
                Take the first step towards making a difference. Fill out the form below and become part of our volunteer family.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Occupation */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="What do you do?"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us why you want to volunteer with us..."
                  className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-[#303C69] py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 shadow-lg transition duration-300 transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Volunteer;
