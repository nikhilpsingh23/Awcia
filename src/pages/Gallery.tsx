
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'health', name: 'Health' },
    { id: 'education', name: 'Education' },
    { id: 'Rural Transformation', name: 'Child Welfare' },
    { id: 'Women Empowerment', name: 'Old Age Support' },
    { id: 'Art,Culture & Heritage', name: 'Humanity Awareness' },
  ];
  
  const galleryImages = [
    {
      id: 1,
      src: '/images/1.JPG',
      alt: 'Children smiling',
      category: 'child-welfare',
      title: 'Happy Faces Program',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
      alt: 'Health camp',
      category: 'health',
      title: 'Rural Health Initiative',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800',
      alt: 'Education session',
      category: 'education',
      title: 'Literacy Program',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800',
      alt: 'Child welfare program',
      category: 'child-welfare',
      title: 'Safe Spaces Initiative',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=800',
      alt: 'Elderly support',
      category: 'old-age',
      title: 'Elder Care Program',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800',
      alt: 'Humanity awareness',
      category: 'humanity',
      title: 'Community Dialogue',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800',
      alt: 'Team meeting',
      category: 'events',
      title: 'Annual Strategy Meeting',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
      alt: 'Children playing',
      category: 'child-welfare',
      title: 'Play & Learn Initiative',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800',
      alt: 'Volunteers',
      category: 'events',
      title: 'Volunteer Appreciation Day',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
      alt: 'Education session',
      category: 'education',
      title: 'Digital Skills Workshop',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800',
      alt: 'Health check-up',
      category: 'health',
      title: 'Preventive Health Camp',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=800',
      alt: 'Elderly group',
      category: 'old-age',
      title: 'Senior Social Club',
    },
  ];
  
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
  <img
    src="/images/gallery-cover.jpg"
    alt="gallery Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact With Us</h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
      Join our mission to create positive change and make a lasting impact in the lives of those who need it most.
    </p>
  </div>

  {/* Left-aligned floating breadcrumb (half overlay) */}
  <div className="absolute -bottom-6 left-6 z-20">
    <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
      <a href="/" className="hover:underline">Home</a>
      <span className="text-[#4b2d0c] font-bold">›</span>
      <span>Gallery</span>
    </div>
  </div>
</section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Impact in Pictures"
            subtitle="Browse through the visual story of our work across different impact areas"
            centered
          />
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  selectedCategory === category.id
                    ? 'bg-aicwa-orange text-white'
                    : 'bg-gray-100 text-aicwa-darkGray hover:bg-gray-200'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md fade-in group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm text-white/80">{categories.find(c => c.id === image.category)?.name}</p>
                    </div>
                  </div>
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

export default Gallery;
