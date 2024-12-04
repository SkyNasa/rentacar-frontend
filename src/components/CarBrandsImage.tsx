import { toAbsoluteUrl } from '@/utils/Assets';
import React from 'react';


interface CarBrandProps {
  brandName: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const CarBrandImage = ({ 
  brandName, 
  size = 'medium',
  className = ''
}: CarBrandProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/api/placeholder/48/48';
  };

  return (
    <div className={`inline-block ${className}`}>
      <img 
        src={toAbsoluteUrl('/media/car-brands/toyota.png')}
        onError={handleImageError}
        alt={`${brandName} logo`}
        className={`${sizeClasses[size]} rounded-full bg-gray-50 object-cover`}
      />
    </div>
  );
};

export default CarBrandImage;