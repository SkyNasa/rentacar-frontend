import React, { useEffect, useMemo, useState } from 'react';
import { DataGrid } from '@/components';
import { getVehicles, VehicleDetails } from '@/api/cars';
import { Paginated } from '@/api/common';
import { ColumnDef } from '@tanstack/react-table';
import { toAbsoluteUrl } from '@/utils';
import { StatusDropdown } from '../StatusDropdown';
import { useNavigate } from 'react-router';

interface ReservationDetails {
  id: string;
  pickupDate: string;
  dropoffDate: string;
  car: {
    brand: string;
    model: string;
    plate: string;
    brandImage: string;
  };
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  price: number;
  status: 'New' | 'Confirmed' | 'In Progress' | 'Canceled' | 'Completed';
}

interface ReservationListProps {
  searchQuery?: string;
}

type ViewMode = 'grid' | 'card';

const getStatusColor = (status: string) => {
  const colors = {
    New: { color: '#50CD89', backgroundColor: '#E8FFF3' },
    Confirmed: { color: '#7239EA', backgroundColor: '#F8F5FF' },
    'In Progress': { color: '#FFA800', backgroundColor: '#FFF8DD' },
    Canceled: { color: '#F1416C', backgroundColor: '#FFF5F8' },
    Completed: { color: '#009EF7', backgroundColor: '#F1FAFF' }
  };
  return colors[status as keyof typeof colors];
};

const ReservationsList: React.FC<ReservationListProps> = ({ searchQuery = '' }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [reservations, setReservations] = useState<Paginated<ReservationDetails>>();
  const navigate = useNavigate();

  useEffect(() => {
    // Replace this with your API call or static data for now
    const mockReservations = {
      data: [
        {
          id: '1',
          pickupDate: '2024-12-01T10:00:00',
          dropoffDate: '2024-12-05T10:00:00',
          car: {
            brand: 'Toyota',
            model: 'Corolla',
            plate: '34 XYZ 456',
            brandImage: '/media/car-brands/toyota.png', // Placeholder for a real image path
          },
          customer: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            avatar: '/media/customers/john.png', // Placeholder for a real image path
          },
          price: 120,
          status: 'Confirmed',
        },
        {
          id: '2',
          pickupDate: '2024-12-02T15:30:00',
          dropoffDate: '2024-12-06T12:00:00',
          car: {
            brand: 'BMW',
            model: 'X5',
            plate: '06 ABC 789',
            brandImage: '/media/car-brands/bmw.png',
          },
          customer: {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            avatar: '/media/customers/jane.png',
          },
          price: 200,
          status: 'In Progress',
        },
        {
          id: '3',
          pickupDate: '2024-12-03T09:00:00',
          dropoffDate: '2024-12-08T18:00:00',
          car: {
            brand: 'Audi',
            model: 'A6',
            plate: '34 DEF 123',
            brandImage: '/media/car-brands/audi.png',
          },
          customer: {
            name: 'Ali Khan',
            email: 'alikhan@example.com',
            avatar: '/media/customers/ali.png',
          },
          price: 180,
          status: 'New',
        },
      ],
      totalCount: 3,
    };
  
    setReservations(mockReservations as any);
  }, []);
  

  const columns = useMemo<ColumnDef<ReservationDetails>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Number',
        cell: ({ row }) => (
          <span className="font-medium text-gray-700">{row.original.id}</span>
        )
      },
      {
        accessorKey: 'pickupDate',
        header: 'Pickup Date',
        cell: ({ row }) => (
          <div className="text-gray-700">
            <div>{new Date(row.original.pickupDate).toLocaleDateString()}</div>
            <div className="text-sm text-gray-500">
              {new Date(row.original.pickupDate).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        )
      },
      {
        accessorKey: 'dropoffDate',
        header: 'Drop off Date',
        cell: ({ row }) => (
          <div className="text-gray-700">
            <div>{new Date(row.original.dropoffDate).toLocaleDateString()}</div>
            <div className="text-sm text-gray-500">
              {new Date(row.original.dropoffDate).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        )
      },
      {
        accessorKey: 'car',
        header: 'Car',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.car.brandImage} className="w-8 h-8" alt="Brand" />
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-[#4086F4] text-white px-2 py-1 rounded text-xs">TR</div>
                <span className="font-medium">{row.original.car.plate}</span>
              </div>
              <div className="text-sm text-gray-500">{row.original.car.brand}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: 'customer',
        header: 'Customer',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img 
              src={row.original.customer.avatar} 
              className="w-10 h-10 rounded-full"
              alt={row.original.customer.name}
            />
            <div>
              <div className="font-medium">{row.original.customer.name}</div>
              <div className="text-sm text-gray-500">{row.original.customer.email}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => (
          <span className="font-medium">{row.original.price} $</span>
        )
      },
      {
        accessorKey: 'status',
        header: 'STATUS',
        cell: ({ row }) => {
          const style = getStatusColor(row.original.status);
          return (
            <div 
              className="px-3 py-1 rounded-md text-sm inline-flex items-center gap-1"
              style={style}
            >
              <span>{row.original.status}</span>
              <i className="ki-duotone ki-arrow-down fs-5"></i>
            </div>
          );
        }
      },
      {
        id: 'actions',
        header: 'Action',
        cell: () => (
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={toAbsoluteUrl('/media/icons/view-light.svg')} alt="View" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} alt="Edit" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <i className="ki-duotone ki-dots-square fs-2"></i>
            </button>
          </div>
        )
      }
    ],
    []
  );

  return (
    <div className="card">
      <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b">
        <div>
          <h3 className="text-xl font-medium">Reservations List</h3>
          <div className="flex items-center gap-2 mt-1">
            <button className="text-sm text-gray-500 hover:text-gray-700">Filters</button>
            <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <i className="ki-duotone ki-magnifier fs-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          <div className="flex gap-1 border rounded-lg p-1">
            <button
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'
              }`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <i className="ki-filled ki-row-horizontal text-xl" />
            </button>
            <button
              className={`p-2 rounded transition-colors ${
                viewMode === 'card' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'
              }`}
              onClick={() => setViewMode('card')}
              title="Card View"
            >
              <i className="ki-filled ki-category text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <DataGrid
          columns={columns}
          data={reservations?.data ?? []}
          serverSide={false}
          filters={searchQuery.trim().length > 2 ? [{ id: '__any', value: searchQuery }] : []}
        />
      </div>
    </div>
  );
};

export { ReservationsList };