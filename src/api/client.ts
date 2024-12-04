import { faker } from '@faker-js/faker';

export interface Client {
  name: string;
  avatar: string;
  onlineDevices: number;
  offlineDevices: number;
}

export const getClients = async (filter: string): Promise<Client[]> => {
  return Array(faker.number.int(100))
    .fill(0)
    .map(() => ({
      name: faker.company.name(),
      avatar: faker.image.avatar(),
      onlineDevices: faker.number.int(1000),
      offlineDevices: faker.number.int(1000)
    }));
};
