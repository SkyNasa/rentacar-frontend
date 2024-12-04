import React, { useState } from 'react';

interface GeofenceListProps {
  items: string[];
  title?: string;
  className?: string;
  onItemClick?: (item: string) => void;
  searchPlaceholder?: string;
}

const GeofenceList: React.FC<GeofenceListProps> = ({
  items,
  title = "Geofences",
  className = "",
  onItemClick,
  searchPlaceholder = "Search..."
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md  flex-grow ${className}`}>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">25 Geofence</p>
      <div className="relative mb-4 flex items-center">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ml-2 bg-blue-500 text-white p-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto h-80 md:h-60">
        <ul className="space-y-2">
          {filteredItems.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className="p-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                onClick={() => onItemClick?.(item)}
              >
                {item}
              </li>
              {index !== filteredItems.length - 1 && (
                <hr className="border-t-2 border-dashed" />
              )}
            </React.Fragment>
          ))}
        </ul>
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 py-4">No items found</p>
        )}
      </div>
    </div>
  );
};

export default GeofenceList;
