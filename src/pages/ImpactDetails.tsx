
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, GraduationCap, BookOpen, UserRound, PartyPopper, Info, 
  CheckCircle2, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

interface ImpactCategory {
  title: string;
  description: string;
  longDescription: ReactNode;
  icon: ReactNode;
  coverImage: string;
  stats: {
    figure: string;
    description: string;
  }[];
  programs: {
    title: string;
    description: string;
  }[];
}

const ImpactDetails = () => {
  const { category } = useParams<{ category: string }>();
  
  const impactCategories: Record<string, ImpactCategory> = {
    'about': {
      title: 'About Our Impact',
      description: 'Learn about the holistic approach we take to create positive change',
      longDescription: (
        <>
          <p className="mb-4">
            At AICWA, our approach to creating impact is holistic and community-centered. We believe that true change happens when we address interconnected challenges across different domains of life.
          </p>
          <p className="mb-4">
            Our impact areas work synergistically. For example, improving child welfare necessitates addressing both education and healthcare needs. Supporting the elderly often involves both direct assistance and community awareness initiatives.
          </p>
          <p>
            Across all our programs, we emphasize community participation, sustainability, and measuring outcomes to ensure we're making a meaningful difference.
          </p>
        </>
      ),
      icon: <Info className="text-aicwa-orange" size={24} />,
      coverImage: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?auto=format&fit=crop&w=1920',
      stats: [
        { figure: '15+', description: 'Years of service' },
        { figure: '500,000+', description: 'Lives touched' },
        { figure: '100+', description: 'Communities served' },
        { figure: '5', description: 'Impact areas' },
      ],
      programs: [
        {
          title: 'Needs Assessment',
          description: 'We conduct thorough assessments to understand the specific needs and resources of each community we serve.',
        },
        {
          title: 'Program Design',
          description: 'Our programs are designed with community input, evidence-based practices, and sustainability in mind.',
        },
        {
          title: 'Implementation',
          description: 'We work with local partners and community members to implement programs effectively.',
        },
        {
          title: 'Monitoring and Evaluation',
          description: 'We continuously monitor our programs and measure outcomes to ensure effectiveness and make improvements.',
        },
      ],
    },
    'health': {
      title: 'Health Initiatives',
      description: 'Providing healthcare access and wellness programs to underserved communities',
      longDescription: (
        <>
          <p className="mb-4">
            Access to quality healthcare is a fundamental right, yet millions in India still lack basic health services. AICWA works to bridge this gap through various health initiatives designed to improve access to care and promote overall wellness.
          </p>
          <p className="mb-4">
            Our health programs range from preventive care and health education to direct service provision through mobile clinics and health camps. We place special emphasis on maternal and child health, as well as addressing the health needs of the elderly.
          </p>
          <p>
            By integrating our health initiatives with our other program areas, we're able to address the social determinants of health and create more comprehensive, sustainable solutions.
          </p>
        </>
      ),
      icon: <Heart className="text-aicwa-orange" size={24} />,
      coverImage: 'https://media.istockphoto.com/id/1158716425/photo/baby-gets-heart-rate-checked-by-pediatrician-at-medical-appointment.jpg?s=612x612&w=0&k=20&c=JuFVbeh5I-u5xO-AtqNT2ezpg_xPUMgx2ZvKhMlRMNs=',
      stats: [
        { figure: '200+', description: 'Health camps conducted' },
        { figure: '50,000+', description: 'Patients treated' },
        { figure: '1,000+', description: 'Healthcare workers trained' },
        { figure: '100+', description: 'Villages with improved healthcare access' },
      ],
      programs: [
        {
          title: 'Mobile Health Clinics',
          description: 'Our mobile clinics bring essential healthcare services to remote and underserved communities.',
        },
        {
          title: 'Maternal and Child Health',
          description: 'We provide prenatal care, nutrition support, and pediatric services to mothers and children.',
        },
        {
          title: 'Health Education',
          description: 'Our workshops and campaigns promote preventive care and healthy living practices.',
        },
        {
          title: 'Elder Care',
          description: 'We address the unique health needs of the elderly through specialized services and support.',
        },
      ],
    },
    'education': {
      title: 'Education Programs',
      description: 'Empowering through knowledge with educational initiatives for all ages',
      longDescription: (
        <>
          <p className="mb-4">
            Education is the cornerstone of personal and community development. AICWA's education programs aim to provide quality learning opportunities for all, regardless of age, gender, or socioeconomic status.
          </p>
          <p className="mb-4">
            We believe in a holistic approach to education that goes beyond academic knowledge to include life skills, values, and practical abilities. Our programs address barriers to education such as poverty, gender discrimination, and lack of infrastructure.
          </p>
          <p>
            By empowering individuals through education, we help create a foundation for sustainable development and improved quality of life across generations.
          </p>
        </>
      ),
      icon: <GraduationCap className="text-aicwa-orange" size={24} />,
      coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920',
      stats: [
        { figure: '50,000+', description: 'Children supported in education' },
        { figure: '500+', description: 'Schools partnered with' },
        { figure: '5,000+', description: 'Adult literacy program participants' },
        { figure: '2,000+', description: 'Teachers trained' },
      ],
      programs: [
        {
          title: 'Early Childhood Education',
          description: 'We provide foundational learning experiences for young children to prepare them for formal schooling.',
        },
        {
          title: 'School Support Programs',
          description: 'We work with existing schools to improve infrastructure, teacher training, and learning resources.',
        },
        {
          title: 'Adult Literacy',
          description: 'Our adult education programs help those who missed formal schooling gain essential literacy and numeracy skills.',
        },
        {
          title: 'Scholarship Programs',
          description: 'We provide financial support to promising students from underprivileged backgrounds to continue their education.',
        },
      ],
    },
    'child-welfare': {
      title: 'Child Welfare',
      description: 'Supporting children with nutrition, education, and safety programs',
      longDescription: (
        <>
          <p className="mb-4">
            Children are the future of our society, yet many face serious challenges that threaten their well-being and development. AICWA's child welfare programs aim to create safe, nurturing environments where children can thrive.
          </p>
          <p className="mb-4">
            Our approach to child welfare is comprehensive, addressing physical needs like nutrition and healthcare, educational needs, and emotional and social development. We work to strengthen family systems and community structures that support children.
          </p>
          <p>
            Through our child welfare initiatives, we strive to give every child the opportunity to reach their full potential and break cycles of disadvantage.
          </p>
        </>
      ),
      icon: <BookOpen className="text-aicwa-orange" size={24} />,
      coverImage: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920',
      stats: [
        { figure: '30,000+', description: 'Children in nutrition programs' },
        { figure: '5,000+', description: 'Children rescued from labor' },
        { figure: '300+', description: 'Child protection committees formed' },
        { figure: '10,000+', description: 'Children in after-school programs' },
      ],
      programs: [
        {
          title: 'Child Nutrition',
          description: 'We provide nutritional support to ensure healthy development and learning ability.',
        },
        {
          title: 'Child Protection',
          description: 'We work to prevent child labor, trafficking, and abuse through community vigilance and intervention.',
        },
        {
          title: 'After-School Programs',
          description: 'Our programs provide safe, enriching environments for children during out-of-school hours.',
        },
        {
          title: 'Family Strengthening',
          description: 'We support families to better care for their children through parenting education and economic support.',
        },
      ],
    },
    'old-age': {
      title: 'Old Age Support',
      description: 'Caring for the elderly through companionship and assistance programs',
      longDescription: (
        <>
          <p className="mb-4">
            As India's population ages, ensuring dignity, care, and inclusion for the elderly becomes increasingly important. AICWA's old age support programs aim to address the unique needs of older adults in our communities.
          </p>
          <p className="mb-4">
            Our approach combines direct services such as healthcare and daily living assistance with efforts to combat social isolation and promote elder participation in community life. We also work to raise awareness about elder rights and needs.
          </p>
          <p>
            Through our elderly support initiatives, we honor the contributions of older generations while ensuring they continue to lead fulfilling lives as valued community members.
          </p>
        </>
      ),
      icon: <UserRound className="text-aicwa-orange" size={24} />,
      coverImage: 'https://media.istockphoto.com/id/2156555376/photo/female-caregiver-and-senior-woman-with-walker-on-walk-in-nature-nurse-and-elderly-woman.jpg?s=612x612&w=0&k=20&c=0AXArahrYWNymGXkYw8qGeekBI7BWQ6_QJolIoFqXQ0=',
      stats: [
        { figure: '15,000+', description: 'Elderly individuals supported' },
        { figure: '50+', description: 'Elder care centers established' },
        { figure: '2,000+', description: 'Home care visits monthly' },
        { figure: '500+', description: 'Elder support groups formed' },
      ],
      programs: [
        {
          title: 'Elder Health Services',
          description: 'We provide specialized healthcare services tailored to the needs of the elderly.',
        },
        {
          title: 'Companionship Programs',
          description: 'Our volunteers provide regular visits and social interaction to combat isolation.',
        },
        {
          title: 'Daily Living Assistance',
          description: 'We help with everyday tasks that become challenging with age.',
        },
        {
          title: 'Elder Rights Advocacy',
          description: 'We work to raise awareness about elder rights and combat elder abuse.',
        },
      ],
    },
    'humanity': {
      title: 'Humanity Awareness',
      description: 'Promoting awareness, compassion, and action on humanitarian issues',
      longDescription: (
        <>
          <p className="mb-4">
            Creating a more just and compassionate society requires raising awareness about humanitarian issues and inspiring action. AICWA's humanity awareness programs aim to build understanding and promote positive social change.
          </p>
          <p className="mb-4">
            Our approach includes educational campaigns, community dialogues, and participatory initiatives that encourage empathy and respect for human dignity. We address issues such as discrimination, inequality, and the needs of marginalized groups.
          </p>
          <p>
            Through our humanity awareness work, we seek to nurture a culture of compassion and solidarity that supports all our other program areas and contributes to broader social transformation.
          </p>
        </>
      ),
      icon: <PartyPopper className="text-aicwa-orange" size={24} />,
      coverImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920',
      stats: [
        { figure: '100+', description: 'Awareness campaigns conducted' },
        { figure: '50,000+', description: 'Workshop participants' },
        { figure: '200+', description: 'Community events organized' },
        { figure: '20+', description: 'Research studies published' },
      ],
      programs: [
        {
          title: 'Public Education Campaigns',
          description: 'We raise awareness about important social issues through media, events, and outreach.',
        },
        {
          title: 'Community Dialogues',
          description: 'We facilitate conversations that bridge differences and promote understanding.',
        },
        {
          title: 'Youth Leadership',
          description: 'We empower young people to become advocates for positive social change.',
        },
        {
          title: 'Research and Advocacy',
          description: 'We conduct studies and advocate for policies that promote human dignity and rights.',
        },
      ],
    },
  };
  
  // Default to 'about' if category doesn't exist
  const currentCategory = impactCategories[category || 'about'] || impactCategories['about'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title={currentCategory.title}
        subtitle={currentCategory.description}
        imageSrc={currentCategory.coverImage}
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <div className="prose max-w-none text-aicwa-gray">
                {currentCategory.longDescription}
              </div>
              
              {/* New Image Gallery Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category === 'health' && (
                  <>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800"
                        alt="Mobile Health Camp"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Mobile Health Camps</h4>
                        <p className="text-gray-200 text-sm">Bringing healthcare to remote communities</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://media.istockphoto.com/id/1468267123/photo/adult-woman-chemotherapy-patient-finishing-treatment-with-a-ceremonial-bell-ring.webp?a=1&b=1&s=612x612&w=0&k=20&c=8PiwfBcwrq5oXPJL7bOurY3mzsHk-nn1R-T1SXljmRc="
                        alt="Medical Consultation"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Medical Consultations</h4>
                        <p className="text-gray-200 text-sm">Expert care for all</p>
                      </div>
                    </div>
                  </>
                )}
                
                {category === 'education' && (
                  <>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800"
                        alt="Classroom Learning"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Quality Education</h4>
                        <p className="text-gray-200 text-sm">Empowering through knowledge</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800"
                        alt="Digital Learning"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Digital Education</h4>
                        <p className="text-gray-200 text-sm">Modern learning tools</p>
                      </div>
                    </div>
                  </>
                )}

                {category === 'child-welfare' && (
                  <>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800"
                        alt="Child Education"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Child Education</h4>
                        <p className="text-gray-200 text-sm">Building bright futures</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800"
                        alt="Child Care"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Child Care Programs</h4>
                        <p className="text-gray-200 text-sm">Nurturing young lives</p>
                      </div>
                    </div>
                  </>
                )}

                {category === 'old-age' && (
                  <>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://media.istockphoto.com/id/1389973541/photo/volunteers-packing-at-a-local-food-bank.webp?a=1&b=1&s=612x612&w=0&k=20&c=ch86_IEEOzJa8yleOMN9YuDh82zkHHd-QqALmESGIqs="
                        alt="Elder Care"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Elder Care Services</h4>
                        <p className="text-gray-200 text-sm">Dignified aging support</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://media.istockphoto.com/id/2156555376/photo/female-caregiver-and-senior-woman-with-walker-on-walk-in-nature-nurse-and-elderly-woman.jpg?s=612x612&w=0&k=20&c=0AXArahrYWNymGXkYw8qGeekBI7BWQ6_QJolIoFqXQ0="
                        alt="Social Activities"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Social Activities</h4>
                        <p className="text-gray-200 text-sm">Active community engagement</p>
                      </div>
                    </div>
                  </>
                )}

                {category === 'humanity' && (
                  <>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800"
                        alt="Community Awareness"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Community Awareness</h4>
                        <p className="text-gray-200 text-sm">Spreading knowledge and compassion</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
                        alt="Youth Empowerment"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h4 className="text-white font-semibold">Youth Empowerment</h4>
                        <p className="text-gray-200 text-sm">Building future leaders</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <SectionTitle
                title="Our Programs"
                subtitle="How we make a difference in this area"
                className="mt-16"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentCategory.programs.map((program, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md fade-in-up animate-delay-100">
                    <h3 className="text-xl font-bold text-aicwa-darkGray mb-3 flex items-center">
                      <CheckCircle2 className="text-aicwa-orange mr-2" size={20} />
                      {program.title}
                    </h3>
                    <p className="text-aicwa-gray">{program.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-aicwa-darkGray mb-6">Success Stories</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <blockquote className="text-aicwa-gray italic mb-4">
                    "The work AICWA is doing in our village has transformed our community. Children who never had access to education are now in school, health outcomes have improved dramatically, and there's a new sense of hope and possibility."
                  </blockquote>
                  <div className="text-aicwa-darkGray font-semibold">- Village Leader, Maharashtra</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-aicwa-darkGray mb-6">Impact Statistics</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {currentCategory.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-aicwa-orange mb-2">{stat.figure}</div>
                      <div className="text-sm text-aicwa-gray">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-aicwa-darkGray mb-4">Get Involved</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-aicwa-darkGray">Donate</h4>
                      <p className="text-sm text-aicwa-gray">Support our work financially</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-aicwa-darkGray">Volunteer</h4>
                      <p className="text-sm text-aicwa-gray">Join our team on the ground</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="text-aicwa-orange mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-aicwa-darkGray">Partner With Us</h4>
                      <p className="text-sm text-aicwa-gray">Collaborate on initiatives</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Support This Cause</Button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-aicwa-darkGray mb-4">Related Areas</h3>
                
                <div className="space-y-2">
                  {Object.entries(impactCategories)
                    .filter(([key]) => key !== category && key !== 'about')
                    .slice(0, 3)
                    .map(([key, area]) => (
                      <a 
                        key={key} 
                        href={`/impact/${key}`}
                        className="flex items-center p-3 bg-white rounded-md hover:shadow-md transition-shadow"
                      >
                        <div className="mr-3">{area.icon}</div>
                        <div className="text-aicwa-darkGray font-medium">{area.title}</div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ImpactDetails;
