import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface PriceRowProps {
  title: string;
}

const Rent = () => {
  const [selectedFuel, setSelectedFuel] = useState<string>('Hybrid');
  const [selectedCarType, setSelectedCarType] = useState<string>('PROMO');
  const [selectedGear, setSelectedGear] = useState<string>('Automatic');

  const radioStyle = (isSelected: boolean): string =>
    `flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
      isSelected
        ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
        : 'border-gray-300 text-gray-600'
    }`;

  const PriceRow: React.FC<PriceRowProps> = ({ title }) => (
    <div className="grid gap-5">
      <h4 className="text-base font-medium">{title}</h4>
      <div className="grid lg:grid-cols-4 gap-5">
        <div className="grid gap-2.5">
          <label className="form-label">Minimum Price</label>
          <div className="relative flex items-center">
            <input type="text" className="input pr-8 w-full" placeholder="1584" />
            <span className="absolute right-3 text-gray-500">$</span>
          </div>
        </div>
        <div className="grid gap-2.5">
          <label className="form-label">Maximum Price</label>
          <div className="relative flex items-center">
            <input type="text" className="input pr-8 w-full" placeholder="1584" />
            <span className="absolute right-3 text-gray-500">$</span>
          </div>
        </div>
        <div className="grid gap-2.5">
          <label className="form-label">Kilometers Per Day</label>
          <div className="relative flex items-center">
            <input type="text" className="input pr-12 w-full" placeholder="160" />
            <span className="absolute right-3 text-gray-500">KM</span>
          </div>
        </div>
        <div className="grid gap-2.5">
          <label className="form-label">Extra kilo price</label>
          <div className="relative flex items-center">
            <input type="text" className="input pr-8 w-full" placeholder="1" />
            <span className="absolute right-3 text-gray-500">$</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card pb-2.5">
      <div className="card-header" id="vehicle_information">
        <h3 className="card-title">Rent</h3>
      </div>
      <div className="card-body grid gap-8">
        {/* Minimum Rental Period */}
        <div className="grid gap-2.5">
          <label className="form-label">Minimum Rental Period</label>
          <div className="relative flex items-center max-w-xs">
            <input type="text" className="input pr-12 w-full" placeholder="7" />
            <span className="absolute right-3 text-gray-500">Day</span>
          </div>
        </div>

        {/* Rental Prices */}
        <PriceRow title="Day Rental Price" />
        <PriceRow title="Monthly Rental Price" />
        <PriceRow title="Yearly Rental Price" />
       
      </div>
    </div>
  );
};

export { Rent };