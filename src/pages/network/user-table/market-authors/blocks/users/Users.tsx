/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { DataGrid, KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { UsersData, IUsersData } from './';
import { CommonRating } from '@/partials/common';

const Users = () => {
  const columns = useMemo<ColumnDef<IUsersData>[]>(
    () => [
      {
        accessorFn: (row: IUsersData) => row.user,
        id: 'users',
        header: () => 'Author', 
        enableSorting: true,
        cell: ({ row }) => {  // 'row' argumentini cell funksiyasiga qo'shdik
          return (
            <div className="flex items-center gap-2.5">
              <img
                src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
                className="rounded-full size-7 shrink-0"
                alt={`${row.original.user.userName}`}
              />

              <div className="flex flex-col">
                <Link to="#" className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px">
                  {row.original.user.userName}
                </Link>
                
                <span className="text-2sm text-gray-700 font-normal">
                  {row.original.user.description}
                </span> 
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[250px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.total,
        id: 'total',
        header: () => 'Earnings',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.total;
        },
        meta: {
          className: 'w-[150px]',
          cellClassName: 'font-normal text-gray-800'
        }
      },   
      {
        accessorFn: (row) => row.team,
        id: 'team',
        header: () => 'Team',
        enableSorting: true,
        cell: (info) => {                    
          return (
            
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              <img 
                src={toAbsoluteUrl(`/media/brand-logos/${info.row.original.team.logo}`)} 
                className="w-5 shrinc-0"
                alt={``}
              />
              {info.row.original.team.label}
            </div>
          );
        }, 
        meta: {
          className: 'min-w-[175px]' 
        }
      },   
      {
        accessorFn: (row) => row.products,
        id: 'products',
        header: () => 'Products',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.products;
        },
        meta: {
          className: 'min-w-[150px]',
          cellClassName: 'font-normal text-gray-800'
        }
      },    
      {
        accessorFn: (row) => row.rating.value,
        id: 'rating',
        header: () => 'Rating',
        enableSorting: true,
        cell: (info) => (
          <CommonRating
            rating={info.row.original.rating.value}
            round={info.row.original.rating.round}
          />
        ),
        meta: {
          className: 'w-[150px]',
          cellClassName: 'text-gray-700 font-normal'
        } 
      },
      {
        id: 'social',
        header: () => 'Social Profiles',
        enableSorting: false,
        cell: () => {                    
          return (
            <div className="flex items-center gap-2.5">
              <Link to="#">
                <KeenIcon icon="facebook" className='text-gray-500 text-lg'/> 
              </Link>

              <Link to="#">
                <KeenIcon icon="dribbble" className='text-gray-500 text-lg'/> 
              </Link>

              <Link to="#">
                <KeenIcon icon="tiktok" className='text-gray-500 text-lg'/> 
              </Link> 
            </div>
          );
        },
        meta: {
          className: 'w-[150px]'
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
      },      
        
    ],
    []
  );

  const data: IUsersData[] = useMemo(() => UsersData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header flex-wrap gap-2">
        <h3 className="card-title font-medium text-sm">Showing 10 of 49,053 users</h3>

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
          sorting={[{ id: 'team', desc: false }]}
        />
      </div>
    </div>
  );
};

export { Users };
