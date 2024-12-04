import React, { useMemo } from 'react';
import { DataGrid } from '@/components';
import { getUsers, User } from '@/api/users';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { toAbsoluteUrl } from '@/utils';
import { useNavigate } from 'react-router';
import { StatusDropdown } from '../StatusDropdown';

interface UserListProps {
  searchQuery?: string;
}

const UserList: React.FC<UserListProps> = ({ searchQuery = '' }) => {
  const navigate = useNavigate();
  const handleViewUserClick = () => {
    navigate('view-user');
  };
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: true,
        cell: ({ row }) => <span className="text-gray-800 font-bold">{row.original.id}</span>
      },
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
              <div className="text-gray-500">{row.original.email}</div>
            </div>
          </div>
        )
      },
      {
        accessorKey: '',
        header: 'Date',
        enableSorting: true,
        cell: ({ row }) => (
          <span className="text-gray-800">{format(row.original.date, 'MMM d, yyyy')}</span>
        )
      },
      {
        accessorKey: 'role',
        header: 'Role',
        enableSorting: true,
        cell: ({ row }) => <span className="text-gray-800 font-bold">{row.original.role}</span>
      },
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
       
        cell: (info) => (
          <StatusDropdown
            selected={info.row.original.status}
            setSelected={() => {}}
            options={{
              Active: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              },
              Suspended: {
                color: '#FFA800',
                backgroundColor: '#FFF8EA'
              },
              'Pending Activation': {
                color: '#5271FF',
                backgroundColor: '#EEFAFF'
              },
              Deactivated: {
                color: '#F1416C',
                backgroundColor: '#FFF5F8'
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
        cell: (info) => (
          <div className="flex gap-3">
            <a href="#" onClick={handleViewUserClick}>
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
    <DataGrid
      columns={columns}
      data={[]} // Temporary empty array
      serverSide={true}
      onFetchData={getUsers}
      filters={searchQuery.trim().length > 2 ? [{ id: '__any', value: searchQuery }] : []}
    />
  );
};

export { UserList };
