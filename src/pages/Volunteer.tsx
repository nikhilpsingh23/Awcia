import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React, { useRef} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  message: string;
}
const Volunteer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerFormData>();

  const form = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const onSubmit = (data: VolunteerFormData) => {
    if (!form.current) return;

    emailjs
      .sendForm('service_1o08bbe', 'template_kvwrseh', form.current, {
        publicKey: '-FaKhFdpuB_YVn_Jp',
      })
      .then(
        () => {
          setSuccessMsg(true);
          reset();
          setTimeout(() => setSuccessMsg(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] sm:min-h-[600px] md:min-h-[650px] flex items-center justify-center">
  {/* Background Image */}
  <img
    src="/images/volunteer.JPG"
    alt="Volunteer Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[36px] font-bold mb-4">
      Volunteer With Us
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
      Stand with those who build cinema behind the scenes. Volunteer with AICWA Foundation.
    </p>
  </div>

  {/* Breadcrumb */}
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

        <section className="py-20 bg-[#f2f2f2] px-4 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-6">
              Be the Voice Behind the Spotlight.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At AICWA Foundation, we believe that true change in the film industry begins with those who care enough to act. <br className="hidden md:inline" />
              Behind every frame of entertainment, there are thousands of workers — technicians, junior artists, daily wage labourers — who give their all but remain unseen and unsupported.
            </p>
          </div>
        </section>
        {/* Section 2 - Why Volunteer */}
        <section className="py-16 md:py-24 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left Side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] leading-tight">
                  Why Volunteer With AICWA Foundation?
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    You won’t just be giving your time —<br />
                    You’ll be giving dignity, hope, and opportunity to those who build the dreams we watch on screen.
                  </p>
                  <p>As a volunteer, you will directly contribute to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
  <li>Health – No worker is denied treatment due to lack of money — providing medical aid, essential medicines, and building charity hospitals for free healthcare access.</li>
  <li>Education – Free education from school to college for workers’ children, with scholarships for higher studies and building affordable colleges to secure their future.</li>
  <li>Rural Transformation – Reaching the poorest villages with food, clothing, education, medical help, and building homes — ensuring no family is left behind in the journey of development.</li>
  <li>Women Empowerment – In the film industry, we protect women from exploitation, threats, and blackmail — ensuring their safety, dignity, and empowering them to raise their voice without fear.</li>
  <li>Art, Culture & Heritage – Building film cities in every state, theaters in every district, and uplifting regional cinema while providing free or affordable training to nurture India’s creative heritage.</li>
</ul>
                  <p>
                    Together, we can build a future where no backstage worker is left behind.
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
                  src="/images/volunteer-why.jpeg"
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
              <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] text-white mb-4">
                Join Our Volunteer Community
              </h2>
              <p className="text-xl text-gray-200">
              Together, we won’t just support lives — we’ll celebrate them.
              </p>
            </div>

            {/* Form */}
            {successMsg && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-center">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">
                Your application has been submitted.
              </span>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-white font-medium">First Name</label>
                <input
                  type="text"
                  {...register('firstName', { required: true })}
                  className="w-full px-4 py-2 bg-white/30 rounded"
                  placeholder='First Name'
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required.</p>}
              </div>

              <div>
                <label className="block mb-2 text-white font-medium">Last Name</label>
                <input
                  type="text"
                  {...register('lastName', { required: true })}
                  className="w-full px-4 py-2 bg-white/30 rounded"
                  placeholder='Last Name'
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">Last name is required.</p>}
              </div>

              <div>
                <label className="block mb-2 text-white font-medium">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-2 bg-white/30 rounded"
                  placeholder='Email'
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
              </div>

              <div>
                <label className="block mb-2 text-white font-medium">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: true })}
                  className="w-full px-4 py-2 bg-white/30 rounded"
                  placeholder='Phone Number'
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required.</p>}
              </div>

              
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-white font-medium">Message</label>
              <textarea
                rows={5}
                {...register('message', { required: true })}
                className="w-full px-4 py-2  bg-white/30 rounded"
                placeholder='Write a message...'
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>

            <button
              type="submit"
              className="mt-6 bg-[#303C69] hover:bg-[#1f2b4d] text-white px-6 py-2 rounded"
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
