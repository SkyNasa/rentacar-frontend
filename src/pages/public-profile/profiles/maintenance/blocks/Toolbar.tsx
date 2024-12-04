import React from 'react';
import { useParams } from 'react-router-dom';
import { Settings } from 'lucide-react';
import {
  AddGeofenceIcon,
  DeleteIcon,
  EditIcon,
  MaintenanceIcon,
  RentIcon,
  ViolationsIcon
} from './svg';

const Toolbar = () => {
  const { vehicleId } = useParams();

  return (
    <div className="flex gap-2 p-4 justify-end">
      <button 
        className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
      >
        Back
      </button>
      
      <button 
        className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
      >
        Discard
      </button>
      
      <button 
        className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 w-24"
      >
        Edit
      </button>
    </div>
  );
};

export default Toolbar;