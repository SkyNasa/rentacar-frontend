import React from 'react';

// Interfaces for our data types
interface InfoItem {
  label: string;
  value: string | number;
  Icon?: React.ComponentType<{ className?: string }>;
}

interface TimelineItem {
  title: string;
  startDate: string;
  endDate: string;
}

interface VehicleInfoProps {
  vehicleInfo: InfoItem[];
  details: Omit<InfoItem, 'Icon'>[];
  timeline: TimelineItem[];
  className?: string;
}

const InfoCard: React.FC<InfoItem> = ({ label, value, Icon }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <div className="flex flex-col items-center text-center">
      {Icon && <Icon className="w-6 h-6 text-gray-400 mb-2" />}
      <span className="text-sm text-gray-500 font-medium mb-1">{label}</span>
      <span className="text-lg font-semibold text-gray-900">{value}</span>
    </div>
  </div>
);

const DetailRow: React.FC<Omit<InfoItem, 'Icon'>> = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-200 last:border-0">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const TimelineCard: React.FC<TimelineItem> = ({ title, startDate, endDate }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="text-sm text-gray-600">
      <div>Start: {startDate}</div>
      <div>End: {endDate}</div>
    </div>
  </div>
);

const VehicleInfoDisplay: React.FC<VehicleInfoProps> = ({
  vehicleInfo,
  details,
  timeline,
  className = ''
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Vehicle Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicleInfo.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>

      {/* Details and Timeline Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
          <div className="space-y-3">
            {details.map((detail, index) => (
              <DetailRow key={index} {...detail} />
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Important Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timeline.map((item, index) => (
              <TimelineCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfoDisplay;