import React from 'react';

interface IconProps {
  className?: string;
}

const LogsIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2454 20.3952V11.2013C10.2454 8.75576 12.3651 6.6044 14.7747 6.6044H20.9256C20.5179 5.57468 19.4852 4.76562 18.3982 4.76562H6.6219C5.22687 4.76562 3.9043 6.10793 3.9043 7.52378V16.7176C3.9043 18.0508 5.07287 19.3103 6.36826 19.4574L5.74321 22.0041C5.53486 22.8591 6.52226 23.4935 7.18354 22.9419L10.2454 20.4503C10.2454 20.4503 10.2454 20.4044 10.2454 20.386V20.3952Z" fill="#A1A5B7"/>
<path d="M26.9818 8.16992H14.8698C13.435 8.16992 12.0747 9.51184 12.0747 10.9273V20.1185C12.0747 21.534 13.435 22.8759 14.8698 22.8759H21.9972L26.4041 26.3502C27.0936 26.8925 28.1091 26.2674 27.8855 25.4127L27.2426 22.8667C28.5843 22.7196 29.7768 21.4512 29.7768 20.1277V10.9273C29.7768 9.51184 28.4166 8.16992 26.9818 8.16992Z" fill="#A1A5B7"/>
</svg>

  );
};

export default LogsIcon;