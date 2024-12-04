import { CardProps } from '@mui/material';
import React, { Fragment } from 'react';
interface IMetricCard {
  value: string | number;
  label: string;
  color: string;
  iconColor?: string;
  bgColor?: string;
  icon?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const UserMiniCards = () => {
  const metrics: IMetricCard[] = [
    {
      value: '250',
      label: 'Total Vehicles',
      color: 'text-white',
      bgColor: 'bg-blue-500',
      icon: `
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.833496" y="0.833008" width="10.2083" height="10.2083" rx="1.5" fill="white" />
          <rect
            x="14.042"
            y="0.833008"
            width="10.2083"
            height="10.2083"
            rx="1.5"
            fill="#DADADA"
            fillOpacity="0.52"
          />
          <path
            opacity="0.3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.3335 14.041C1.50507 14.041 0.833496 14.7126 0.833496 15.541V22.7493C0.833496 23.5778 1.50507 24.2493 2.3335 24.2493H9.61473C10.4432 24.2493 11.1147 23.5778 11.1147 22.7493V15.541C11.1147 14.7126 10.4432 14.041 9.61473 14.041H2.3335ZM15.5522 14.041C14.7238 14.041 14.0522 14.7126 14.0522 15.541V22.7493C14.0522 23.5778 14.7238 24.2493 15.5522 24.2493H22.8335C23.6619 24.2493 24.3335 23.5778 24.3335 22.7493V15.541C24.3335 14.7126 23.6619 14.041 22.8335 14.041H15.5522Z"
            fill="white"
          />
        </svg>
      `
    },
    {
      value: '5',
      label: 'Rented Vehicles',
      color: 'text-gray-900',
      icon: `
<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5.875 7.875C5.875 10.3603 7.88972 12.375 10.375 12.375C12.8603 12.375 14.875 10.3603 14.875 7.875C14.875 5.38972 12.8603 3.375 10.375 3.375C7.88972 3.375 5.875 5.38972 5.875 7.875ZM17.125 12.375C17.125 14.239 18.636 15.75 20.5 15.75C22.364 15.75 23.875 14.239 23.875 12.375C23.875 10.511 22.364 9.00001 20.5 9.00001C18.636 9.00001 17.125 10.511 17.125 12.375Z" fill="#FF0000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3563 14.625C5.04465 14.625 0.686791 17.3548 0.250733 22.7241C0.226981 23.0166 0.786301 23.625 1.06844 23.625H19.6525C20.4977 23.625 20.5108 22.9449 20.4977 22.725C20.168 17.2048 15.7426 14.625 10.3563 14.625ZM20.0513 16.8757C21.4633 18.7558 22.3 21.0927 22.3 23.625H26.638C27.2483 23.625 27.2578 23.1149 27.2483 22.95C27.0128 18.8551 23.8837 16.9176 20.0513 16.8757Z" fill="#FF0000"/>
</svg>
`
    },
    {
      value: '25',
      label: 'Vehicles in maintenance',
      color: 'text-gray-900',
      icon: `<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.125 7.875C6.125 10.3603 8.13972 12.375 10.625 12.375C13.1103 12.375 15.125 10.3603 15.125 7.875C15.125 5.38972 13.1103 3.375 10.625 3.375C8.13972 3.375 6.125 5.38972 6.125 7.875ZM17.375 12.375C17.375 14.239 18.886 15.75 20.75 15.75C22.614 15.75 24.125 14.239 24.125 12.375C24.125 10.511 22.614 9.00001 20.75 9.00001C18.886 9.00001 17.375 10.511 17.375 12.375Z" fill="#FFA800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6063 14.625C5.29465 14.625 0.936791 17.3548 0.500733 22.7241C0.476981 23.0166 1.0363 23.625 1.31844 23.625H19.9025C20.7477 23.625 20.7608 22.9449 20.7477 22.725C20.418 17.2048 15.9926 14.625 10.6063 14.625ZM20.3013 16.8757C21.7133 18.7558 22.55 21.0927 22.55 23.625H26.888C27.4983 23.625 27.5078 23.1149 27.4983 22.95C27.2628 18.8551 24.1337 16.9176 20.3013 16.8757Z" fill="#FFA800"/>
</svg>



`
    },
    {
      value: '5',
      label: 'Available For Rent',
      color: 'text-gray-900',
      icon: `<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.375 7.875C6.375 10.3603 8.38972 12.375 10.875 12.375C13.3603 12.375 15.375 10.3603 15.375 7.875C15.375 5.38972 13.3603 3.375 10.875 3.375C8.38972 3.375 6.375 5.38972 6.375 7.875ZM17.625 12.375C17.625 14.239 19.136 15.75 21 15.75C22.864 15.75 24.375 14.239 24.375 12.375C24.375 10.511 22.864 9.00001 21 9.00001C19.136 9.00001 17.625 10.511 17.625 12.375Z" fill="#5271FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8563 14.625C5.54465 14.625 1.18679 17.3548 0.750733 22.7241C0.726981 23.0166 1.2863 23.625 1.56844 23.625H20.1525C20.9977 23.625 21.0108 22.9449 20.9977 22.725C20.668 17.2048 16.2426 14.625 10.8563 14.625ZM20.5513 16.8757C21.9633 18.7558 22.8 21.0927 22.8 23.625H27.138C27.7483 23.625 27.7578 23.1149 27.7483 22.95C27.5128 18.8551 24.3837 16.9176 20.5513 16.8757Z" fill="#5271FF"/>
</svg>


`
    },
  
  ];

  return (
    <Fragment>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm ml-auto">
        New Maintenance
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className={`rounded-xl flex flex-col items-start ${metric.bgColor || 'bg-white'} ${
              index === 0 ? 'shadow-lg' : 'shadow-sm'
            }`}
          >
            <div
              className={`w-4 h-4 p-4 ${index === 0 ? 'text-white' : metric.iconColor}`}
              dangerouslySetInnerHTML={{ __html: metric.icon?.toString() || '' }}
            />
            <div className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${index === 0 ? 'text-blue-100' : 'text-gray-400'}`}>
                    {metric.label}
                  </p>
                  <p className={`text-2xl font-semibold mt-1 ${metric.color}`}>{metric.value}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export { UserMiniCards };
