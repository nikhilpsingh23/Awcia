import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: 'Volunteer With Us',
      description: 'Join our community of dedicated volunteers and make a direct impact in childrens lives.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200',

      link: '/volunteer'
    },
    {
      title: 'Partner With Us',
      description: 'Create meaningful partnerships that drive social change and community development.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200',
      link: '/partner'
    },
    {
      title: 'Internship',
      description: 'Gain valuable experience while contributing to meaningful social causes.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200',
      link: '/internship'
    },
    {
      title: 'Careers',
      description: 'Join our team and build a career with purpose and social impact.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200',
      link: '/careers'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative text-white py-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1920"
              alt="Get Involved"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl max-w-2xl">
              Join us in making a difference. There are many ways you can contribute to our mission of creating positive change.
            </p>
          </div>
        </div>

        {/* Options Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {involvementOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <a 
                    href={option.link}
                    className="inline-flex items-center text-aicwa-orange hover:text-aicwa-orange/80 font-semibold"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;