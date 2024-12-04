import { useMemo, useState } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { DataGrid, KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { UsersData, IUsersData } from './';

const Users = () => {
  const [users, setUsers] = useState<IUsersData[]>(UsersData); // Initialize state with UsersData

  const handleToggle = (index: number) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = {
        ...updatedUsers[index],
        switch: !updatedUsers[index].switch // Toggle the switch state
      };
      return updatedUsers;
    });
  };

  const columns = useMemo<ColumnDef<IUsersData>[]>(
    () => [
      {
        accessorFn: (row: IUsersData) => row.user,
        id: 'users',
        header: () => 'Users',
        enableSorting: true,
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2.5">
              <img
                src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
                className="rounded-full size-7 shrink-0"
                alt={`${row.original.user.userName}`}
              />

              <Link to="#" className="text-sm font-medium text-gray-900 hover:text-primary-active">
                {row.original.user.userName}
              </Link>
            </div>
          );
        },
        meta: {
          className: 'min-w-[200px]',
          cellClassName: 'font-normal text-gray-800'
        }
      },
      {
        accessorFn: (row) => row.phone,
        id: 'phone',
        header: () => 'Phone',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.phone;
        },
        meta: {
          className: 'min-w-[165px]',
          cellClassName: 'font-normal text-gray-800'
        }
      },
      {
        accessorFn: (row) => row.branch,
        id: 'branch',
        header: () => 'Branch',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.branch;
        },
        meta: {
          className: 'min-w-[165px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.logos,
        id: 'image',
        header: () => 'Connected Apps',
        enableSorting: true,
        cell: (info) => {
          return (
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              {Array.isArray(info.row.original.logos) &&
                info.row.original.logos.map((logo, index) => (
                  <img
                    key={index}
                    src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
                    className="size-[18px] shrinc-0"
                    alt={``}
                  />
                ))}
            </div>
          );
        },
        meta: {
          className: 'min-w-[165px]'
        }
      },
      {
        accessorFn: (row) => row.labels,
        id: 'label',
        header: () => 'Tags',
        enableSorting: true,
        cell: (info) => {
          return (
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              {Array.isArray(info.row.original.labels) &&
                info.row.original.labels.map((label, index) => (
                  <span key={index} className="badge badge-sm">
                    {label}
                  </span>
                ))}
            </div>
          );
        },
        meta: {
          className: 'min-w-[225px]'
        }
      },
      {
        accessorFn: (row) => row.switch,
        id: 'switch',
        header: () => 'Enforce 2FA',
        enableSorting: true,
        cell: ({ row }) => {
          const userSwitch = row.original.switch; // Har bir foydalanuvchining switch holati
          return (
            <div className="flex items-center mb-2">
              <label className="switch switch-sm">
                <input
                  type="checkbox"
                  checked={userSwitch}
                  onChange={() => handleToggle(row.index)} // Use row.index for the correct user
                />
                <span className="slider round"></span>
              </label>
            </div>
          );
        },
        meta: {
          className: 'min-w-[100px]'
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

  const data: IUsersData[] = useMemo(() => users, [users]); // Use users state

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
          sorting={[{ id: 'phone', desc: false }]}
        />
      </div>
    </div>
  );
};

export { Users };
