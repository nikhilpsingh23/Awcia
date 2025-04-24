
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { CheckCircle, Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title="About AICWA"
        subtitle="Learn about our mission, vision, and journey"
        imageSrc="https://media.istockphoto.com/id/1279995279/photo/double-exposure-panoramic-teamwork-business-join-hand-together-with-silhouette-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=YvdGyDgn3-cYbS1oxDzOE7k3LgKJOGsjM64D7qU6uts="
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
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800"
                      alt="Children studying"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="mb-4">
                      Founded in 2008, AICWA began as a small initiative by a group of passionate individuals determined to make a difference in their local community. What started as weekend literacy classes for underprivileged children quickly grew as the founders recognized the interconnected challenges facing the communities they served.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 mb-8 items-center">
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800"
                      alt="Healthcare camp"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="mb-4">
                      Over the years, AICWA expanded its focus to include healthcare access, child welfare programs, support for the elderly, and broader humanitarian efforts. Today, we operate across multiple states in India, partnering with local communities, governments, and other organizations to implement sustainable solutions to pressing social challenges.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-aicwa-darkGray mt-8 mb-4">Our Approach</h3>
                
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800"
                      alt="Community meeting"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="mb-4">
                      At AICWA, we believe in a community-centered approach. We recognize that lasting change comes from within communities, and our role is to support, facilitate, and amplify local initiatives. We work closely with community leaders, understanding their unique needs, strengths, and challenges before implementing any program.
                    </p>
                    <p className="mb-4">
                      Our programs are designed with sustainability in mind. Rather than creating dependency, we focus on building capacity, fostering self-reliance, and creating systems that can continue to function and evolve even after our direct involvement ends.
                    </p>
                  </div>
                </div>

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
      
      // New Vision & Mission Section
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-aicwa-orange" size={24} />
                <h3 className="text-2xl font-bold text-aicwa-darkGray">Our Vision</h3>
              </div>
              <p className="text-aicwa-gray">
                To create a world where every individual, regardless of their circumstances, has access to quality education, healthcare, and opportunities for growth. We envision communities where children thrive, elderly are respected and cared for, and human dignity is preserved through sustainable development initiatives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-aicwa-orange" size={24} />
                <h3 className="text-2xl font-bold text-aicwa-darkGray">Our Mission</h3>
              </div>
              <p className="text-aicwa-gray">
                To empower communities through integrated development programs that focus on education, healthcare, child welfare, and elderly support. We strive to create sustainable solutions by working closely with local communities, fostering partnerships, and promoting social innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Achievements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Achievements"
            subtitle="Milestones that mark our journey"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <Award className="text-aicwa-orange mx-auto mb-4" size={40} />
              <h4 className="text-xl font-bold text-aicwa-darkGray mb-2">15+ Years</h4>
              <p className="text-aicwa-gray">Of Dedicated Service</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="text-aicwa-orange mx-auto mb-4" size={40} />
              <h4 className="text-xl font-bold text-aicwa-darkGray mb-2">100,000+</h4>
              <p className="text-aicwa-gray">Lives Impacted</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Globe className="text-aicwa-orange mx-auto mb-4" size={40} />
              <h4 className="text-xl font-bold text-aicwa-darkGray mb-2">500+</h4>
              <p className="text-aicwa-gray">Communities Served</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Award className="text-aicwa-orange mx-auto mb-4" size={40} />
              <h4 className="text-xl font-bold text-aicwa-darkGray mb-2">25+</h4>
              <p className="text-aicwa-gray">National Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Recognition Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Recognition & Certifications"
            subtitle="Our commitment to excellence"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-aicwa-darkGray mb-3">ISO 9001:2015</h4>
              <p className="text-aicwa-gray">Certified for Quality Management Systems in Social Service Operations</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-aicwa-darkGray mb-3">NGO of the Year 2022</h4>
              <p className="text-aicwa-gray">Awarded by the National Social Impact Forum for Excellence in Community Service</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-aicwa-darkGray mb-3">FCRA Registered</h4>
              <p className="text-aicwa-gray">Authorized to receive foreign contributions for social development projects</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
