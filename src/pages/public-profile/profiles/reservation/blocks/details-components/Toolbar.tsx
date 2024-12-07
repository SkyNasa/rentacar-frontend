import React from 'react';
import { useParams } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { DeleteIcon, EditIcon, MaintenanceIcon, RentIcon, ViolationsIcon } from './svg';
import PrintIcon from './svg/PrintIcon';
import DownloadIcon from './svg/downloadIcon';

const Toolbar = () => {
  const { vehicleId } = useParams();

  return (
    <div>
      <div className="flex justify-end items-center gap-2 flex-wrap p-4">
        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <DownloadIcon className="w-4 h-4" /> Download PDF
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <PrintIcon className="w-4 h-4" /> Print Invoice
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-green-500 rounded-md">
          <EditIcon className="w-4 h-4" /> Edit
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-[#1BC5BD] rounded-md">
          <MaintenanceIcon className="w-4 h-4" />
          Maintenance
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-red-500 rounded-md">
          <ViolationsIcon className="w-4 h-4" />
          Violations
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-yellow-500 rounded-md">
          <RentIcon className="w-4 h-4" />
          Rent Extention
        </button>

        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-red-500 rounded-md">
          <DeleteIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
