import { toAbsoluteUrl } from '@/utils';
import { Vehicle } from './cars';
import { faker } from '@faker-js/faker';
import { Customer } from './customer';

export const fakeVehicle = (): Vehicle => {
  return {
    brandImage: toAbsoluteUrl('/media/car-brands/toyota.png'),
    plate: faker.string.alphanumeric({ length: 7, casing: 'upper' }),
    imei: faker.phone.imei(),
    name: faker.word.words(2)
  };
};

export const fakeCustomer = (): Customer => {
  return {
    name: faker.person.fullName(),
    avatar: `https://thispersondoesnotexist.com/`,
    email: faker.internet.email()
  };
};
