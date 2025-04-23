
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ImpactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  link: string;
  delay?: string;
}

const ImpactCard = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  link,
  delay = 'animate-delay-100',
}: ImpactCardProps) => {
  return (
    <Link 
      to={link} 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group fade-in-up",
        delay
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Icon className="mr-2 text-aicwa-orange" size={24} />
            {title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-aicwa-gray">{description}</p>
      </div>
    </Link>
  );
};

export default ImpactCard;
