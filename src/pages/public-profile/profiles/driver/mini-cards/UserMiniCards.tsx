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
      label: 'Total Maintenance Times',
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
      label: 'Maintenance last month',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5.8252 8.375C5.8252 10.8603 7.83991 12.875 10.3252 12.875C12.8105 12.875 14.8252 10.8603 14.8252 8.375C14.8252 5.88972 12.8105 3.875 10.3252 3.875C7.83991 3.875 5.8252 5.88972 5.8252 8.375ZM17.0752 12.875C17.0752 14.739 18.5862 16.25 20.4502 16.25C22.3142 16.25 23.8252 14.739 23.8252 12.875C23.8252 11.011 22.3142 9.50001 20.4502 9.50001C18.5862 9.50001 17.0752 11.011 17.0752 12.875Z" fill="#5271FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3065 15.125C4.99485 15.125 0.636986 17.8548 0.200928 23.2241C0.177176 23.5166 0.736497 24.125 1.01864 24.125H19.6027C20.4478 24.125 20.461 23.4449 20.4478 23.225C20.1182 17.7048 15.6928 15.125 10.3065 15.125ZM20.0015 17.3757C21.4135 19.2558 22.2502 21.5927 22.2502 24.125H26.5882C27.1985 24.125 27.208 23.6149 27.1985 23.45C26.963 19.3551 23.8339 17.4176 20.0015 17.3757Z" fill="#5271FF"/>
</svg>
`
    },
    {
      value: '25',
      label: 'Under maintenance',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.0249 8.375C6.0249 10.8603 8.03962 12.875 10.5249 12.875C13.0102 12.875 15.0249 10.8603 15.0249 8.375C15.0249 5.88972 13.0102 3.875 10.5249 3.875C8.03962 3.875 6.0249 5.88972 6.0249 8.375ZM17.2749 12.875C17.2749 14.739 18.7859 16.25 20.6499 16.25C22.5139 16.25 24.0249 14.739 24.0249 12.875C24.0249 11.011 22.5139 9.50001 20.6499 9.50001C18.7859 9.50001 17.2749 11.011 17.2749 12.875Z" fill="#1BC5BD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5062 15.125C5.19455 15.125 0.836693 17.8548 0.400635 23.2241C0.376883 23.5166 0.936204 24.125 1.21834 24.125H19.8024C20.6476 24.125 20.6607 23.4449 20.6476 23.225C20.3179 17.7048 15.8925 15.125 10.5062 15.125ZM20.2012 17.3757C21.6132 19.2558 22.4499 21.5927 22.4499 24.125H26.7879C27.3982 24.125 27.4077 23.6149 27.3982 23.45C27.1627 19.3551 24.0336 17.4176 20.2012 17.3757Z" fill="#1BC5BD"/>
</svg>

`
    },
    {
      value: '5',
      label: 'Unspecific Status',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.2251 8.375C6.2251 10.8603 8.23982 12.875 10.7251 12.875C13.2104 12.875 15.2251 10.8603 15.2251 8.375C15.2251 5.88972 13.2104 3.875 10.7251 3.875C8.23982 3.875 6.2251 5.88972 6.2251 8.375ZM17.4751 12.875C17.4751 14.739 18.9861 16.25 20.8501 16.25C22.7141 16.25 24.2251 14.739 24.2251 12.875C24.2251 11.011 22.7141 9.50001 20.8501 9.50001C18.9861 9.50001 17.4751 11.011 17.4751 12.875Z" fill="#FF0000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7064 15.125C5.39475 15.125 1.03689 17.8548 0.600831 23.2241C0.577078 23.5166 1.1364 24.125 1.41854 24.125H20.0026C20.8478 24.125 20.8609 23.4449 20.8478 23.225C20.5181 17.7048 16.0927 15.125 10.7064 15.125ZM20.4014 17.3757C21.8134 19.2558 22.6501 21.5927 22.6501 24.125H26.9881C27.5984 24.125 27.6079 23.6149 27.5984 23.45C27.3629 19.3551 24.2338 17.4176 20.4014 17.3757Z" fill="#FF0000"/>
</svg>
`
    },
    {
      value: '0',
      label: 'Pending',
      color: 'text-gray-900',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.4248 8.375C6.4248 10.8603 8.43952 12.875 10.9248 12.875C13.4101 12.875 15.4248 10.8603 15.4248 8.375C15.4248 5.88972 13.4101 3.875 10.9248 3.875C8.43952 3.875 6.4248 5.88972 6.4248 8.375ZM17.6748 12.875C17.6748 14.739 19.1858 16.25 21.0498 16.25C22.9138 16.25 24.4248 14.739 24.4248 12.875C24.4248 11.011 22.9138 9.50001 21.0498 9.50001C19.1858 9.50001 17.6748 11.011 17.6748 12.875Z" fill="#FFA800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9061 15.125C5.59446 15.125 1.2366 17.8548 0.800538 23.2241C0.776785 23.5166 1.33611 24.125 1.61824 24.125H20.2023C21.0475 24.125 21.0606 23.4449 21.0475 23.225C20.7178 17.7048 16.2924 15.125 10.9061 15.125ZM20.6011 17.3757C22.0131 19.2558 22.8498 21.5927 22.8498 24.125H27.1878C27.7981 24.125 27.8076 23.6149 27.7981 23.45C27.5626 19.3551 24.4335 17.4176 20.6011 17.3757Z" fill="#FFA800"/>
</svg>
`
    }
  ];

  return (
    <Fragment>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm ml-auto">
        New Maintenance
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
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
