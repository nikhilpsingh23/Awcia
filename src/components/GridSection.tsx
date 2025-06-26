import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

interface GridItem {
  title: string;
  imageUrl: string;
  link: string;
}

const GridSection = () => {
  const navigate = useNavigate();

  const gridItems: GridItem[] = [
    {
      title: "Health",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
      link: "/impact/health",
    },
    {
      title: "Education",
      imageUrl: "/images/education.JPG",
      link: "/impact/education",
    },
    {
      title: "Rural transformation",
      imageUrl: "https://images.unsplash.com/photo-1707811180272-53a54a905d14?w=500",
      link: "/impact/child-welfare",
    },
    {
      title: "Women Empowerment",
      imageUrl: "/images/women.jpeg",
      link: "/impact/old-age",
    },
    {
      title: "Art, Culture & Heritage",
      imageUrl: "/images/earth.jpg",
      link: "/impact/humanity",
    }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-[#e6e6e6]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Area Of Impacts
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[360px] border-2 border-yellow-400 animate-pulse border-opacity-70"
              onClick={() => navigate(item.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(item.link)}
              style={{
                boxShadow: '0 0 0 0 rgba(251,191,36, 0.5)',
                animation: 'borderGlow 2s ease-in-out infinite'
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="h-0.5 w-12 bg-white/50 my-2" />
                <FiArrowUpRight className="absolute bottom-4 right-4 text-xl text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation style */}
      <style>{`
        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(251,191,36, 0.4);
          }
          50% {
            box-shadow: 0 0 10px 4px rgba(251,191,36, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default GridSection;
