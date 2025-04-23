
import { cn } from '@/lib/utils';

interface StoryCardProps {
  name: string;
  quote: string;
  imageSrc: string;
  className?: string;
}

const StoryCard = ({ name, quote, imageSrc, className }: StoryCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center h-full",
      className
    )}>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-aicwa-orange/20">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <blockquote className="text-aicwa-gray italic mb-4 text-pretty">
          "{quote}"
        </blockquote>
        <div className="text-aicwa-darkGray font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default StoryCard;
