
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'fade';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'slide-up',
  delay = 0,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    switch (animation) {
      case 'slide-up':
        return `animate-slide-in-up ${delayClass}`;
      case 'slide-left':
        return `animate-slide-in-left ${delayClass}`;
      case 'slide-right':
        return `animate-slide-in-right ${delayClass}`;
      case 'scale':
        return `animate-scale-in ${delayClass}`;
      case 'rotate':
        return `animate-rotate-in ${delayClass}`;
      case 'fade':
        return `animate-fade-in ${delayClass}`;
      default:
        return `animate-slide-in-up ${delayClass}`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
