import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const impacts = [
  {
    title: "Health",
    image: "/images/art.png",
    description:
      "AICWA is committed to supporting the health and well-being of cine workers across India by offering access to regular medical camps, health insurance support, mental wellness initiatives, and emergency assistance to those in need.",
    bg: "bg-[#f1f1d4]",
    align: "left",
  },
  {
    title: "Education",
    image: "/images/education.JPG",
    description:
      "We strive to provide educational opportunities for the children of cine workers and underprivileged communities through scholarships, mentorship programs, and partnerships with schools and training institutions.",
    bg: "bg-[#dbe4fa]",
    align: "right",
  },
  {
    title: "Rural Transformation",
    image: "https://images.unsplash.com/photo-1707811180272-53a54a905d14?w=800",
    description:
      "Through skill development programs, financial aid, and infrastructure support, AICWA empowers rural artisans and laborers associated with the film industry to lead dignified and sustainable lives.",
    bg: "bg-[#d8ebd9]",
    align: "left",
  },
  {
    title: "Women Empowerment",
    image: "/images/s8.png",
    description:
      "We promote equal opportunities for women in the film industry by providing training, financial support, legal aid, and a safe working environment for female cine workers and artists.",
    bg: "bg-[#f2d9dd]",
    align: "right",
  },
  {
    title: "Art , Culture & Heritage",
    image: "/images/art.jpg",
    description:
      "AICWA celebrates and preserves India’s diverse art forms and cultural heritage through film festivals, heritage projects, and by honoring the contributions of traditional artists and filmmakers.",
    bg: "bg-[#e9e9e9]",
    align: "left",
  },
];

const GridSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:px-8 py-10 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Area Of Impacts
      </h2>
      <div className="space-y-4 max-w-[1400px] mx-auto">
        {impacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            } rounded-xl overflow-hidden shadow-xl ${item.bg} min-h-[400px] md:min-h-[500px]`}
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
