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
      label: 'Total Customers',
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
      label: 'Turkish Customer',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5.6748 8.375C5.6748 10.8603 7.68952 12.875 10.1748 12.875C12.6601 12.875 14.6748 10.8603 14.6748 8.375C14.6748 5.88972 12.6601 3.875 10.1748 3.875C7.68952 3.875 5.6748 5.88972 5.6748 8.375ZM16.9248 12.875C16.9248 14.739 18.4358 16.25 20.2998 16.25C22.1638 16.25 23.6748 14.739 23.6748 12.875C23.6748 11.011 22.1638 9.50001 20.2998 9.50001C18.4358 9.50001 16.9248 11.011 16.9248 12.875Z" fill="#1BC5BD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1561 15.125C4.84446 15.125 0.486596 17.8548 0.0505378 23.2241C0.0267852 23.5166 0.586106 24.125 0.868245 24.125H19.4523C20.2975 24.125 20.3106 23.4449 20.2975 23.225C19.9678 17.7048 15.5424 15.125 10.1561 15.125ZM19.8511 17.3757C21.2631 19.2558 22.0998 21.5927 22.0998 24.125H26.4378C27.0481 24.125 27.0576 23.6149 27.0481 23.45C26.8126 19.3551 23.6835 17.4176 19.8511 17.3757Z" fill="#1BC5BD"/>
</svg>
`
    },
    {
      value: '25',
      label: 'Foreign Customer',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5.7251 8.375C5.7251 10.8603 7.73982 12.875 10.2251 12.875C12.7104 12.875 14.7251 10.8603 14.7251 8.375C14.7251 5.88972 12.7104 3.875 10.2251 3.875C7.73982 3.875 5.7251 5.88972 5.7251 8.375ZM16.9751 12.875C16.9751 14.739 18.4861 16.25 20.3501 16.25C22.2141 16.25 23.7251 14.739 23.7251 12.875C23.7251 11.011 22.2141 9.50001 20.3501 9.50001C18.4861 9.50001 16.9751 11.011 16.9751 12.875Z" fill="#FF0000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2064 15.125C4.89475 15.125 0.536888 17.8548 0.100831 23.2241C0.0770782 23.5166 0.636399 24.125 0.918538 24.125H19.5026C20.3478 24.125 20.3609 23.4449 20.3478 23.225C20.0181 17.7048 15.5927 15.125 10.2064 15.125ZM19.9014 17.3757C21.3134 19.2558 22.1501 21.5927 22.1501 24.125H26.4881C27.0984 24.125 27.1079 23.6149 27.0984 23.45C26.8629 19.3551 23.7338 17.4176 19.9014 17.3757Z" fill="#FF0000"/>
</svg>
`
    },
    {
      value: '5',
      label: 'Company',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.375 8.375C6.375 10.8603 8.38972 12.875 10.875 12.875C13.3603 12.875 15.375 10.8603 15.375 8.375C15.375 5.88972 13.3603 3.875 10.875 3.875C8.38972 3.875 6.375 5.88972 6.375 8.375ZM17.625 12.875C17.625 14.739 19.136 16.25 21 16.25C22.864 16.25 24.375 14.739 24.375 12.875C24.375 11.011 22.864 9.50001 21 9.50001C19.136 9.50001 17.625 11.011 17.625 12.875Z" fill="#FFA800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8563 15.125C5.54465 15.125 1.18679 17.8548 0.750733 23.2241C0.726981 23.5166 1.2863 24.125 1.56844 24.125H20.1525C20.9977 24.125 21.0108 23.4449 20.9977 23.225C20.668 17.7048 16.2426 15.125 10.8563 15.125ZM20.5513 17.3757C21.9633 19.2558 22.8 21.5927 22.8 24.125H27.138C27.7483 24.125 27.7578 23.6149 27.7483 23.45C27.5128 19.3551 24.3837 17.4176 20.5513 17.3757Z" fill="#FFA800"/>
</svg>

`
    },
  
  ];

  return (
    <Fragment>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm ml-auto">
        New Customer
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
