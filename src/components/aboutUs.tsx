import { Phone } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src="/images/about-img.png"
                alt="Helping hands"
                className="w-full rounded-2xl"
              />
              <div className="absolute top-8 left-8 bg-white text-aicwa-orange font-bold text-2xl p-4 rounded-full shadow-lg">
                15+
                <div className="text-sm font-normal text-center">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">♥</span>
              <span className="text-yellow-500 font-medium">About AICWA</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Leading the Revolution in Indian Film Industry Workers' Rights
            </h2>

            <p className="text-gray-600 mb-6">
              All Indian Cine Workers Association (AICWA) is an Organized Non-Government workers union 
              for the Indian Film Industry. We made a revolution by organizing a meeting with the labor 
              ministry and forming a government committee where AICWA represents workers and artists.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <img src="/icons/team.svg" alt="Leadership icon" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Industry Leadership</h4>
                  <p className="text-sm text-gray-500">Committee Member of Labor, Energy & Industries</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-aicwa-orange mt-1">•</span>
                  <span>Leading association for film industry workers' betterment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aicwa-orange mt-1">•</span>
                  <span>Government committee membership representing workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aicwa-orange mt-1">•</span>
                  <span>Active role in national film industry policies</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full hover:bg-aicwa-orange/90 transition-colors">
                Learn More
              </button>
              <a href="/contact" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-aicwa-orange transition-colors group">
                <Phone className="text-yellow-500" /> 
                <span className="font-semibold group-hover:text-yellow-500">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;