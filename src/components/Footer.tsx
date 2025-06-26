import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      {/* Top Action Buttons */}
      

      {/* Main Footer */}
      <footer className="bg-[#F9B84D] py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Contact Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
            <img src="/images/logo.png" alt="Aicwa Foundation" className="h-16 md:h-20" />

            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl" />
                <div>
                  <p className="font-bold text-sm">CALL US NOW</p>
                  <p className="text-sm">011-41410075/76</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <div>
                  <p className="font-bold text-sm">SEND AN EMAIL</p>
                  <p className="text-sm">contact@s.org</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm mb-2">CONNECT WITH US</p>
                <div className="flex justify-center sm:justify-start gap-3">
                  <FaFacebook className="hover:text-gray-700 cursor-pointer" />
                  <FaInstagram className="hover:text-gray-700 cursor-pointer" />
                  <FaLinkedin className="hover:text-gray-700 cursor-pointer" />
                  <FaTwitter className="hover:text-gray-700 cursor-pointer" />
                  <FaYoutube className="hover:text-gray-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 text-sm">
            {/* About Section */}
            <div className="md:col-span-4">
              <p>
                AICWA is dedicated to making a positive impact in health, education, child welfare, old age support, and humanity awareness through community-driven initiatives.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Health</a></li>
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Rural Transformation</a></li>
                <li><a href="#" className="hover:underline">Women Empowerment</a></li>
                <li><a href="#" className="hover:underline">Art, culture and heritage</a></li>
              </ul>
            </div>

            {/* Additional Links */}
            <div className="md:col-span-2">
              <ul className="space-y-2 mt-6 md:mt-10">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Get Involved</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-3">
              <h3 className="font-bold mb-4">GET UPDATES</h3>
              <p className="mb-4">Keep up with the latest news of our charity organization.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 bg-[#C99B42] placeholder-black text-sm"
                />
                <button className="bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 w-full sm:w-auto">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gray-700 text-white py-3 text-center text-xs sm:text-sm">
        © 2025 AICWA Foundation. All Rights Reserved | CK
      </div>
    </>
  );
};

export default Footer;
