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
            {/* Text Logo */}
            <h2 className="text-2xl font-bold text-[#303C69]">AICWA Foundation</h2>

            { /*<div className="flex flex-wrap justify-center md:justify-end gap-6 text-center md:text-left">
              
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl" />
                <div>
                  <p className="font-bold text-sm">CALL US NOW</p>
                  <p className="text-sm">7700999457</p>
                </div>
              </div>

              
              <div className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <div>
                  <p className="font-bold text-sm">SEND AN EMAIL</p>
                  <p className="text-sm">info@aicwafoundation.org</p>
                </div>
              </div>
            </div>*/}
          </div>

          {/* Footer Grid (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
            {/* Column 1 - About */}
            <div>
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <p>
              AICWA Foundation is a pan-India initiative dedicated to uplifting the unseen pillars of the entertainment industry — its workers.
Through focused programs in Health, Education, Rural Transformation, Women Empowerment, and Art, Culture & Heritage, we support for to the soul of Indian cinema.

We don’t just support workers. We honour their legacy
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="/impact/health" className="hover:underline">Health</a></li>
                <li><a href="/impact/education" className="hover:underline">Education</a></li>
                <li><a href="impact/rural" className="hover:underline">Rural Transformation</a></li>
                <li><a href="/impact/women-empowerment" className="hover:underline">Women Empowerment</a></li>
                <li><a href="/impact/art-culture-heritage" className="hover:underline">Art, Culture & Heritage</a></li>
              </ul>
            </div>

            {/* Column 3 - Explore */}
            <div>
              <h3 className="font-bold mb-4">EXPLORE</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
                <li><a href="/gallery" className="hover:underline">Gallery</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h3 className="font-bold mb-4">CONTACT INFORMATION</h3>
              <p className="mb-2">
                <strong>Office Address:</strong><br />
                5, Sunheights Building,<br />
                Near Shyamlal Sohanlal Gupta Chowk,<br />
                JVLR, Powai, Mumbai - 400076
              </p>
              <p className="mb-2">
                <strong>Contact No:</strong> 7700999457
              </p>
              <p>
                <strong>Email:</strong> info@aicwafoundation.org
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#303C69] text-white py-3 text-center text-xs sm:text-sm">
        © 2025 AICWA Foundation. Designed and Developed by : <a href="https://codekrafters.in" className="underline">CodeKrafters.in</a>
      </div>
    </>
  );
};

export default Footer;
