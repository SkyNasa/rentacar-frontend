import React from 'react';
import { CarPlate } from '../../vehicle/blocks/CarPlate';
import CarBrandImage from '@/components/CarBrandsImage';
import Toolbar from './Toolbar';

const MaintenanceDetails: React.FC = () => {
  return (
    <>
      <Toolbar />
      <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8 border rounded-lg p-4">
          <img
            src="/api/placeholder/400/320"
            alt="Vehicle"
            className="w-48 h-36 object-cover rounded-lg"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-medium text-gray-800">Reno Volvo</h2>
                <p className="text-gray-500">525144</p>
              </div>
              <div className="flex items-center gap-4">
                <CarPlate plate={'654654'} />
                <CarBrandImage brandName="Toyota" size="medium" className="mt-2 p-4" />
                <span className="px-3 py-1 rounded-md bg-green-100 text-green-500">Finished</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-dashed rounded-lg border-gray-300 p-4">
                <p className="text-red-500 text-sm mb-1">Start Date</p>
                <p className="text-gray-800 font-medium">16-09-2024</p>
              </div>
              <div className="border border-dashed  rounded-lg  border-gray-300 p-4">
                <p className="text-green-500 text-sm mb-1">Finished Date</p>
                <p className="text-gray-800 font-medium">16-09-2024</p>
              </div>
              <div className="border border-dashed  rounded-lg border-gray-300 p-4">
                <p className="text-gray-500 text-sm mb-1">Price</p>
                <p className="text-gray-800 font-medium">250 $</p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-8 rounded-lg border p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Information</h3>
          <div className="divide-y divide-gray-200">
            <div className="py-4 grid grid-cols-[100px,1fr] gap-4">
              <span className="text-gray-500">Type</span>
              <span className="text-gray-800">Karina Clark</span>
            </div>
            <div className="py-4 grid grid-cols-[100px,1fr] gap-4">
              <span className="text-gray-500">Supplier</span>
              <span className="text-gray-800">Karina Clark</span>
            </div>
            <div className="py-4 grid grid-cols-[100px,1fr] gap-4">
              <span className="text-gray-500">Description</span>
              <p className="text-gray-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceDetails;
