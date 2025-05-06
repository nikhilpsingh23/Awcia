
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-aicwa-darkGray pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img src="/logo.jpg" alt="AICWA Logo" className="h-8 w-8 mr-2" />
              AICWA
            </h3>
            <p className="text-aicwa-gray-200 mb-4">
              AICWA is dedicated to making a positive impact in health, education, 
              child welfare, old age support, and humanity awareness through 
              community-driven initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aicwafoundation" className="text-aicwa-gray hover:text-aicwa-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/aicwafoundation/" className="text-aicwa-gray hover:text-aicwa-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FAICWAFoundation" className="text-aicwa-gray hover:text-aicwa-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/aicwafoundation/" className="text-aicwa-gray hover:text-aicwa-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact/health" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/impact/education" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/impact/child-welfare" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Child Welfare
                </Link>
              </li>
              <li>
                <Link to="/impact/old-age" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Old Age Support
                </Link>
              </li>
              <li>
                <Link to="/impact/humanity" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Humanity Awareness
                </Link>
              </li>
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="#" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="#" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-aicwa-gray-200 hover:text-aicwa-orange transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-aicwa-gray-200 space-y-2">
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
                <a href="tel:+919820982115" className="hover:text-aicwa-orange transition-colors">
                  +91 9820982115
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-200 my-8" />
        
        <div className="text-center text-aicwa-gray-200">
          <p>&copy; {new Date().getFullYear()} AICWA. Development By CodeKrafters</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
