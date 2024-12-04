import { faker } from '@faker-js/faker';
import { TDataGridRequestParams } from '@/components';
import { Paginated } from './common';

export interface Vehicle {
  id: string;
  owner: string;
  email: string;
  brand: string;
  plate: string;
  gear: string;
  deviceName: string;
  currentMileage: string;
  status: string;
  date: string;
}

export const getVehicles = async (
  params: TDataGridRequestParams
): Promise<Paginated<Vehicle>> => {
  const totalCount = faker.number.int({ min: 20, max: 200 });
  const originalDataset: Vehicle[] = Array(params.pageSize)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      owner: faker.person.fullName(),
      email: faker.internet.email(),
      brand: faker.vehicle.manufacturer(),
      plate: faker.vehicle.vrm(),
      gear: faker.helpers.arrayElement(['Automatic', 'Manual']),
      deviceName: faker.helpers.arrayElement(['GPS Tracker', 'OBD-II Scanner']),
      currentMileage: faker.number.int({ min: 0, max: 200000 }).toLocaleString(),
      status: faker.helpers.arrayElement(['Available', 'Unavailable', 'Maintenance', 'Rented']),
      date: faker.date.past().toISOString()
    }));

  return {
    data: originalDataset,
    totalCount
  };
};
