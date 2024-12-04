import React from 'react';
import { Icon1, Icon2, Icon3, Icon4 } from '../blocks/icons'; 

interface DeviceCardProps {
  deviceName: string;
  lastActive: string;
  icon1Count: number;
  icon2Count: number;
  icon3Count: number;
  icon4Count: number;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  deviceName,
  lastActive,
  icon1Count,
  icon2Count,
  icon3Count,
  icon4Count,
}) => {
  return (
    <div className="device-card p-4  rounded-lg shadow-sm">
      {/* Device Info Section */}
      <div className="device-name text-start font-semibold text-xl">{deviceName}</div>
      <div className="device-status text-start text-sm text-gray-500">Last active: {lastActive}</div>

      {/* Icon and Count Section */}
      <div className="flex items-center space-x-3 mt-4">
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <Icon1 className="text-blue-500 m-2" />
          <span>{icon1Count}</span>
        </div>
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <Icon2 className="text-blue-500 m-2" />
          <span>{icon2Count}</span>
        </div>
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <Icon3 className="text-blue-500 m-2" />
          <span>{icon3Count}</span>
        </div>
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <Icon4 className="text-blue-500 m-2" />
          <span>{icon4Count}</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
