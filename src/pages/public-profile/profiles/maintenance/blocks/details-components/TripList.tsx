import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MapPin from '../svg/MapPin';

interface Trip {
  distance: string;
  date: string;
  startTime: string;
  endTime: string;
  speed: number;
  maxSpeed?: number;
}

interface TripListProps {
  trips: Trip[];
  totalTrips?: number;
  className?: string;
  title?: string;
  data?: {
    currentPage?: number;
    totalPages?: number;
    itemsPerPage?: number;
  };
  onPageChange?: (page: number) => void;
}

const SpeedIndicator = ({ speed, maxSpeed = 280 }: { speed: number; maxSpeed?: number }) => (
  <div className="w-20 h-20">
    <CircularProgressbar
      value={speed}
      maxValue={maxSpeed}
      text={`${speed}`}
      styles={{
        path: {
          stroke: speed > 120 ? 'red' : '#FFB200' // Set color to red if speed > 120
        },
        text: {
          fontSize: '24px',
          fill: '#000',
          dominantBaseline: 'middle',
          textAnchor: 'middle'
        },
        trail: {
          stroke: '#F5F5F5'
        }
      }}
    />
    <div className="text-center text-xs mt-1">kmh</div>
  </div>
);

const TripList: React.FC<TripListProps> = ({
  trips,
  totalTrips,
  className = '',
  title = 'Trips',
  data,
  onPageChange
}) => {
  return (
    <div className={`p-4 card lg:w-1/2 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-gray-500 text-sm">{totalTrips || trips.length} Trips</span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex justify-between items-center transition-colors duration-200"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="w-1/3 flex items-center space-x-4">
                <div className="text-lg font-medium">{trip.distance}</div>
                <MapPin />
              </div>
              <div className="w-1/3 text-gray-800 text-lg">
                {trip.date}
                <br />
                <div className="text-gray-400 text-md">{trip.startTime}</div>
              </div>
              <div className="w-1/3 text-gray-800 text-lg">
                {trip.date}
                <br />
                <div className="text-gray-400 text-md">{trip.endTime}</div>
              </div>
            </div>
            <SpeedIndicator speed={trip.speed} maxSpeed={trip.maxSpeed} />
          </div>
        ))}

        {trips.length === 0 && (
          <div className="text-center text-gray-500 py-4">No trips available</div>
        )}
      </div>

      {data && data.totalPages && data.totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(data.totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange?.(i + 1)}
              className={`w-8 h-8 rounded-full ${
                data.currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripList;
