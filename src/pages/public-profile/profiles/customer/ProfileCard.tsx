import React from 'react';
import { CalendarIcon, MailIcon, PhoneIcon, MapIcon } from './svg';
import { CarPlate } from './CarPlate';
import CarBrandImage from '@/components/CarBrandsImage';

type ProfileProps = {
  profileImage: string;
  name: string;
  nationality: string;
  code: string;
  company: string;
  dob: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
};

const ProfileCard: React.FC<ProfileProps> = ({
  profileImage,
  name,
  nationality,
  code,
  company,
  dob,
  email,
  phone,
  country,
  city,
  address
}) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Profile Image and Basic Info */}
      <div className="flex-shrink-0">
        <img src={profileImage} alt="Profile" className="w-28 h-28 rounded-lg object-cover" />
      </div>

      <div className="flex-grow">
        {/* Name and Badges Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-500">{nationality}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CarPlate plate={'654654'} />
            <CarBrandImage brandName="Toyota" size="medium" className="mt-2 p-4" />
           
            <button className="px-4 py-1 border border-gray-300 rounded-md text-gray-600">
              Company
            </button>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-3/4">
          <div className="flex items-center space-x-2 text-gray-600">
            <CalendarIcon />
            <span>{dob}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MailIcon />
            <span>{email}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <PhoneIcon />
            <span>{phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <PhoneIcon />
            <span>{phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapIcon />
            <span>{country}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapIcon />
            <span>{city}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapIcon />
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
