import React from 'react';
import { CustomersList } from './blocks/CustomersList';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const CustomersPage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">Customer List</h3>

      <UserMiniCards />
      <CustomersList />
    </div>
  );
};

export { CustomersPage };
