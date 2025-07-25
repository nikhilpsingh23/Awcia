import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[650px] flex items-center justify-center">
        <img
          src="/images/contact-office.jpeg"
          alt="Volunteer Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact With Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our mission to create positive change and make a lasting impact in the lives of those who need it most.
          </p>
        </div>

        {/* Left-aligned floating breadcrumb (half overlay) */}
        <div className="absolute -bottom-6 left-6 z-20">
          <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span className="text-[#4b2d0c] font-bold">›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Spacer below breadcrumb so next section doesn't overlap */}
      <div className="h-10" />

      {/* Get In Touch Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wide text-[#10635a] font-medium">Get In Touch</p>
          <h2 className="text-4xl font-bold text-[#f4a300] mb-4">Contact With Us</h2>
          <p className="max-w-3xl text-gray-700">
            The secret to happiness lies in helping others. Never underestimate the difference YOU can make in
            the lives of the poor, the abused and the helpless. Spread sunshine in their lives no matter what
            the weather may be.
          </p>
        </div>

        <div className="space-y-10">
          {/* Form - Full Width */}
          <div className="bg-gray-200 p-6 rounded-md shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md"
              />

              <button
                type="submit"
                className="bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-[#13493a] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Row */}
          <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto text-center space-y-6">
  {/* Address */}
          <div className="bg-[#f6e2bd] p-6 rounded-md shadow-sm">
    <h4 className="font-semibold text-gray-800 mb-2">Our Address</h4>
    <p className="text-sm text-gray-700 leading-relaxed">
      AICWA Foundation <br />
      5, Sunheights Building,<br />
      Near Shyamlal Sohanlal Gupta Chowk,<br />
      JVLR, Powai, Mumbai - 400076
    </p>
    <br/>
    <h4 className="font-semibold text-gray-800 mb-2">Phone Number</h4>
    <p className="text-sm text-gray-700">+91 9820982115</p>
    <br />
    <h4 className="font-semibold text-gray-800 mb-2">Email Address</h4>
    <p className="text-sm text-blue-600 underline">info@aicwafoundation.org</p>
         </div>
         </div>
        </div>
      </section>

      {/* Image Grid Section */}
<section className="px-6 md:px-20 py-12 bg-[#fdf7ee]">
  <h3 className="text-3xl font-bold text-center text-[#13493a] mb-8">Our Office</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/about-1.JPG" alt="Gallery 1" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-cover.jpeg" alt="Gallery 2" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/office2.jpeg" alt="Gallery 3" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/office1.jpeg" alt="Gallery 4" className="w-full h-64 object-cover" />
    </div>
  </div>
</section>

      {/* Location rounded map */}
      <section className="w-full my-12">
        <div className="mx-4 md:mx-16 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6063806677917!2d72.92167060000001!3d19.124916400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c700121f49f1%3A0x39bdb36177fb1386!2sAICWA%20FOUNDATION!5e0!3m2!1sen!2sin!4v1746507859494!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
