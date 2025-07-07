
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'fade';
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
    
    const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};
    
    switch (animation) {
      case 'slide-up':
        return 'animate-slide-in-up';
      case 'slide-left':
        return 'animate-slide-in-left';
      case 'slide-right':
        return 'animate-slide-in-right';
      case 'scale':
        return 'animate-scale-in';
      case 'fade':
        return 'animate-fade-in';
      default:
        return 'animate-slide-in-up';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
