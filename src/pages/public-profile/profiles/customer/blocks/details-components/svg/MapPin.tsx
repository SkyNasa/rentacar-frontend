import React from 'react';

interface MapPinProps {
  width?: number;
  height?: number;
  circleColor?: string;
  strokeColor?: string;
  rectColor?: string;
}

const MapPin: React.FC<MapPinProps> = ({
  width = 13,
  height = 48,
  circleColor = 'none',
  strokeColor = '#FFA800',
  rectColor = '#E5EAEE',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.5" cy="6.5" r="5" fill={circleColor} stroke={strokeColor} strokeWidth="3" />
      <rect x="5" y="18" width="3" height="30" rx="1.5" fill={rectColor} />
    </svg>
  );
};

export default MapPin;
