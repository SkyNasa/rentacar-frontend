import React from 'react';

const Power: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.25"
        d="M2.25 2.6665C2.25 1.56193 3.14543 0.666504 4.25 0.666504H10.7549C11.2853 0.666504 11.794 0.877218 12.1691 1.25229L13.6642 2.74738C14.0393 3.12246 14.25 3.63116 14.25 4.1616V13.3332C14.25 14.4377 13.3546 15.3332 12.25 15.3332H4.25C3.14543 15.3332 2.25 14.4377 2.25 13.3332V2.6665Z"
        fill="#7E8299"
      />
      <path
        d="M10.25 1.26104C10.25 0.932687 10.5162 0.666504 10.8445 0.666504C11.3176 0.666504 11.7712 0.85442 12.1057 1.18891L13.7276 2.81076C14.0621 3.14526 14.25 3.59892 14.25 4.07197C14.25 4.40032 13.9838 4.6665 13.6555 4.6665H10.9167C10.5485 4.6665 10.25 4.36803 10.25 3.99984V1.26104Z"
        fill="#7E8299"
      />
      <path
        d="M8.50486 11.9494C8.58349 11.9169 8.65716 11.8687 8.72108 11.8047L10.7211 9.80474C10.9814 9.54439 10.9814 9.12228 10.7211 8.86193C10.4607 8.60158 10.0386 8.60158 9.77827 8.86193L8.91634 9.72386V6.66667C8.91634 6.29848 8.61786 6 8.24967 6C7.88148 6 7.58301 6.29848 7.58301 6.66667V9.72386L6.72108 8.86193C6.46073 8.60158 6.03862 8.60158 5.77827 8.86193C5.51792 9.12228 5.51792 9.54439 5.77827 9.80474L7.77827 11.8047C7.9747 12.0012 8.26322 12.0494 8.50486 11.9494Z"
        fill="#7E8299"
      />
    </svg>
  );
};

export default Power;