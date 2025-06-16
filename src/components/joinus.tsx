import { ChevronRight } from 'lucide-react';

const JoinUs = () => {
  const volunteerOptions = [
    {
      title: 'Recognition and Fulfillment',
      description: 'Get recognized for your contributions and find personal fulfillment through helping others.',
    },
    {
      title: 'Why Join Us as a Volunteer?',
      description: 'Make a real difference in your community while developing valuable skills and experiences.',
    },
    {
      title: 'Be Part of a Community',
      description: 'Connect with like-minded individuals and build lasting relationships while serving others.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden border-4 border-yellow-500">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200"
                alt="Volunteer team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">♥</span>
              <span className="text-text-yellow-500 font-medium">Join us</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Why We Need You Become a Volunteer
            </h2>

            <p className="text-gray-600 mb-8">
              We help companies develop powerful corporate social responsibility, grantmaking, and
              employee engagement strategies.
            </p>

            <div className="space-y-4">
              {volunteerOptions.map((option, index) => (
                <button
                  key={index}
                  className="w-full bg-white rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow group"
                >
                  <span className="font-medium">{option.title}</span>
                  <ChevronRight 
                    className="text-aicwa-orange transition-transform group-hover:translate-x-1" 
                    size={20} 
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;