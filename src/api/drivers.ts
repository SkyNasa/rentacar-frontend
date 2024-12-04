import { faker } from '@faker-js/faker';
import { fakeVehicle } from './faker';
import { TDataGridRequestParams } from '@/components';
import { Paginated } from './common';


export interface Vehicle {
    brandImage: string;
    plate: string;
    imei: string;
  }

// Define Driver interface
export interface Driver {
  id: string;
  owner: string;
  vehicle: Vehicle;
  date: Date;
  status: string;
  actions: string[];
}

// Mock function to fetch drivers
export const getDrivers = async (params: TDataGridRequestParams): Promise<Paginated<Driver>> => {
  const totalCount = faker.number.int({ min: 20, max: 100 });
  const originalDataset: Driver[] = Array(params.pageSize)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      owner: faker.person.fullName(),
      vehicle: fakeVehicle(),
      date: faker.date.past(),
      status: faker.helpers.arrayElement(['Active', 'Under Review']),
      actions: faker.helpers.arrayElements(['Edit', 'Delete', 'View'], faker.number.int({ min: 1, max: 3 })),
    }));

  return {
    data: originalDataset,
    totalCount,
  };
};
