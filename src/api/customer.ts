import { faker } from '@faker-js/faker';
import { Paginated } from './common';
import { fakeCustomer } from './faker';

export interface Customer {
  name: string;
  avatar: string;
  email: string;
}

export interface CustomerDetails {
  customer: Customer;
  nationality: string;
  country: string;
  city: string;
  phone: string;
  state: string;
}

export const getCustomers = async (cursor?: string): Promise<Paginated<CustomerDetails>> => {
  const limit = 10;
  const totalCount = faker.number.int({ min: 6, max: 500 });

  const originalDataset: CustomerDetails[] = Array(limit)
    .fill(0)
    .map(() => ({
      customer: fakeCustomer(),
      nationality: 'Turkish',
      city: faker.location.city(),
      country: faker.location.country(),
      phone: faker.phone.number({ style: 'international' }),
      state: faker.helpers.arrayElement(['Under Review', 'Active'])
    }));

  return {
    data: originalDataset,
    totalCount
  };
};
