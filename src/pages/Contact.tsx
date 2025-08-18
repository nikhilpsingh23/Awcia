import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import { useRef ,useState} from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const form = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    if (!form.current) return;

    emailjs
      .sendForm('service_1o08bbe', 'template_kvwrseh', form.current, {
        publicKey: '-FaKhFdpuB_YVn_Jp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMsg(true);
          reset(); // Clear form
          setTimeout(() => setSuccessMsg(false), 4000); // Hide message
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
        <img
          src="/images/contact-01.jpeg"
          alt="Volunteer Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-[36px] font-bold mb-6">Contact With Us</h1>
          <p className="text-[19px] md:text-[24px] max-w-3xl mx-auto">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">Contact With Us</h2>
          <p className="max-w-3xl text-gray-700">
          Your voice matters. Whether you seek help, want to support a cause, or raise an issue — AICWA Foundation is here for you. Let’s stand together for justice, dignity, and hope.
          </p>
        </div>

        <div className="space-y-10">
          {/* Form - Full Width */}
          <div className="bg-gray-200 p-6 rounded-md shadow-sm">
            {/* Success Message */}
          {successMsg && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-center">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">
                Your message has been sent.
              </span>
            </div>
          )}

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  {...register('firstName', { required: true })}
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required.</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  {...register('lastName', { required: true })}
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">Last name is required.</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: true })}
                  className="w-full px-4 py-2 border rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required.</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                {...register('message', { required: true })}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>

            <button
              type="submit"
              className="mt-6 bg-[#303C69] hover:bg-[#1f2b4d] text-white px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
          </div>

          {/* Contact Info Row */}
      <div className="bg-[#303C69] p-6 rounded-md shadow-md max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-white">
  {/* Address */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Headquarter</h4>
    <p className="text-sm leading-relaxed">
      5, Sunheights Building,<br />
      Near Shyamlal Sohanlal Gupta Chowk,<br />
      JVLR, Powai, Mumbai - 400076
    </p>
  </div>

  {/* Phone */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Call Us</h4>
    <p className="text-sm">+91 9820982115</p>
  </div>

  {/* Email */}
  <div>
    <h4 className="font-semibold text-lg mb-2"> Email Us</h4>
    <p className="text-sm underline">info@aicwa.in</p>
  </div>
</div>

        </div>
      </section>

      {/* Image Grid Section */}
<section className="px-6 md:px-20 py-12 bg-[#fdf7ee]">
  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-5 text-[#303C69]mb-8">Headquarter</h3>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Row 1 */}
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-office.jpeg" alt="Gallery 1" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-cover.jpeg" alt="Gallery 2" className="w-full h-64 object-cover" />
    </div>

    {/* Row 2 */}
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/office2.jpeg" alt="Gallery 3" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/office1.jpeg" alt="Gallery 4" className="w-full h-64 object-cover" />
    </div>

    {/* Row 3 */}
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-02.jpeg" alt="Gallery 5" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-04.jpeg" alt="Gallery 6" className="w-full h-64 object-cover" />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-01.jpeg" alt="Gallery 5" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-05.jpeg" alt="Gallery 6" className="w-full h-64 object-cover" />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-06.jpeg" alt="Gallery 5" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-07.jpeg" alt="Gallery 6" className="w-full h-64 object-cover" />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/office-img.jpg" alt="Gallery 5" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-03.jpeg" alt="Gallery 6" className="w-full h-64 object-cover" />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-09.jpeg" alt="Gallery 5" className="w-full h-64 object-cover" />
    </div>
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img src="/images/contact-08.jpeg" alt="Gallery 6" className="w-full h-64 object-cover" />
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
