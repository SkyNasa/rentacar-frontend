import { toAbsoluteUrl } from '@/utils/Assets';
import React from 'react';

const Car = () => {


  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Rotating circles background */}
      <div className="absolute inset-0 animate-spin duration-3000 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400 rounded-full" />
        <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-blue-300 rounded-full" />
        <div className="absolute top-8 left-8 right-8 bottom-8 border-4 border-blue-200 rounded-full" />
      </div>
      
      {/* Car shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
         src={toAbsoluteUrl('/media/images/car.png')}
         alt="Car top view"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Car;