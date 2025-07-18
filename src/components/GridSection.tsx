import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const impacts = [
  {
    title: "Health",
    image: "/images/health-home.jpg",
    description:
      "The Health Department of AICWA Foundation is committed to the physical and mental well-being of every film industry worker — from lightmen, spot boys, and make-up artists to stuntmen, sound engineers, and backstage crew.Special attention is given to elderly workers who have spent decades contributing to Indian cinema but now face severe health challenges without proper treatment or financial support. These unsung heroes often slip through the cracks of the healthcare system. We aim to give them the care they deserve.",
    bg: "bg-[#f1f1d4]",
    align: "left",
  },
  {
    title: "Education",
    image: "/images/education.JPG",
    description:
      "The AICWA Foundation recognizes that behind the glitz and glamour of the Indian film industry lies a massive, hardworking community of technicians, artists, and crew members. Their children often face limited access to quality education due to financial instability, long working hours of parents, and lack of support structures.We aim to break this cycle by ensuring that every child—especially those from film worker families—has the opportunity to learn, grow, and thrive academically and personally, whether in India or abroad.",
    bg: "bg-[#dbe4fa]",
    align: "right",
  },
  {
    title: "Rural Transformation",
    image: "/images/rural1.jpeg",
    description:
      "India’s rural communities remain the backbone of the nation, yet many live without access to the most basic needs—food, education, healthcare, dignity. While cities advance in the name of development and technology, rural India still walks barefoot in broken slippers, striving merely to survive.The President of AICWA Foundation, during visits to deeply underdeveloped villages, encountered heart-wrenching realities that demand urgent attention and sustained action.",
    bg: "bg-[#d8ebd9]",
    align: "left",
  },
  {
    title: "Women Empowerment",
    image: "/images/s8.png",
    description:
      "Indias women carry the weight of tradition, responsibility, and resilience. From the villages of rural India to the glittering yet dangerous world of the film industry, women across the country face exploitation, inequality, and silence. Whether they are farmers, mothers, artists, students, dancers, actors, or technicians, their challenges often go unseen—underpaid, unheard, and unprotected.The AICWA Foundation is committed to breaking this silence and building a nation where every woman can live, work, and speak with dignity and safety.",
    bg: "bg-[#f2d9dd]",
    align: "right",
  },
  {
    title: "Art , Culture & Heritage",
    image: "/images/art.png",
    description:
      "India’s cultural heritage is deeply woven into its cinema, music, fashion, theater, and performing arts. Yet, despite its global recognition, the backbone of the Indian creative industry—its artists and workers—often remain unrecognized, unsupported, and financially insecure. The AICWA Foundation believes that the time has come to transform the structure of India’s creative ecosystem—by investing not just in art, but in the people who create it.",
    bg: "bg-[#e9e9e9]",
    align: "left",
  },
];

const GridSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2]  px-4 md:px-8 py-10 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#303C69]">
      Pillars of Change
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
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-start">
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
