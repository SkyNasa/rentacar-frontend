import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { ImageUploadCard } from './ImageUploadCard';

interface IGeneralSettingsProps {
  title: string;
}
const Information = ({ title }: IGeneralSettingsProps) => {
  const [selectedFuel, setSelectedFuel] = useState<string>('Hybrid');
  const [selectedCarType, setSelectedCarType] = useState<string>('PROMO');
  const [selectedGear, setSelectedGear] = useState<string>('Automatic');

  const radioStyle = (isSelected: boolean) =>
    `flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
      isSelected
        ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
        : 'border-gray-300 text-gray-600'
    }`;

  return (
    <div className="card pb-2.5">
      <div className="card-header" id="vehicle_information">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body grid gap-5">
        {/* Brand and Model Row */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Brand</label>
            <select className="select">
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
              <option>BMW</option>
            </select>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Model</label>
            <select className="select">
              <option>Model</option>
            </select>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Model Series</label>
            <select className="select">
              <option>Model Series</option>
            </select>
          </div>
        </div>

        {/* Model Year, Volume, Power Row */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Model Year</label>
            <div className="relative flex items-center">
              <input type="text" className="input w-full" placeholder="2024" />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Volume</label>
            <input type="text" className="input" placeholder="Volume" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Power</label>
            <input type="text" className="input" placeholder="Power" />
          </div>
        </div>

        {/* Fuel Type */}
        <div className="grid gap-2.5">
          <label className="form-label">Fuel Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 w-full">
            {['Hybrid', 'Diesel', 'Benzin', 'LPG', 'Kerosine', 'Electric'].map((fuel) => (
              <label
                key={fuel}
                className={radioStyle(selectedFuel === fuel)}
                onClick={() => setSelectedFuel(fuel)}
              >
                <input
                  type="radio"
                  name="fuelType"
                  value={fuel}
                  className="hidden"
                  checked={selectedFuel === fuel}
                  onChange={() => setSelectedFuel(fuel)}
                />
                <span
                  className={`w-4 h-4 flex-shrink-0 rounded-full border ${
                    selectedFuel === fuel ? 'border-indigo-500 bg-indigo-500' : 'border-gray-400'
                  }`}
                ></span>
                {fuel}
              </label>
            ))}
          </div>
        </div>

        {/* Car Type */}
        <div className="grid gap-2.5">
          <label className="form-label">Car Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 w-full">
            {['PROMO', 'Pickup', 'COMFORT', 'SUV', 'Bus', 'Van'].map((type) => (
              <label
                key={type}
                className={radioStyle(selectedCarType === type)}
                onClick={() => setSelectedCarType(type)}
              >
                <input
                  type="radio"
                  name="carType"
                  value={type}
                  className="hidden"
                  checked={selectedCarType === type}
                  onChange={() => setSelectedCarType(type)}
                />
                <span
                  className={`w-4 h-4 flex-shrink-0 rounded-full border ${
                    selectedCarType === type ? 'border-indigo-500 bg-indigo-500' : 'border-gray-400'
                  }`}
                ></span>
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Gear */}
        {/* Gear, Color, and Number of Seats Row */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Gear */}
          <div className="grid gap-2.5">
            <label className="form-label">Gear</label>
            <div className="flex flex-wrap gap-4">
              {['Automatic', 'Manual'].map((gear) => (
                <label
                  key={gear}
                  className={radioStyle(selectedGear === gear)}
                  onClick={() => setSelectedGear(gear)}
                >
                  <input
                    type="radio"
                    name="gear"
                    value={gear}
                    className="hidden"
                    checked={selectedGear === gear}
                    onChange={() => setSelectedGear(gear)}
                  />
                  <span
                    className={`w-4 h-4 flex-shrink-0 rounded-full border ${
                      selectedGear === gear ? 'border-indigo-500 bg-indigo-500' : 'border-gray-400'
                    }`}
                  ></span>
                  {gear}
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="grid gap-2.5">
            <label className="form-label">Color</label>
            <select className="select">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>

          {/* Number of Seats */}
          <div className="grid gap-2.5">
            <label className="form-label">Number of seats</label>
            <select className="select">
              {[2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Image Upload Card */}
        <ImageUploadCard />
      </div>
    </div>
  );
};

export { Information, type IGeneralSettingsProps };
