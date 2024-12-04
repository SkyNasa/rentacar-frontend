import { useMemo } from 'react';
import { DataGrid, KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { toAbsoluteUrl } from '@/utils';
import { StoreClientsData, IStoreClientsData } from '.';

const StoreClients = () => {
  const columns = useMemo<ColumnDef<IStoreClientsData>[]>(
    () => [
      {
        accessorFn: (row) => row.user,
        id: 'user',
        header: () => 'Member',
        enableSorting: true,
        cell: (info: any) => (
          <div className="flex items-center gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${info.row.original.user.avatar}`)}
              className="size-7 rounded-full shrink-0"
              alt=""
            />
            <div className="flex flex-col">
              <a
                className="font-medium text-sm text-gray-900 hover:text-primary-active mb-px"
                href="#"
              >
                {info.row.original.user.name}
              </a>
              <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                {info.row.original.user.email}
              </a>
            </div>
          </div>
        ),
        meta: {
          className: 'min-w-[300px]'
        }
      },
      {
        accessorFn: (row) => row.clientId,
        id: 'clientId',
        header: () => 'Client ID',
        enableSorting: true,
        cell: (info: any) => info.row.original.clientId,
        meta: {
          className: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.ordersValue,
        id: 'ordersValue',
        header: () => 'Orders Value',
        enableSorting: true,
        cell: (info: any) => info.row.original.ordersValue,
        meta: {
          className: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${info.row.original.location.flag}`)}
              className="size-4 rounded-full shrink-0"
              alt=""
            />
            <span className="text-gray-800 font-normal">{info.row.original.location.name}</span>
          </div>
        ),
        meta: {
          className: 'min-w-[150px]'
        }
      },
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: () => 'Activity',
        enableSorting: true,
        cell: (info: any) => info.row.original.activity,
        meta: {
          className: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        id: 'actions',
        header: () => 'Invoices',
        enableSorting: true,
        cell: () => <button className="btn btn-link">View</button>,
        meta: {
          className: 'min-w-[100px]',
          cellClassName: 'text-center'
        }
      },
      {
        id: 'dots',
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

  const data: IStoreClientsData[] = useMemo(() => StoreClientsData, []);

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
              <option value="3">Pending</option>
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
          sorting={[{ id: 'user', desc: false }]}
        />
      </div>
    </div>
  );
};

export { StoreClients };
