import React from 'react';
import Toolbar from './details-components/Toolbar';
import ProfileSection from './details-components/ProfileSection';
import VehicleMetrics from './details-components/VehicleMetrics';
import TripAndMapSection from './details-components/TripAndMapSection';
import { MaintenanceViolationTable } from '../../vehicle/blocks/maintenance';
import TripList from '../../vehicle/blocks/details-components/TripList';
import FileList from './details-components/FileList';;
import { BillingTable } from '../../driver/details-components/BillingTable';

const files = [
  {
    name: 'file-name1.pdf',
    size: '32mb',
    version: 'v1.2.2',
    type: 'pdf'
  },
  {
    name: 'file-name2.JPG',
    size: '32mb',
    version: 'v1.2.2',
    type: 'jpg'
  }
];
interface TripData {
  distance: string;
  date: string;
  startTime: string;
  endTime: string;
  speed: number;
}
const trips: TripData[] = Array(10)
  .fill(null)
  .map(() => ({
    distance: `${(Math.random() * 10 + 1).toFixed(2)} KM`,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
      .toISOString()
      .split('T')[0],
    startTime: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    endTime: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    speed: Math.floor(Math.random() * 101) + 50,
    maxSpeed: Math.floor(Math.random() * 81) + 100
  }));

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Toolbar />
      <div className="p-6 space-y-8">
        <ProfileSection />
        <VehicleMetrics />
        <TripAndMapSection />


        <div className="flex flex-col mb-4 md:flex-row space-y-4 md:space-x-4 h-full w-600 m-2 mb-6 ">
          <TripList trips={trips} totalTrips={450} className="sm:w-full mt-4" title="Trips" />
          <div className="p-4 card w-full">map</div>
        </div>
        <div className="flex flex-grow mb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 ps-4">Performance Metrics</h2>
            <FileList
              files={files}
              onView={(file: { name: any }) => console.log('Viewing file:', file.name)}
            />
          </div>
         <BillingTable searchQuery={''} />
        </div>
        <MaintenanceViolationTable />
      </div>
    </div>
  );
};

export default App;
