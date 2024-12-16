import React from 'react';

interface ViolationsIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ViolationsIcon: React.FC<ViolationsIconProps> = ({
  className = '',
  size = 14,
  color = '#F64E60'
}) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 14 14" 
        fill="none" 
        className="transform transition-transform duration-200 hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_783_16683)">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M7 0C3.13403 0 0 3.13403 0 7C0 10.866 3.13403 14 7 14C10.866 14 14 10.866 14 7C14 3.13403 10.866 0 7 0ZM6.41667 3.5C6.41667 3.17624 6.67624 2.91667 7 2.91667C7.32376 2.91667 7.58333 3.17624 7.58333 3.5V7.58333C7.58333 7.90709 7.32376 8.16667 7 8.16667C6.67624 8.16667 6.41667 7.90709 6.41667 7.58333V3.5ZM7 9.91667C6.67624 9.91667 6.41667 10.1762 6.41667 10.5C6.41667 10.8238 6.67624 11.0833 7 11.0833H7.00583C7.32959 11.0833 7.58917 10.8238 7.58917 10.5C7.58917 10.1762 7.32959 9.91667 7.00583 9.91667H7Z" 
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_783_16683">
            <rect width="14" height="14" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ViolationsIcon;