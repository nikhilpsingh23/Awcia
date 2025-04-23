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
              <span className="text-aicwa-orange">♥</span>
              <span className="text-aicwa-orange font-medium">About US</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Helping Each Other can Make World Better
            </h2>

            <p className="text-gray-600 mb-8">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit The aspernatur aut odit aut fugit, sed quia consequuntur. Nonprofits around the world apply and join us to access more funding.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-aicwa-orange rounded-full flex items-center justify-center">
                  <img src="/icons/team.svg" alt="Team icon" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Start Helping Team</h4>
                  <p className="text-sm text-gray-500">There are many variations of solve</p>
                </div>
              </div>
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-aicwa-orange text-white rounded-full hover:bg-aicwa-orange/90 transition-colors">
                Explore More
              </button>
              <a href="tel:+912345678990" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-aicwa-orange transition-colors group">
                <Phone className="text-aicwa-orange" />
                <span className="group-hover:text-aicwa-orange">Call Any Time</span>
                <span className="font-semibold group-hover:text-aicwa-orange">+91 2345 678 990</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;