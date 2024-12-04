import React, { useMemo } from 'react';
import { DataGrid } from '@/components';
import { getDrivers, Driver } from '@/api/drivers';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { CarView } from '../../../../../pages/dashboards/dashboard/blocks/CarView';

import { StatusDropdown } from './maintenance/StatusDropdown';
import { toAbsoluteUrl } from '@/utils';
import { useNavigate } from 'react-router';

interface DriverListProps {
  searchQuery?: string;
}

const DriverList: React.FC<DriverListProps> = ({ searchQuery = '' }) => {
  const columns = useMemo<ColumnDef<Driver>[]>(
    () => [
      {
        accessorKey: 'owner',
        header: 'Owner',
        cell: ({ row }) => (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              {row.original.owner.charAt(0)}
            </div>
            <div>
              <div className="font-bold">{row.original.owner}</div>
            </div>
          </div>
        )
      },
      {
        accessorFn: (row) => row.vehicle,
        id: 'vehicle',
        header: () => 'Car',

        cell: (info) => <CarView vehicle={info.row.original.vehicle} />,
        meta: {
          className: 'min-w-60'
        }
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <StatusDropdown
            selected={row.original.status}
            setSelected={() => {}}
            options={{
              'Under Review': {
                color: '#FFA800',
                backgroundColor: '#FFF8EA'
              },
              Active: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              }
            }}
          />
        )
      },
      {
        accessorKey: 'date',
        header: 'Date',
        enableSorting: true,
        cell: ({ row }) => (
          <span className="text-gray-800">{format(row.original.date, 'MMM d, yyyy')}</span>
        )
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: () => (
          <div className="flex gap-3">
            <a href="#" onClick={handleViewDriverClick}>
              <img src={toAbsoluteUrl('/media/icons/view.svg')} />
            </a>
            <a href="#">
              <img src={toAbsoluteUrl('/media/icons/edit.svg')} />
            </a>
          </div>
        )
      }
    ],
    []
  );
  const navigate = useNavigate();
  const handleViewDriverClick = () => {
    navigate('view-driver');
  };

  return (
    <DataGrid
      columns={columns}
      data={[]}
      serverSide={true}
      onFetchData={getDrivers}
      filters={searchQuery.trim().length > 2 ? [{ id: '__any', value: searchQuery }] : []}
    />
  );
};

export { DriverList };
