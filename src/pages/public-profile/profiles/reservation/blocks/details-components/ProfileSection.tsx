import React from 'react';
import { CountryCityIcon, MailIcon, MapIcon, PhoneIcon } from './svg';
import { CarView } from '../CarView';
import { Vehicle } from '@/api/cars';
import { CarPlate } from '@/pages/dashboards/dashboard/blocks/CarPlate';

interface ProfileData {
  name: string;
  nationality: string;
  email: string;
  phone1: string;
  phone2: string;
  country: string;
  city: string;
  address: string;
  rentalDate: string;
  pickupDate: string;
  dropoffDate: string;
  days: string;
  vehicleID: string;
}

const ProfileSection: React.FC = () => {
  const profileData: ProfileData = {
    name: 'Brad Dennis',
    nationality: 'Turkish',
    email: 'mail@gmail.com',
    phone1: '+90954948849',
    phone2: '+90954948849',
    country: 'Turkey',
    city: 'Istanbul',
    address: 'Address',
    rentalDate: '16-09-2024',
    pickupDate: '16-09-2024',
    dropoffDate: '16-09-2024',
    days: '30 Day',
    vehicleID: 'GL96ABR',
  };

  // Create a Vehicle object
  const vehicle: Vehicle = {
    brandImage: '/api/placeholder/brand.png', // Update with the actual brand image URL
    plate: profileData.vehicleID,
    imei: '123456789',
    name: ''
  };

  return (
    <div className="card card-grid h-full min-w-full p-6">
      <div className="flex flex-col space-y-6">
        {/* Top section with profile and details */}
        <div className="flex justify-between items-center space-x-4">
          {/* Profile image and main info */}
          <img src="/api/placeholder/120/120" alt="Profile" className="w-24 h-full rounded-lg" />
          <div className="flex-1">
            <div className="flex justify-between items-center space-x-2">
              {/* Name and nationality */}
              <div>
                <h2 className="text-lg font-semibold">{profileData.name}</h2>
                <span className="text-gray-500 text-sm block">{profileData.nationality}</span>
              </div>

              {/* Vehicle and status badges */}
              <div className="ml-auto flex items-center space-x-2">
                <CarPlate vehicle={vehicle} />
                <span className="ml-2">
                  <img src="/api/placeholder/24/24" alt="Toyota" className="w-6 h-6" />
                </span>
                <button className="px-4 py-1 rounded border border-gray-200 text-gray-600 text-sm">
                  Company
                </button>
                <button className="px-4 py-1 rounded border border-gray-200 text-gray-600 text-sm">
                  Day
                </button>
                <button className="px-4 py-1 rounded border border-green-200 text-green-600 text-sm bg-green-50">
                  For rent
                </button>
              </div>
            </div>

            {/* Contact information */}
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div className="flex items-center text-gray-500 text-sm">
                <MailIcon />
                {profileData.email}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <PhoneIcon />
                {profileData.phone1}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <PhoneIcon />
                {profileData.phone2}
              </div>
            </div>

            {/* Location information */}
            <div className="mt-2 grid grid-cols-4 gap-4">
              <div className="flex items-center text-gray-500 text-sm">
                <CountryCityIcon />
                {profileData.country}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <CountryCityIcon />
                {profileData.city}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MapIcon />
                {profileData.address}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8 p-4">
              <div>
                <div className="text-lg font-medium">{profileData.rentalDate}</div>
                <div className="text-sm text-gray-500">23:15</div>
                <div className="text-xs text-gray-400">Rental Date</div>
              </div>
              <div>
                <div className="text-lg font-medium">{profileData.pickupDate}</div>
                <div className="text-sm text-gray-500">23:15</div>
                <div className="text-xs text-green-500">Pickup Date</div>
              </div>
              <div>
                <div className="text-lg font-medium">{profileData.dropoffDate}</div>
                <div className="text-sm text-gray-500">23:15</div>
                <div className="text-xs text-red-500">Drop off Date</div>
              </div>
              <div>
                <div className="text-lg font-medium">{profileData.days}</div>
                <div className="text-xs text-gray-400">Number Of Rental Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Date information */}
      </div>
    </div>
  );
};

export default ProfileSection;
