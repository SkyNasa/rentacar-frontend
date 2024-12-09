import React from 'react';
import { Check } from 'lucide-react';
import { CarPlate } from '../../../vehicle/blocks/CarPlate';
import { toAbsoluteUrl } from '@/utils/Assets';

interface VehicleDetails {
  deviceId: string;
  vehicleId: string;
  additionalFeatures: string[];
  payDetails: {
    dailyPrice: number;
    comprehensive: number;
    insurance: number;
    childrensChair: number;
    partialInsurance: number;
  };
  dayDetails: {
    basicPeriod: string;
    usedPeriod: string;
    remainingPeriod: string;
  };
}

const TripAndMapSection: React.FC = () => {
  const details: VehicleDetails = {
    deviceId: 'B604650416437739',
    vehicleId: 'GL96ABR',
    additionalFeatures: ['Insurance', 'Insurance', "Children's chair +(25$)"],
    payDetails: {
      dailyPrice: 136.0,
      comprehensive: 136.0,
      insurance: 136.0,
      childrensChair: 136.0,
      partialInsurance: 136.0
    },
    dayDetails: {
      basicPeriod: '15 Day',
      usedPeriod: '1 Day',
      remainingPeriod: '14 Day'
    }
  };

  return (
    <div className=" h-full p-6 grid grid-cols-2 gap-8">
      {/* Left Column - Vehicle Image */}
      <div className="relative">
       

        {/* Car Image Container */}
        <div className="card grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
          {/* Car Plate */}
          <div className="flex items-center justify-center mb-4">
            <CarPlate plate="5484555" />
          </div>

          {/* SVG Section */}
          <div className="flex items-center justify-center">
            <svg width={45} height={44} viewBox="0 0 45 44" xmlns="http://www.w3.org/2000/svg">
              <rect
                width={45}
                height={44}
                rx={8}
                transform="matrix(-1 0 0 1 45 0)"
                fill="url(#pattern0)"
              />
            </svg>
          </div>

          {/* Device Section */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 p-2 rounded-full"></div>
            <div>
              <span className="text-lg font-medium">41643739</span>
              <p className="text-sm text-gray-500">Device</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center col-span-full rounded-lg p-4 mb-8">
  <img
    className="rounded-lg object-cover max-w-full max-h-full"
    src={toAbsoluteUrl('/media/images/car.png')}
    alt="Car"
  />
  {/* Plus buttons */}
  <button
    className="absolute top-2 left-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
    onClick={() => alert('Add input here')}
  >
    +
  </button>
  <button
    className="absolute top-2 right-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
    onClick={() => alert('Add input here')}
  >
    +
  </button>
  <button
    className="absolute bottom-2 left-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
    onClick={() => alert('Add input here')}
  >
    +
  </button>
  <button
    className="absolute bottom-2 right-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
    onClick={() => alert('Add input here')}
  >
    +
  </button>
  {/* Center Plus Buttons */}
  <button
    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white text-gray rounded-full w-10 h-10 flex items-center justify-center"
    onClick={() => alert('Center button')}
  >
    +
  </button>

  <button
    className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
    onClick={() => alert('Lower center button')}
  >
    +
  </button>
</div>

        </div>
      </div>

      {/* Right Column - Details */}
      <div className="card space-y-8 p-6">
        {/* Additional Features */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Additional features</h3>
          <div className="space-y-3">
            {details.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pay Details */}

        {/* Day Details */}
        <div className="flex justify-between space-x-6">
          {/* Pay Details Section */}
          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-4">Pay Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Daily Price</span>
                <span className="text-gray-700">$136.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Comprehensive</span>
                <span className="text-gray-700">$136.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Insurance</span>
                <span className="text-gray-700">$136.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Children's Chair</span>
                <span className="text-gray-700">$136.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Partial Insurance</span>
                <span className="text-gray-700">$136.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-800">Total</span>
                <span className="text-blue-600">$136.00</span>
              </div>
            </div>
          </div>

          {/* Day Details Section */}
          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-4">Day Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Basic Period</span>
                <span className="text-gray-700 font-bold">15 Day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Used Period</span>
                <span className="text-gray-700 font-bold">1 Day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Remaining Period</span>
                <span className="text-gray-700 font-bold">14 Day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripAndMapSection;
