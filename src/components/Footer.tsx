import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#F9B84D] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Contact Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <img src="/images/logo.png" alt="Aicwa Foundation" className="h-16 md:h-20" />

            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-center md:text-left">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl" />
                <div>
                  <p className="font-bold text-sm">CALL US NOW</p>
                  <p className="text-sm">011-41410075/76</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <div>
                  <p className="font-bold text-sm">SEND AN EMAIL</p>
                  <p className="text-sm">contact@s.org</p>
                </div>
              </div>

              {/* Socials */}
             
            </div>
          </div>

          {/* Footer Grid (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
            {/* Column 1 - About */}
            <div>
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <p>
                AICWA is dedicated to making a positive impact in health, education, child welfare, old age support, and humanity awareness through community-driven initiatives.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Health</a></li>
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Rural Transformation</a></li>
                <li><a href="#" className="hover:underline">Women Empowerment</a></li>
                <li><a href="#" className="hover:underline">Art, Culture & Heritage</a></li>
              </ul>
            </div>

            {/* Column 3 - Additional Links */}
            <div>
              <h3 className="font-bold mb-4">EXPLORE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Get Involved</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
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
        © 2025 AICWA Foundation. Designed and Developed by : CodeKrafters.in
      </div>
    </>
  );
};

export default Footer;
