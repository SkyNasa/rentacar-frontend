import React, { useMemo, useState } from 'react';
import { DataGrid } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router';
import { StatusDropdown } from '../StatusDropdown';
import { DriverList } from './customersGrid';
import { toAbsoluteUrl } from '@/utils';

interface Reservation {
  number: string;
  date: string;
  car: {
    plate: string;
    brand: string;
    model: string;
    icon: string;
  };
  owner: {
    name: string;
    avatar: string;
    email: string;
  };
  status: 'Active' | 'Under Review';
}

const mockData: Reservation[] = [
  {
    number: '525144',
    date: '2024-03-15',
    car: {
      plate: 'ABC123',
      brand: 'Toyota',
      model: 'Camry',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'John Smith',
      avatar: '/api/placeholder/40/40',
      email: 'john.smith@example.com'
    },
    status: 'Active'
  },
  {
    number: '525145',
    date: '2024-03-14',
    car: {
      plate: 'XYZ789',
      brand: 'Honda',
      model: 'Civic',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'Jane Doe',
      avatar: '/api/placeholder/40/40',
      email: 'jane.doe@example.com'
    },
    status: 'Under Review'
  }
];

interface CustomersListProps {
  searchQuery?: string;
}

const CustomersList: React.FC<CustomersListProps> = ({ searchQuery = '' }) => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'table' | 'grid'>('table');
  const [filterActive, setFilterActive] = useState(false);

  const handleViewCustomerClick = () => {
    navigate('view-customer');
  };

  const columns = useMemo<ColumnDef<Reservation>[]>(
    () => [
      {
        accessorKey: 'number',
        header: 'Order Number',
        cell: ({ row }) => <span className="text-gray-800 font-bold">{row.original.number}</span>
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
        cell: ({ row }) => (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={row.original.owner.avatar}
                alt={row.original.owner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold">{row.original.owner.name}</div>
              <div className="text-gray-500">{row.original.owner.email}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: 'car',
        header: 'Car',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.car.icon} alt={row.original.car.model} className="w-8 h-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">TR</span>
                <span>{row.original.car.plate}</span>
              </div>
              <div className="text-gray-400 text-sm">{row.original.car.model}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }) => <span className="text-gray-800">{row.original.date}</span>
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <StatusDropdown
            selected={row.original.status}
            setSelected={() => {}}
            options={{
              Active: { color: '#50CD89', backgroundColor: '#EEFAF4' },
              'Under Review': { color: '#FFA800', backgroundColor: '#FFF8EA' }
            }}
          />
        )
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: () => (
          <div className="text-xs flex justify-center">
            <a
              href="#"
              onClick={handleViewCustomerClick}
              className="px-5 py-2 flex gap-2 hover:bg-gray-50"
            >
              <img src={toAbsoluteUrl('/media/icons/view-light.svg')} />
            </a>
            <a href="#" className="px-5 py-2 flex gap-2 hover:bg-gray-50">
              <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} />
            </a>
          </div>
        )
      }
    ],
    [handleViewCustomerClick]
  );

  const filteredData = useMemo(() => {
    if (!searchQuery) return mockData;
    const query = searchQuery.toLowerCase();
    return mockData.filter(
      (item) =>
        item.owner.name.toLowerCase().includes(query) ||
        item.owner.email.toLowerCase().includes(query) ||
        item.number.includes(query) ||
        item.car.plate.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="p-6">
      {/* Toolbar */}
      <div className="flex items-center justify-end mb-4 w-full">
        <div className="flex items-center gap-4">
          <div className="flex gap-1 border rounded-lg p-1">
            <button
              className={`p-2 rounded transition-colors ${currentView === 'table' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'}`}
              onClick={() => setCurrentView('table')}
              title="Table View"
            >
              <i className="ki-filled ki-row-horizontal text-xl" />
            </button>
            <button
              className={`p-2 rounded transition-colors ${currentView === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'}`}
              onClick={() => setCurrentView('grid')}
              title="Grid View"
            >
              <i className="ki-filled ki-category text-xl" />
            </button>
          </div>
          <button
            className={`py-2 px-4 rounded ${filterActive ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setFilterActive(!filterActive)}
          >
            Filters
          </button>
          <button className="py-2 px-4 rounded bg-gray-200">Export</button>
        </div>
        <input type="text" placeholder="Search..." className="border px-4 py-2 rounded" />
      </div>

      {/* Conditional Rendering */}
      {currentView === 'table' ? (
        <DataGrid columns={columns} data={filteredData} serverSide={false} />
      ) : (
        <DriverList data={filteredData} />
      )}
    </div>
  );
};

export { CustomersList };
