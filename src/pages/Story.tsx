
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';
import { Play, Calendar, MapPin } from 'lucide-react';

const Story = () => {
  const featuredStories = [
    {
      name: 'Priya Sharma',
      quote: 'AICWA\'s education program changed my life. I\'m now the first in my family to attend college and can build a better future for my community. The support I received not only helped me academically but also gave me the confidence to pursue my dreams.',
      imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600',
      category: 'Education',
      location: 'Bihar',
    },
    {
      name: 'Rahul Kumar',
      quote: 'The healthcare camp organized by AICWA in our village provided medical services to over 200 people who had never seen a doctor before. My grandmother received treatment for her chronic pain that she had endured for years. We are forever grateful for their intervention.',
      imageSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600',
      category: 'Health',
      location: 'Rajasthan',
    },
    {
      name: 'Sanjay Patel',
      quote: 'At 78, I felt forgotten. AICWA\'s elderly support program connected me with volunteers who visit weekly. Now I have friends who care about me, help me with daily tasks, and make me feel valued again. The community activities have given me a renewed sense of purpose.',
      imageSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600',
      category: 'Old Age Support',
      location: 'Gujarat',
    },
  ];
  
  const moreStories = [
    {
      name: 'Meera Singh',
      quote: 'My children now have access to quality education through AICWA\'s school support program. Their future looks brighter than I could have imagined. The after-school programs have especially helped them develop confidence and new skills.',
      imageSrc: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=600',
      category: 'Child Welfare',
      location: 'Uttar Pradesh',
    },
    {
      name: 'Arun Desai',
      quote: 'After losing my job, I was struggling to provide for my family. AICWA\'s skill development program helped me learn computer skills, and now I have a steady job at a local business. My children no longer have to go to bed hungry.',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600',
      category: 'Livelihood',
      location: 'Maharashtra',
    },
    {
      name: 'Lakshmi Naidu',
      quote: 'The awareness campaign about women\'s rights that AICWA conducted in our community has transformed how people think. Girls are now encouraged to stay in school, and families are more supportive of women\'s aspirations. I\'ve seen a real shift in attitudes.',
      imageSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600',
      category: 'Humanity Awareness',
      location: 'Tamil Nadu',
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title="Stories of Impact"
        subtitle="Real voices, real change - hear from the communities we serve"
        imageSrc="https://images.unsplash.com/photo-1560523159-4a9692d222f9?auto=format&fit=crop&w=1920"
      />

      {/* Video Stories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Video Stories"
            subtitle="Watch the impact of our work through the eyes of our beneficiaries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "A New Beginning",
                description: "Watch how education transformed Priya's life",
                thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800",
                duration: "4:30"
              },
              {
                title: "Healthcare for All",
                description: "Our medical camps reaching remote villages",
                thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
                duration: "3:45"
              },
              {
                title: "Elder Care Initiative",
                description: "Supporting our senior citizens with dignity",
                thumbnail: "https://images.unsplash.com/photo-1581579438747-104c53e81198?auto=format&fit=crop&w=800",
                duration: "5:15"
              }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-aicwa-orange ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
                <p className="text-aicwa-gray">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Featured Stories"
            subtitle="These personal accounts showcase the real impact of our work"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredStories.map((story, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <StoryCard
                  name={story.name}
                  quote={story.quote}
                  imageSrc={story.imageSrc}
                />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="bg-aicwa-orange/10 text-aicwa-orange px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-aicwa-gray">
                    {story.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-aicwa-darkGray mb-4">Share Your Story</h3>
                <p className="text-aicwa-gray mb-6">
                  Have you been impacted by AICWA's work? We'd love to hear and share your story. 
                  Your experience can inspire others and help us improve our programs.
                </p>
                <Button>Submit Your Story</Button>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600"
                  alt="Share your story"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
          
          <SectionTitle
            title="More Stories"
            subtitle="Explore more experiences from the communities we serve"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {moreStories.map((story, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <StoryCard
                  name={story.name}
                  quote={story.quote}
                  imageSrc={story.imageSrc}
                />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="bg-aicwa-orange/10 text-aicwa-orange px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-aicwa-gray">
                    {story.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">Load More Stories</Button>
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Journey Through Time"
            subtitle="Key moments in our mission to create lasting change"
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            {[
              {
                year: "2008",
                title: "Where it all began",
                description: "First literacy program launched in rural Bihar",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800"
              },
              {
                year: "2012",
                title: "Expanding Horizons",
                description: "Healthcare initiatives reach 50 villages",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
              },
              {
                year: "2015",
                title: "Major Milestone",
                description: "10,000 children supported through education programs",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800"
              }
            ].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-full md:w-1/3">
                  <div className="flex items-center gap-4">
                    <Calendar className="text-aicwa-orange" size={24} />
                    <span className="text-2xl font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
                  <p className="text-aicwa-gray mt-2">{event.description}</p>
                </div>
                <div className="w-full md:w-2/3">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Stories Across India"
            subtitle="Explore our impact across different regions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { region: "North India", stories: 156, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800" },
              { region: "South India", stories: 203, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800" },
              { region: "East India", stories: 178, image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800" },
              { region: "West India", stories: 167, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800" }
            ].map((region, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={region.image} 
                  alt={region.region}
                  className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                  <MapPin className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-semibold">{region.region}</h3>
                  <p>{region.stories} Stories</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <blockquote className="text-2xl font-medium text-aicwa-darkGray italic mb-6">
                  "The true measure of our impact is not in numbers, but in the transformed lives of the people we serve."
                </blockquote>
                <p className="text-aicwa-gray">
                  - Rajesh Singh, Executive Director
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-aicwa-gray mb-6">
                  Behind every statistic is a personal story of change. These stories remind us of the human impact of our work 
                  and inspire us to continue our mission with dedication and purpose.
                </p>
                <p className="text-aicwa-gray">
                  We are committed to listening to the communities we serve, learning from their experiences, 
                  and adapting our programs to better meet their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Story;
