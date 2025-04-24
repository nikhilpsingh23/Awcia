import { useState } from 'react';
import { cn } from '@/lib/utils';

const AreaOfImpact = () => {
  const [activeTab, setActiveTab] = useState('health');

  const impactAreas = [
    {
      id: 'health',
      title: 'Health',
      description: 'Providing accessible healthcare services through mobile clinics, health camps, and medical support programs. Our initiatives focus on preventive care, maternal health, and elderly wellness.',
      imageSrc: 'https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=BpJcZ42YnsP6KZmsdmEsArWBECDspsljlPfINuZ0l_U=',
      additionalImages: [
        {
          src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600',
          caption: 'Medical Camps'
        },
        {
          src: 'https://media.istockphoto.com/id/519084074/photo/that-tickles.webp?a=1&b=1&s=612x612&w=0&k=20&c=1VZRpvTfETI947xMED9cSFBQ4GJ3BEVSmsLV7c1cki4=',
          caption: 'Healthcare Services'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Empowering communities through quality education, digital learning initiatives, and skill development programs. We focus on making education accessible to all, regardless of socioeconomic status.',
      imageSrc: 'https://media.istockphoto.com/id/1344964565/photo/teacher-distributing-healthy-meal-to-students-in-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=W9Y-eiZWCoA7xlSejkBGLPSt6wkj5iQGmvB5ahytH8M=',
      additionalImages: [
        {
          src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600',
          caption: 'Digital Learning'
        },
        {
          src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600',
          caption: 'Classroom Education'
        }
      ]
    },
    {
      id: 'child',
      title: 'Child Welfare',
      description: 'Supporting children through comprehensive welfare programs including education, nutrition, healthcare, and protection services. We ensure every child has the opportunity to thrive.',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200',
      additionalImages: [
        {
          src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600',
          caption: 'Child Care'
        },
        {
          src: 'https://images.unsplash.com/photo-1597791366640-e91489aaf430?auto=format&fit=crop&w=600',
          caption: 'Child Development'
        }
      ]
    },
    {
      id: 'oldage',
      title: 'Old Age Support',
      description: 'Providing comprehensive care and support for the elderly through healthcare services, social activities, and community engagement programs that ensure dignity in their golden years.',
      imageSrc: 'https://media.istockphoto.com/id/621904232/photo/beautiful-cheerful-senior-woman-volunteers-at-food-bank.webp?a=1&b=1&s=612x612&w=0&k=20&c=9mbq6IImHqRQLRTMyufWTqJ_JeE06jwDcp-NMfrj1UM=',
      additionalImages: [
        {
          src: 'https://images.unsplash.com/photo-1490349708435-19d432984978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9sZCUyMGFnZSUyMG5nb3xlbnwwfHwwfHx8MA%3D%3D',
          caption: 'Social Activities'
        },
        {
          src: 'https://media.istockphoto.com/id/587506108/photo/caregiver-woman-helping-senior-man-with-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=DXLIfWU-DUeAbIRfYil3iYIKneL-PhTxbkr5b_-KXnc=',
          caption: 'Elder Care'
        }
      ]
    },
    {
      id: 'humanity',
      title: 'Humanity Awareness',
      description: 'Promoting social awareness, community engagement, and humanitarian values through education, workshops, and community-driven initiatives.',
      imageSrc: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200',
      additionalImages: [
        {
          src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600',
          caption: 'Community Programs'
        },
        {
          src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600',
          caption: 'Awareness Campaigns'
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Areas of Impact</h2>
        
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
            <div key={area.id} className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={area.imageSrc}
                    alt={area.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{area.title}</h3>
                  <p className="text-lg text-gray-700 mb-8">{area.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {area.additionalImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-center font-medium px-4">
                            {image.caption}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        ))}

        <div className="text-center mt-12">
          <a 
            href="/impact" 
            className="text-aicwa-orange hover:text-aicwa-orange/90 font-semibold flex items-center justify-center gap-2"
          >
            EXPLORE OUR IMPACT
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreaOfImpact;