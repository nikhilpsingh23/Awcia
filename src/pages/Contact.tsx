import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission here
    reset();
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative text-white min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Column */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6063806677917!2d72.92167060000001!3d19.124916400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c700121f49f1%3A0x39bdb36177fb1386!2sAICWA%20FOUNDATION!5e0!3m2!1sen!2sin!4v1746507859494!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-aicwa-darkGray mb-4">Our Location</h3>
                <address className="not-italic text-aicwa-gray space-y-2">
                <p>5, Sunheights Building</p>
              <p>Near Shyamlal Sohanlal Gupta Chowk</p>
              <p>JVLR, Powai, Mumbai - 400076</p>
              <p>India</p>
              <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:aicwafoundation@gmail.com" className="hover:text-aicwa-orange transition-colors">
                aicwafoundation@gmail.com
                </a>
              </p>
              <p className="flex items-center mt-2">
                <Phone size={16} className="mr-2" /> 
                <a href="9820982115" className="hover:text-aicwa-orange transition-colors">
                9820982115
                </a>
              </p>
                </address>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-aicwa-darkGray mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aicwa-darkGray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-aicwa-orange focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aicwa-darkGray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-aicwa-orange focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-aicwa-darkGray mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your 10-digit phone number"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-aicwa-orange focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-aicwa-darkGray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-aicwa-orange focus:border-transparent"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-aicwa-orange text-white py-3 rounded-md hover:bg-aicwa-orange/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;