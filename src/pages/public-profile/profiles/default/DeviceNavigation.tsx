import React from 'react';
import {
  InfoIcon,
  AIIcon,
  EditIcon,
  TelemetryIcon,
  CommandsIcon,
  LogsIcon,
  GroupsIcon,
  CalcsIcon,
  GeofenceIcon,
  StreamsIcon,
  PluginsIcon
} from '../default/blocks/icons';

const DeviceNavigation = () => {
  const navItems = [
    { icon: <InfoIcon />, label: 'INFO' },
    { icon: <AIIcon />, label: 'AI' },
    { icon: <EditIcon />, label: 'EDIT' },
    { icon: <TelemetryIcon />, label: 'TELEMETRY' },
    { icon: <CommandsIcon />, label: 'COMMANDS & SETTINGS' },
    { icon: <LogsIcon />, label: 'LOGS & MESSAGES' },
    { icon: <GroupsIcon />, label: 'GROUPS' },
    { icon: <CalcsIcon />, label: 'CALCS' },
    { icon: <GeofenceIcon />, label: 'GEOFENCES' },
    { icon: <StreamsIcon />, label: 'STREAMS' },
    { icon: <PluginsIcon />, label: 'PLUGINS' }
  ];

  return (
    <div className="w-full bg-gray-50 px-4 py-2">
      <div className="flex items-center justify-between space-x-4 overflow-x-auto">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-fit cursor-pointer hover:text-blue-600 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">{item.icon}</div>
            <span className="text-xs font-medium mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceNavigation;
