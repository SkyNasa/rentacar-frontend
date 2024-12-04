import { MaintenanceViolationTable } from '../blocks/maintenance/MaintenanceViolation';

import { CarPlate } from './CarPlate';
import Toolbar from './Toolbar';
import { Model, ModelSeries, ModelYear, FuelType, Gear, Volume, Power, Color, Tayp } from './svg';

import VehicleMetrics from './details-components/VehicleMetrics';
import FileList from './details-components/FileList';
import GeofenceList from './details-components/GeofenceList';
import TripList from './details-components/TripList';
import { toAbsoluteUrl } from '@/utils';

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
const geofences = [
  'ISTANBUL',
  'ANKARA',
  'IZMIR',
  'ANTALYA',
  'ANKARA',
  'IZMIR',
  'ANTALYA',
  'ANKARA',
  'IZMIR',
  'ANTALYA'
];
const getScoreColor = (score: number) => {
  if (score <= 50) return 'text-orange-500';
  if (score <= 100) return 'text-yellow-500';
  return 'text-green-500';
};
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

const VehicleInfoCards = () => {
  const vehicleInfo = [
    { label: 'Model', value: 'Corolla', Icon: Model },
    { label: 'Model Series', value: 'SEDAN', Icon: ModelSeries },
    { label: 'Model Year', value: '2021', Icon: ModelYear },
    { label: 'Fuel Type', value: 'Benzin', Icon: FuelType },
    { label: 'Gear', value: 'Automatic', Icon: Gear },
    { label: 'Volume', value: '200', Icon: Volume },
    { label: 'Power', value: '200', Icon: Power },
    { label: 'Color', value: 'White', Icon: Color },
    { label: 'Tayp', value: 'Easy', Icon: Tayp }
  ];
  const details = [
    { label: 'Type', value: 'Institutional' },
    { label: 'Identify Number', value: '05511593891' },
    { label: 'Chassis Number', value: 'NMTBA3BE20R010542' },
    { label: 'Engine Number', value: 'M15ABC77721' },
    { label: 'Registration Number', value: '2024042916093744083' },
    { label: 'Registration Date', value: '2024-04-29' },
    { label: 'First Registration Date', value: '2021-03-26' },
    { label: 'License Serial Number', value: '206234' },
    { label: 'Price', value: '1.0000' }
  ];
  const items = [
    { title: 'Inspection', startDate: '2024-04-29', endDate: '2024-05-27' },
    { title: 'Insurance', startDate: '2024-04-29', endDate: '2024-05-27' },
    { title: 'Kasko', startDate: '2024-04-29', endDate: '2024-05-27' },
    { title: 'Exhaust', startDate: '2024-04-29', endDate: '2024-05-27' }
  ];

  return (
    <>
      <Toolbar />
      <div className="w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="card-body w-full lg:w-1/2 bg-white shadow-md rounded-lg mx-2 my-4 px-5 grid grid-cols-1">
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
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
              </div>
            </div>
          </div>

          <div className="container mx-auto p-5 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            {/* Vehicle Info Section */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Vehicle Info Cards */}
              <div className="flex-grow bg-white mr-0 lg:mr-4 mb-4 lg:mb-0">
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  {vehicleInfo.map(({ label, value, Icon }, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg shadow-sm border hover:shadow-md flex flex-col h-40"
                    >
                      <Icon className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium my-2">{label}</span>
                      <span className="text-lg font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map and Details */}
              <div className="flex-grow lg:w-1/3 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4 h-full flex flex-col">
                  <img
                    className="w-full rounded-lg object-cover h-40 mb-4"
                    src="https://via.placeholder.com/150"
                    alt="Map"
                  />
                  <div className="flex-grow">
                    {details.map(({ label, value }, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <span className="text-gray-400 mr-1">{label}:</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection and Insurance Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Vehicle Inspection and Insurance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.55566 7.40137V13.9414C3.55469 20.876 7.90332 27.209 14.3779 29.6992C14.9004 29.9004 15.4502 30 16 30C16.5498 30 17.0996 29.8994 17.623 29.6992L18.5938 29.3252C24.5781 27.0234 28.4453 21.2344 28.4443 14.5781V7.40137C28.4443 6.86426 28.0195 6.42285 27.4834 6.40234C23.8887 6.2627 20.2236 4.8457 16.5898 2.19238C16.2383 1.93652 15.7617 1.93652 15.4102 2.19238C11.7754 4.8457 8.11035 6.2627 4.5166 6.40234C3.98047 6.42285 3.55566 6.86426 3.55566 7.40137ZM5.55566 8.33691C9.04004 8.00781 12.5459 6.62891 16 4.22754C19.4531 6.62891 22.96 8.00781 26.4443 8.33691V14.5781C26.4453 20.4004 23.082 25.4561 17.875 27.458L16.9053 27.832C16.3213 28.0566 15.6777 28.0566 15.0957 27.832C9.38867 25.6367 5.55469 20.0547 5.55566 13.9414V8.33691Z"
                        fill="#FF3C3C"
                      />
                      <path
                        d="M13.9521 20.1309C14.1396 20.3184 14.3936 20.4238 14.6592 20.4238C14.9248 20.4238 15.1787 20.3184 15.3662 20.1309L21.5859 13.9111C21.9766 13.5205 21.9766 12.8877 21.5859 12.4971C21.1953 12.1064 20.5625 12.1064 20.1719 12.4971L14.6592 18.0098L11.8281 15.1777C11.4375 14.7871 10.8047 14.7871 10.4141 15.1777C10.0234 15.5684 10.0234 16.2012 10.4141 16.5918L13.9521 20.1309Z"
                        fill="#DA0806"
                      />
                    </svg>

                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="mt-2 text-sm text-gray-600 space-y-1">
                        <div>Start: {item.startDate}</div>
                        <div>End: {item.endDate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:flex-row space-y-4 md:space-x-4 h-full w-600 m-2 mb-6 ">
          <TripList trips={trips} totalTrips={450} className="sm:w-full mt-4" title="Trips" />
          <div className="p-4 card w-full">map</div>
        </div>
        <div className="flex flex-grow mb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 ps-4">Performance Metrics</h2>
            <FileList files={files} onView={(file) => console.log('Viewing file:', file.name)} />
          </div>
          <VehicleMetrics
            metrics={{
              engineHours: '300 Hr',
              mileage: '200 km',
              fuelConsumption: '12%',
              rentedTimes: '10'
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <GeofenceList
            items={geofences}
            title="Geofences"
            className="mx-2"
            onItemClick={(item) => console.log(`Selected: ${item}`)}
            searchPlaceholder="Search..."
          />
          <MaintenanceViolationTable />
        </div>
      </div>
    </>
  );
};

export default VehicleInfoCards;
