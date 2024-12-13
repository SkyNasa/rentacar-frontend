import { Paginated } from '@/api/common';
import { useEffect, useState } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { CustomerDetails, getCustomers } from '@/api/customer';
import { StatusDropdown, StatusDropdownProps } from './StatusDropdown';
import React from 'react';

const DriverList = () => {
  const [customers, setCustomers] = useState<Paginated<CustomerDetails>>();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const options: StatusDropdownProps['options'] = {
    'Under Review': {
      color: '#FFA800',
      backgroundColor: '#FFF8EA'
    },
    Active: {
      color: '#50CD89',
      backgroundColor: '#EEFAF4'
    }
  };

  return (
    <div className="card">
    
  
    <div className="card-body scrollable-x pt-2 px-6 pb-7">
      {/* Updated Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {customers?.data.map((customer) => (
          <div
            key={customer.customer.email}
            className="flex flex-col rounded-2xl border border-[#E7E8ED] overflow-hidden shadow-md"
          >
            <div
              className="h-1 w-full"
              style={{ backgroundColor: options[customer.state].color }}
            />
            <div className="flex flex-col gap-3 px-8 py-6">
              <div className="flex justify-between items-center">
                <img
                  src={customer.customer.avatar}
                  alt={customer.customer.name}
                  className="size-12 rounded-[4px]"
                />
                <StatusDropdown
                  selected={customer.state}
                  setSelected={() => {}}
                  options={options}
                />
              </div>
              <div className="text-[#3F4254] font-bold text-[22px]">
                {customer.customer.name}
              </div>
              <div className="text-[#B5B5C3] font-medium">
                {customer.nationality}
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-medium text-sm text-[#B5B5C3] text-nowrap">
                <div className="flex gap-1 w-36">
                  <img src={toAbsoluteUrl('/media/icons/email.svg')} />
                  <span className="overflow-hidden text-ellipsis">
                    {customer.customer.email}
                  </span>
                </div>
                <div className="flex gap-1 w-36">
                  <img src={toAbsoluteUrl('/media/icons/phone.svg')} />
                  <span className="overflow-hidden text-ellipsis">
                    {customer.phone}
                  </span>
                </div>
                <div className="flex gap-1 w-36">
                  <img src={toAbsoluteUrl('/media/icons/city.svg')} />
                  <span className="overflow-hidden text-ellipsis">
                    {customer.country}
                  </span>
                </div>
                <div className="flex gap-1 w-36">
                  <img src={toAbsoluteUrl('/media/icons/city.svg')} />
                  <span className="overflow-hidden text-ellipsis">
                    {customer.city}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs border-t flex justify-center">
              <a href="#" className="px-5 py-2 flex gap-2">
                <img src={toAbsoluteUrl('/media/icons/view-light.svg')} />
                <span>View</span>
              </a>
              <a href="#" className="px-5 py-2 border-x flex gap-2">
                <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} />
                <span>Edit</span>
              </a>
              <a href="#" className="px-5 py-2 flex gap-2">
                <img src={toAbsoluteUrl('/media/icons/delete-light.svg')} />
                <span>Delete</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export { DriverList };
