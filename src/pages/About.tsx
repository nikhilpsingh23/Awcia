
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title="About AICWA"
        subtitle="Learn about our mission, vision, and journey"
        imageSrc="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1920"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-2/3">
              <SectionTitle
                title="Our Story"
                subtitle="From humble beginnings to impactful change"
              />
              
              <div className="prose max-w-none text-aicwa-gray">
                <p className="mb-4">
                  Founded in 2008, AICWA began as a small initiative by a group of passionate individuals determined to make a difference in their local community. What started as weekend literacy classes for underprivileged children quickly grew as the founders recognized the interconnected challenges facing the communities they served.
                </p>
                
                <p className="mb-4">
                  Over the years, AICWA expanded its focus to include healthcare access, child welfare programs, support for the elderly, and broader humanitarian efforts. Today, we operate across multiple states in India, partnering with local communities, governments, and other organizations to implement sustainable solutions to pressing social challenges.
                </p>
                
                <h3 className="text-xl font-bold text-aicwa-darkGray mt-8 mb-4">Our Approach</h3>
                
                <p className="mb-4">
                  At AICWA, we believe in a community-centered approach. We recognize that lasting change comes from within communities, and our role is to support, facilitate, and amplify local initiatives. We work closely with community leaders, understanding their unique needs, strengths, and challenges before implementing any program.
                </p>
                
                <p className="mb-4">
                  Our programs are designed with sustainability in mind. Rather than creating dependency, we focus on building capacity, fostering self-reliance, and creating systems that can continue to function and evolve even after our direct involvement ends.
                </p>
                
                <h3 className="text-xl font-bold text-aicwa-darkGray mt-8 mb-4">Our Impact</h3>
                
                <p className="mb-4">
                  Over the past 15 years, AICWA has:
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-aicwa-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Provided educational support to over 50,000 children</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-aicwa-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Conducted health camps serving more than 100,000 individuals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-aicwa-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Established support networks for 15,000 elderly individuals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-aicwa-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Implemented child welfare programs in 500+ communities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-aicwa-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Trained 10,000+ volunteers in community development</span>
                  </li>
                </ul>
                
                <p>
                  Behind these numbers are individual stories of transformation and hope. We measure our success not just in the scale of our reach, but in the depth of our impact on each life we touch.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-aicwa-darkGray mb-6">Our Values</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Compassion</h4>
                  <p className="text-aicwa-gray">
                    We approach our work with deep empathy and respect for the dignity of every individual.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Integrity</h4>
                  <p className="text-aicwa-gray">
                    We are committed to transparency, accountability, and ethical practices in all we do.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Innovation</h4>
                  <p className="text-aicwa-gray">
                    We continuously seek creative, effective solutions to complex social challenges.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Collaboration</h4>
                  <p className="text-aicwa-gray">
                    We believe in the power of partnerships and collective action to create lasting change.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-aicwa-darkGray mb-2">Sustainability</h4>
                  <p className="text-aicwa-gray">
                    We design our programs with a long-term perspective, focusing on durable solutions.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="w-full">Support Our Mission</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated individuals behind AICWA"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Singh", role: "Executive Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600" },
              { name: "Meera Kumar", role: "Programs Director", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600" },
              { name: "Vikram Patel", role: "Chief Financial Officer", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=600" },
              { name: "Ananya Gupta", role: "Community Relations", image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=600" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md fade-in-up">
                <div className="h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-aicwa-darkGray">{member.name}</h4>
                  <p className="text-aicwa-gray">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
