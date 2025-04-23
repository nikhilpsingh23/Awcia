
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';

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
      
      <section className="py-16 px-4 bg-gray-50">
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
