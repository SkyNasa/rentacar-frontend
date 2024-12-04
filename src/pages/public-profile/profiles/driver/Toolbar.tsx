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
    <div>
      <div className="flex justify-end items-center gap-2 flex-wrap p-4">
        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-green-500 rounded-md">
          <EditIcon className="w-4 h-4" /> Edit
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
