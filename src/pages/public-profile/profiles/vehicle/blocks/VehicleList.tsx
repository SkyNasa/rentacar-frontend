import React, { useEffect, useMemo, useState } from 'react';
import { DataGrid } from '@/components';
import { getVehicles, VehicleDetails } from '@/api/cars';
import { Paginated } from '@/api/common';
import { ColumnDef } from '@tanstack/react-table';
import { toAbsoluteUrl } from '@/utils';
import { StatusDropdown } from '../StatusDropdown';
import { CarPlate } from '../blocks/CarPlate';
import { useNavigate } from 'react-router';

interface VehicleListProps {
  searchQuery?: string;
}

type ViewMode = 'grid' | 'card';

const VehicleList: React.FC<VehicleListProps> = ({ searchQuery = '' }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [vehicles, setVehicles] = useState<Paginated<VehicleDetails>>();

  useEffect(() => {
    getVehicles().then(setVehicles);
  }, []);

  const columns = useMemo<ColumnDef<VehicleDetails>[]>(
    () => [
      {
        accessorKey: 'customer.name',
        header: 'Owner',
        cell: ({ row }) => (
          <div className="flex items-center">
            <img
              src={row.original.customer.avatar}
              className="w-10 h-10 rounded-full mr-3"
              alt={row.original.customer.name}
            />
            <div>
              <div className="font-bold text-[#3F4254]">{row.original.customer.name}</div>
              <div className="text-[#B5B5C3]">{row.original.customer.email}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: 'vehicle.plate',
        header: 'Plate',
        cell: ({ row }) => <CarPlate plate={row.original.vehicle.plate} />
      },
      {
        accessorKey: 'brandName',
        header: 'Brand',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.vehicle.brandImage} className="w-9 h-9 object-cover" />
            <span className="text-[#3F4254]">{row.original.brandName}</span>
          </div>
        )
      },
      {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => (
          <div className="flex items-center gap-1">
            <img src={toAbsoluteUrl('/media/icons/manual.svg')} />
            <span>{row.original.type}</span>
          </div>
        )
      },
      {
        accessorKey: 'mileage',
        header: 'Mileage',
        cell: ({ row }) => (
          <div className="flex items-center gap-1">
            <img src={toAbsoluteUrl('/media/icons/gauge.svg')} />
            <span>{row.original.mileage} KM</span>
          </div>
        )
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <StatusDropdown
            selected={row.original.status}
            setSelected={() => {}}
            options={{
              Unavailable: {
                color: '#F1416C',
                backgroundColor: '#FFF5F8'
              },
              Maintenance: {
                color: '#FFA800',
                backgroundColor: '#FFF8EA'
              },
              Available: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              }
            }}
          />
        )
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: () => (
          <div className="flex gap-3">
            <a href="#" onClick={handleViewVehicleClick} className="p-2">
              <img src={toAbsoluteUrl('/media/icons/view-light.svg')} alt="View" />
            </a>
            <a href="#" className="p-2">
              <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} alt="Edit" />
            </a>
          </div>
        )
      }
    ],
    []
  );
  const navigate = useNavigate();
  const handleViewVehicleClick = () => {
    navigate('view-vehicle');
  };

  const renderVehicleCard = (vehicle: VehicleDetails) => (
    <div
      key={vehicle.vehicle.plate}
      className="flex flex-col flex-shrink-0 rounded-2xl border border-[#E7E8ED] w-full hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex flex-col gap-5 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <CarPlate plate={vehicle.vehicle.plate} />
          <StatusDropdown
            selected={vehicle.status}
            setSelected={() => {}}
            options={{
              Unavailable: {
                color: '#F1416C',
                backgroundColor: '#FFF5F8'
              },
              Maintenance: {
                color: '#FFA800',
                backgroundColor: '#FFF8EA'
              },
              Available: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              }
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[38px] sm:justify-between">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <img src={vehicle.customer.avatar} className="size-9 rounded-full aspect-square" />
              <div className="w-full sm:w-48 text-nowrap">
                <div className="text-[#3F4254] font-bold text-[15px] text-ellipsis overflow-hidden">
                  {vehicle.customer.name}
                </div>
                <div className="text-[#B5B5C3] font-medium text-2sm text-ellipsis overflow-hidden">
                  {vehicle.customer.email}
                </div>
              </div>
            </div>
          </div>
          <img
            src={vehicle.vehicle.brandImage}
            className="size-9 aspect-square object-cover mr-0.5"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div className="flex flex-wrap gap-4 sm:gap-[18px] text-[#72767C] font-dm-sans">
            <div className="flex gap-1">
              <img src={toAbsoluteUrl('/media/icons/gauge.svg')} />
              <span>{vehicle.mileage} KM</span>
            </div>
            <div className="flex gap-1">
              <img src={toAbsoluteUrl('/media/icons/manual.svg')} />
              <span>{vehicle.type}</span>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#3F4254] max-w-full sm:max-w-[92px] text-ellipsis overflow-hidden text-nowrap">
            {vehicle.brandName}
          </div>
        </div>
      </div>
      <div className="text-xs border-t flex justify-center">
        <a
          href="#"
          onClick={handleViewVehicleClick}
          className="px-5 py-2 flex gap-2 hover:bg-gray-50"
        >
          <img src={toAbsoluteUrl('/media/icons/view-light.svg')} />
          <span>View</span>
        </a>
        <a href="#" className="px-5 py-2 border-x flex gap-2 hover:bg-gray-50">
          <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} />
          <span>Edit</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="px-4 sm:px-7 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="card-title">
          <h3>Vehicle</h3>
          <h4 className="text-sm font-thin text-[#B5B5C3]">
            You have {vehicles?.totalCount}{' '}
            {(vehicles?.totalCount ?? 0 > 1) ? 'vehicles' : 'vehicle'}
          </h4>
        </div>
        <div className="flex items-center gap-4">
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
      <div className="gap-cols responsive-card">
        <div className="card-body pt-2 px-2 sm:px-6 pb-7">
          {viewMode === 'grid' ? (
            <DataGrid
              columns={columns}
              data={vehicles?.data ?? []}
              serverSide={false}
              filters={searchQuery.trim().length > 2 ? [{ id: '__any', value: searchQuery }] : []}
            />
          ) : (
            <div className="w-full">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {vehicles?.data.map(renderVehicleCard)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { VehicleList };
