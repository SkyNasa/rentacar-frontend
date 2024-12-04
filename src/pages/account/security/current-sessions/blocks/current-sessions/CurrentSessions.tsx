/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';

import { CurrentSessionsData, ICurrentSessionsData } from '.';

const CurrentSessions = () => {
  const columns = useMemo<ColumnDef<ICurrentSessionsData>[]>(
    () => [
      {
        accessorFn: (row) => row.user,
        id: 'user',
        header: () => 'Person',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={toAbsoluteUrl(`/media/avatars/${info.row.original.user.avatar}`)}
                className="h-9 rounded-full"
                alt=""
              />
            </div>
            <a className="leading-none font-semibold text-gray-900 hover:text-primary" href="#">
              {info.row.original.user.name}
            </a>
          </div>
        ),
        meta: {
          className: 'min-w-[300px]'
        },
      },
      {
        accessorFn: (row) => row.browser,
        id: 'browser',
        header: () => 'Browser',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-2">
            <KeenIcon icon={info.row.original.browser.icon} className='text-gray-700 text-lg' />
            <span className="text-gray-700">{info.row.original.browser.name}</span>
          </div>
        ),
        meta: {
          className: 'min-w-[240px]',
        },
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: () => 'IP Address',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[240px]',
        },
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
              className="h-4 rounded-full"
              alt=""
            />
            <span className="leading-none text-gray-700">{info.row.original.location.name}</span>
          </div>
        ),
        meta: {
          className: 'w-[200px]',
        },
      },
      {
        id: 'click',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-icon btn-light btn-clear btn-sm" 
            onClick={() => alert(`Clicked on action button for row ${row.original.user.name}`)}
          >
            <KeenIcon icon="dots-vertical" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    []
  );

  const data: ICurrentSessionsData[] = useMemo(() => CurrentSessionsData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Current Sessions</h3>

        <div className="flex gap-5">
          <label className="switch switch-sm">
            <span className="switch-label">
              Only Active Users
            </span>
            <input name="check" type="checkbox" value="1" readOnly />
          </label>
          <div className="flex gap-3">
            <select className="select select-sm min-w-32" data-datatable-filter-column="browser">
              <option value="">All Browsers</option>
              <option value="chrome">Chrome</option>
              <option value="firefox">Firefox</option>
              <option value="edge">Edge</option>
              <option value="safari">Safari</option>
              <option value="Brave">Brave</option>
            </select>

            <select className="select select-sm min-w-32">
              <option>All Locations</option>
              <option value="uk">London</option>
              <option value="us">USA</option>
              <option value="jp">Japan</option>
              <option value="my">Malaysia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'user', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { CurrentSessions };
