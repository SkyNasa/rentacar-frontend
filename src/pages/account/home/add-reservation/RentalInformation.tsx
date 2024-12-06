import React, { useState } from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';

const RentalInformation = () => {
  const [selectedRentType, setSelectedRentType] = useState('Daily');
  const [additionalInsurance, setAdditionalInsurance] = useState(false);
  const [customizeRate, setCustomizeRate] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedChildSeats, setSelectedChildSeats] = useState<number[]>([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-4">
      <div className="w-2/3 bg-white rounded-lg shadow-lg">
        {/* Tab Header */}
        <div className="border-b">
          <div className="px-6">
            <button className="py-4 border-b-2 border-blue-600 text-blue-600 font-medium">
              Rental Information
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 bg-white">
          {/* Type of Rent */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Type Of Rent</label>
            <div className="flex gap-4">
              {['Daily', 'Monthly', 'Yearly'].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="rentType"
                      checked={selectedRentType === type}
                      onChange={() => setSelectedRentType(type)}
                      className="w-4 h-4 border-2 border-gray-300 rounded-full"
                    />
                    {selectedRentType === type && (
                      <div className="absolute w-2 h-2 bg-blue-600 rounded-full left-1 top-1" />
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Customer Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Customer Name</label>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <select className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none">
                  <option>Customer Name</option>
                </select>
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
                Add Customer
              </button>
            </div>
          </div>

          {/* Additional Driver */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Additional driver</label>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <select className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none">
                  <option>Customer Name</option>
                </select>
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
                Add Customer
              </button>
            </div>
          </div>

          {/* Pickup and Drop-off Times */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Pickup Date</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="00/00/0000"
                  className="w-full pl-4 pr-10 py-2 border rounded-lg"
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pickup Time</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>22:00</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Drop off Date</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="00/00/0000"
                  className="w-full pl-4 pr-10 py-2 border rounded-lg"
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Drop off Time</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>22:00</option>
              </select>
            </div>
          </div>

          {/* Number of Days & Pickup Location */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Number of days</label>
              <div className="flex items-center">
                <input
                  type="number"
                  defaultValue="15"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <span className="ml-2 text-gray-600">Days</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pickup location</label>
              <div className="flex gap-4">
                {['In The Company', 'Another Address'].map((location) => (
                  <label key={location} className="flex items-center gap-2">
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="pickupLocation"
                        className="w-4 h-4 border-2 border-gray-300 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{location}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Insurance Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Virtual Insurance</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>Nothing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Insurance + Daily Cost
              </label>
              <div className="flex items-center justify-between px-4 py-2 border rounded-lg">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={additionalInsurance}
                    onChange={(e) => setAdditionalInsurance(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-600">Comprehensive Insurance</span>
                </label>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>$38,000</span>
                  <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Car Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Car</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>Car Type</option>
            </select>
          </div>

          {/* Add-ons */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Add-ons</label>
            <div className="grid grid-cols-4 gap-4">
              {[
                "Children's chair (+25$)",
                'Insurance',
                "Children's chair (+25$)",
                "Children's chair (+25$)"
              ].map((addon, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedChildSeats([...selectedChildSeats, index]);
                      } else {
                        setSelectedChildSeats(selectedChildSeats.filter((i) => i !== index));
                      }
                    }}
                  />
                  <span className="text-sm text-gray-600">{addon}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Daily Rate & Terms */}
          <div className="mb-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={customizeRate}
                onChange={(e) => setCustomizeRate(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-600">Customize Daily Rate</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-600">I Agree To The Terms And Conditions</span>
            </label>
          </div>

          {/* Total Amount */}
          <div className="text-center">
            <div className="text-sm font-medium text-blue-600">TOTAL AMOUNT</div>
            <div className="text-2xl font-bold">20,600.00</div>
            <div className="text-sm text-gray-600">US Dollar</div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default RentalInformation;
