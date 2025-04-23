import { useState } from 'react';
import { cn } from '@/lib/utils';

const AreaOfImpact = () => {
  const [activeTab, setActiveTab] = useState('deinstitutionalisation');

  const impactAreas = [
    {
      id: 'deinstitutionalisation',
      title: 'Health',
      description: 'They deserve better. OrphanCare Foundation believes children should grow up in a family environment.',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200'
    },
    {
      id: 'babyHatch',
      title: 'Education',
      description: 'Providing a safe haven for newborns and ensuring their well-being.',
      imageSrc: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200'
    },
    {
      id: 'adoption',
      title: 'Child',
      description: 'Connecting children with loving families through our adoption services.',
      imageSrc: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200'
    },
    {
      id: 'advocacy',
      title: 'Old Age Support',
      description: 'Advocating for childrens rights and better welfare policies.',
      imageSrc: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200'
    },
    {
      id: 'counselling',
      title: 'Humanity Awarness',
      description: 'Professional support and guidance for families and children.',
      imageSrc: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {impactAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={cn(
                "px-6 py-2 rounded-full whitespace-nowrap transition-colors",
                activeTab === area.id
                  ? "bg-aicwa-orange text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
            >
              {area.title}
            </button>
          ))}
        </div>

        {impactAreas.map((area) => (
          activeTab === area.id && (
            <div key={area.id} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={area.imageSrc}
                  alt={area.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{area.title}</h3>
                <p className="text-lg text-gray-700">{area.description}</p>
              </div>
            </div>
          )
        ))}

        <div className="text-center mt-12">
          <a href="#" className="text-[#D35D5D] hover:text-[#D35D5D]/90 font-semibold flex items-center justify-center gap-2">
            SEE ALL OUR WORK
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreaOfImpact;