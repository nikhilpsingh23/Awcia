
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
    { id: 'Rural Transformation', name: 'Rural Transformation' },
    { id: 'Women Empowerment', name: 'Women Empowerment' },
    { id: 'Art,Culture & Heritage', name: 'Art,Culture & Heritage' },
  ];
  
  const galleryImages = [
    {
      id: 1,
      src: '/images/1.JPG',
      category: 'Women Empowerment',
    },
    {
      id: 2,
      src: '/images/health-home.jpg',
      category: 'health',
    },
    {
      id: 3,
      src: '/images/women.jpeg',
      category: 'Women Empowerment',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800',
     category: 'education',
    },
    {
      id: 5,
      src: '/images/art.png',
      category: 'Art,Culture & Heritage',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800',
      category: 'humanity',
      
    },
    {
      id: 7,
      src: '/images/1-home.HEIC',
      category: 'Art,Culture & Heritage',
      
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
      category: 'education',
    },
    {
      id: 9,
      src: '/images/rural.jpg',
      category: 'Rural Transformation',
    },
    {
      id: 10,
      src: '/images/story-cover.png',
      category: 'women empowerment',
    },
    {
      id: 11,
      src: '/images/M3.jpg',
      category: 'Women Empowerment',
    },
    {
      id: 12,
      src: '/images/2.HEIC',
      category: 'old-age',
    },
  ];
  
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative h-[70vh] min-h-[650px] flex items-center justify-center">
  <img
    src="/images/gallery-cover1.jpeg"
    alt="gallery Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />
  

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
                    
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      
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
