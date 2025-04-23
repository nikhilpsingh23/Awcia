
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-aicwa-darkGray mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="text-lg text-aicwa-gray max-w-3xl">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
