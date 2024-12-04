/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { DataGrid, KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { UsersData, IUsersData } from './';

const Users = () => {
  const columns = useMemo<ColumnDef<IUsersData>[]>(
    () => [
      {
        accessorFn: (row: IUsersData) => row.user,
        id: 'users',
        header: () => 'Member', 
        enableSorting: true,
        cell: ({ row }) => {  // 'row' argumentini cell funksiyasiga qo'shdik
          return (
            
            <div className="flex items-center gap-4">
              <img
                src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
                className="rounded-full size-9 shrink-0"
                alt={`${row.original.user.userName}`}
              />

              <div className="flex flex-col gap-0.5">
                <Link to="#" className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px">
                  {row.original.user.userName}
                </Link>
                
                <Link to="#" className="text-2sm text-gray-700 font-normal hover:text-primary-active">
                  {row.original.user.userGmail}
                </Link> 
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[300px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.role,
        id: 'role',
        header: () => 'Pole',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.role;
        },
        meta: {
          className: 'min-w-[180px]',
        }
      },   
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => {                    
          return (
            <span className={`badge badge-${info.row.original.status.color} shrink-0 badge-outline rounded-[30px]`}>
              <span className={`size-1.5 rounded-full bg-${info.row.original.status.color} me-1.5`}></span>
              {info.row.original.status.label}
            </span>
          );
        },
        meta: {
          className: 'min-w-[180px]' 
        }
      },
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => {                    
          return (
            
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              <img
                src={toAbsoluteUrl(`/media/flags/${info.row.original.flag}`)}
                className="rounded-full size-4 shrink-0"
                alt={`${info.row.original.user.userName}`}
              />
              {info.row.original.location}
            </div>
          );
        }, 
        meta: {
          className: 'min-w-[180px]' 
        }
      },    
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: () => 'Activity',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.activity;
        },
        meta: {
          className: 'min-w-[180px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <button className="btn btn-sm btn-icon btn-clear btn-light">
              <KeenIcon icon="dots-vertical" /> 
            </button>
          );
        },
        meta: {
          className: 'w-[60px]'
        }
      }
    ],
    []
  );

  const data: IUsersData[] = useMemo(() => UsersData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header flex-wrap gap-2">
        <h3 className="card-title font-medium text-sm">Showing 20 of 68 users</h3>

				<div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input placeholder="Search users" type="text" value="" readOnly />
            </label>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <select className="select select-sm w-28">
              <option value="1">Active</option>
              <option value="2">Disabled</option>
              <option value="2">Pending</option>
            </select>

            <select className="select select-sm w-28">
              <option value="1">Latest</option>
              <option value="2">Older</option>
              <option value="3">Oldest</option>
            </select>

            <button className="btn btn-sm btn-outline btn-primary">
              <KeenIcon icon="setting-4" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 5 }}
          sorting={[{ id: 'users', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { Users };
