import { DataGrid } from '@/components';
import { getMaintenance, Maintenance } from '@/api/cars';
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { format } from 'date-fns/fp';
import { toAbsoluteUrl } from '@/utils';
import { StatusDropdown } from '../StatusDropdown';
import { useNavigate } from 'react-router-dom';

interface ViolationTableProps {
  searchQuery: string;
}

const MaintenanceTable = ({ searchQuery }: ViolationTableProps) => {
  const navigate = useNavigate();
  const columns = useMemo<ColumnDef<Maintenance>[]>(
    () => [
      {
        accessorFn: (row) => row.date,
        id: 'date',
        header: () => 'Date',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">
            {format('MMM d, yyyy', info.row.original.date)}
          </span>
        ),
        meta: {
          className: 'min-w-36'
        }
      },

      {
        accessorFn: (row) => row.type,
        id: 'type',
        header: () => 'Type',
        enableSorting: true,
        cell: (info) => <span className="text-gray-800 font-bold">{info.row.original.type}</span>,
        meta: {
          className: 'min-w-36'
        }
      },
      {
        accessorFn: (row) => row.supplier,
        id: 'supplier',
        header: () => 'Supplier',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">{info.row.original.supplier}</span>
        ),
        meta: {
          className: 'min-w-36'
        }
      },
      {
        accessorFn: (row) => row.price,
        id: 'price',
        header: () => 'Price',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'TRY'
            }).format(info.row.original.price)}
          </span>
        )
      },
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => (
          <StatusDropdown
            selected={info.row.original.status}
            setSelected={() => {}}
            options={{
              'In Maintenance': {
                color: '#FFA800',
                backgroundColor: '#FFF8EA'
              },
              Completed: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              }
            }}
          />
        ),
        meta: {
          className: 'min-w-44'
        }
      },
      {
        id: 'actions',
        header: () => 'Actions',
        cell: (
          info // TODO: Add links
        ) => (
          <div className="flex gap-3">
            <a href="#"
            onClick={() => navigate('/maintenance/maintenance/view-maintenance')}>
              <img src={toAbsoluteUrl('/media/icons/view.svg')} />
            </a>
            <a href="#">
              <img src={toAbsoluteUrl('/media/icons/edit.svg')} />
            </a>
          </div>
        ),
        meta: {
          className: 'min-w-36'
        }
      }
    ],
    []
  );

  return (
    <div>
      
      <h1 className="text-xl font-bold mb-4">Maintenance List</h1>
      <DataGrid
        columns={columns}
        filters={searchQuery.trim().length > 2 ? [{ id: '__any', value: searchQuery }] : []}
        serverSide={true}
        onFetchData={getMaintenance}
        pagination={{ sizes: [], size: 4 }}
      />
    </div>
  );
};

export { MaintenanceTable };
