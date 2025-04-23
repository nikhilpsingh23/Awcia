
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  className?: string;
}

const PageHeader = ({
  title,
  subtitle,
  imageSrc,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn(
      'relative h-[40vh] min-h-[300px] flex items-center justify-center',
      className
    )}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative text-center max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
