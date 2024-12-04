import React from 'react';
import { MoreVertical, SignalHigh } from 'lucide-react';

// Updated sample data with more items
const sampleData = [
  {
    serverTimestamp: '2024-10-16 11:09:46',
    id: '1729066039.718185',
    signal: 165,
    status: 'default' // default, selected, success, warning
  },
  {
    serverTimestamp: '2024-10-16 12:15:30',
    id: '1729066040.912340',
    signal: 180,
    status: 'success'
  },
  {
    serverTimestamp: '2024-10-16 13:22:10',
    id: '1729066041.726394',
    signal: 120,
    status: 'warning'
  },
  {
    serverTimestamp: '2024-10-16 14:08:25',
    id: '1729066042.183920',
    signal: 140,
    status: 'selected'
  },
  {
    serverTimestamp: '2024-10-16 15:45:50',
    id: '1729066043.478290',
    signal: 95,
    status: 'default'
  },{
    serverTimestamp: '2024-10-16 11:09:46',
    id: '1729066039.718185',
    signal: 165,
    status: 'default' // default, selected, success, warning
  },
  {
    serverTimestamp: '2024-10-16 12:15:30',
    id: '1729066040.912340',
    signal: 180,
    status: 'success'
  },
  {
    serverTimestamp: '2024-10-16 13:22:10',
    id: '1729066041.726394',
    signal: 120,
    status: 'warning'
  },
  {
    serverTimestamp: '2024-10-16 14:08:25',
    id: '1729066042.183920',
    signal: 140,
    status: 'selected'
  },
  {
    serverTimestamp: '2024-10-16 15:45:50',
    id: '1729066043.478290',
    signal: 95,
    status: 'default'
  },{
    serverTimestamp: '2024-10-16 11:09:46',
    id: '1729066039.718185',
    signal: 165,
    status: 'default' // default, selected, success, warning
  },
  {
    serverTimestamp: '2024-10-16 12:15:30',
    id: '1729066040.912340',
    signal: 180,
    status: 'success'
  },
  {
    serverTimestamp: '2024-10-16 13:22:10',
    id: '1729066041.726394',
    signal: 120,
    status: 'warning'
  },
  {
    serverTimestamp: '2024-10-16 14:08:25',
    id: '1729066042.183920',
    signal: 140,
    status: 'selected'
  },
  {
    serverTimestamp: '2024-10-16 15:45:50',
    id: '1729066043.478290',
    signal: 95,
    status: 'default'
  },
  {
    serverTimestamp: '2024-10-16 15:45:50',
    id: '1729066043.478290',
    signal: 95,
    status: 'default'
  }
];

const MaintenanceList = ({ items = sampleData }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Maintenance List</h1>
        <div className="flex gap-4">
          {/* Filters Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border shadow-sm text-sm">
            Filters <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">2</span>
          </button>
          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border shadow-sm text-sm">
            Export
          </button>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-8 pr-4 py-2 border rounded-md text-sm w-56 shadow-sm"
            />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</span>

          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-sm transition-colors duration-200 ${
              item.status === 'selected'
                ? 'bg-gray-50 border-blue-400'
                : item.status === 'success'
                  ? 'bg-green-50 border-green-400'
                  : item.status === 'warning'
                    ? 'bg-yellow-50 border-yellow-400'
                    : 'bg-white border-gray-300'
            }`}
          >
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">server.timestamp</h3>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-500">{item.serverTimestamp}</p>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 truncate">{item.id}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">{item.signal}</span>
                <SignalHigh size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceList;
