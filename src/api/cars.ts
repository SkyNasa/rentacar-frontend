import { faker } from '@faker-js/faker';
import { fakeCustomer, fakeVehicle } from './faker';
import { TDataGridRequestParams } from '@/components';
import { Paginated } from './common';
import { Customer } from './customer';
import { Client } from './client';

export const getMovingCars = async (): Promise<Record<string, number>> => {
  return {
    Moving: 1700,
    Parked: 290
  };
};

export const getOnlineCars = async (): Promise<Record<string, number>> => {
  return {
    Online: 1800,
    Offline: 190
  };
};

export interface Vehicle {
  brandImage: string;
  plate: string;
  imei: string;
  name: string;
}

export interface VehicleDetails {
  vehicle: Vehicle;
  customer: Customer;
  brandName: string;
  type: string;
  mileage: number;
  status: string;
}

export interface CarMileageAndEngine {
  vehicle: Vehicle;
  mileage: number;
  engine: number;
}

export const getCarsMileageAndEngine = async (cursor?: string): Promise<CarMileageAndEngine[]> => {
  const LIMIT = 20;
  let largestMileage = faker.number.float({ min: 10000, max: 10000, fractionDigits: 3 });
  let largestEngine = faker.number.float({ min: 1000, max: 1000, fractionDigits: 3 });

  return Array(LIMIT)
    .fill(0)
    .map(() => {
      largestMileage -= faker.number.float({ max: 1000, fractionDigits: 3 });
      largestEngine -= faker.number.float({ max: 100, fractionDigits: 3 });
      return {
        vehicle: fakeVehicle(),
        mileage: largestMileage,
        engine: largestEngine
      };
    });
};

export interface Violation {
  vehicle: Vehicle;
  date: Date;
  customer: Customer;
  type: string;
  price: number;
  status: string;
}

export const getViolations = async (
  params: TDataGridRequestParams
): Promise<Paginated<Violation>> => {
  const totalCount = faker.number.int({ min: 2, max: 100 });
  const originalDataset: Violation[] = Array(params.pageSize)
    .fill(0)
    .map(() => ({
      customer: fakeCustomer(),
      vehicle: fakeVehicle(),
      date: faker.date.past(),
      price: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
      status: faker.helpers.arrayElement(['Unpaid', 'Under Review', 'Recorded', 'Paid']),
      type: faker.word.words(2)
    }));

  return {
    data: originalDataset,
    totalCount
  };
};

export interface Maintenance {
  date: Date;
  vehicle: Vehicle;
  type: string;
  supplier: string;
  price: number;
  status: string;
}

export const getMaintenance = async (
  params: TDataGridRequestParams
): Promise<Paginated<Maintenance>> => {
  const totalCount = faker.number.int({ min: 2, max: 100 });
  const originalDataset: Maintenance[] = Array(params.pageSize)
    .fill(0)
    .map(() => ({
      vehicle: fakeVehicle(),
      date: faker.date.past(),
      price: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
      status: faker.helpers.arrayElement(['Completed', 'In Maintenance']),
      type: faker.word.words(2),
      supplier: faker.person.fullName()
    }));

  return {
    data: originalDataset,
    totalCount
  };
};

export const getVehicles = async (cursor?: string): Promise<Paginated<VehicleDetails>> => {
  const limit = 10;
  const totalCount = faker.number.int({ min: 6, max: 500 });

  const originalDataset: VehicleDetails[] = Array(limit)
    .fill(0)
    .map(() => ({
      vehicle: fakeVehicle(),
      customer: fakeCustomer(),
      brandName: faker.vehicle.vehicle(),
      mileage: faker.number.int({ min: 5, max: 1000 }),
      type: faker.helpers.arrayElement(['Manual', 'Automatic']),
      status: faker.helpers.arrayElement(['Unavailable', 'Maintenance', 'Available'])
    }));

  return {
    data: originalDataset,
    totalCount
  };
};

export interface VehicleStatus {
  engineStatus: boolean;
  parkingTime: string;
  timestamp: Date;
  speed: number;
  satellietes: number;
  batteryLevel: number;
  engineBlocked: boolean;
  defenseStatus: boolean;
  signalLevel: number;
  existingKilometer: string;
}

export interface VehicleLocation {
  vehicle: Vehicle;
  online: boolean;
  long: number;
  lat: number;
  angle: number;
  status: VehicleStatus;
}

export const getVehicleLocations = async (client: Client): Promise<VehicleLocation[]> => {
  return Array(faker.number.int(2000))
    .fill(0)
    .map(() => {
      const location = faker.location.nearbyGPSCoordinate({
        origin: [38.9637, 33.2433],
        radius: 200
      });
      return {
        vehicle: fakeVehicle(),
        lat: location[0],
        long: location[1],
        angle: faker.number.float(360),
        online: faker.datatype.boolean(),
        status: {
          batteryLevel: faker.number.int(100),
          defenseStatus: faker.datatype.boolean(),
          engineBlocked: faker.datatype.boolean(),
          engineStatus: faker.datatype.boolean(),
          existingKilometer: `${faker.number.float({ max: 1000, fractionDigits: 2 })} Km`,
          parkingTime: `${faker.number.int(12)} h, ${faker.number.int(59)} min}`,
          satellietes: faker.number.int(7),
          signalLevel: faker.number.int(100),
          speed: faker.number.int(160),
          timestamp: faker.date.recent({ days: 0.1 })
        }
      };
    });
};
