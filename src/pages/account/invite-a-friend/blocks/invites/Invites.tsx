/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import { DataGrid, KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils';

import { DropdownCrudItem1 } from '@/partials/dropdowns/general';

import { InvitesData, IInvitesData } from '.';

const Invites = () => {
  const { isRTL } = useLanguage();
  const storageFilterId = 'teams-filter';

  const columns = useMemo<ColumnDef<IInvitesData>[]>(
    () => [
      {
        accessorFn: (row) => row.member,
        id: 'member',
        header: () => 'Member',
        enableSorting: true,
        cell: (info) => {
          return (
            <div className="flex items-center gap-2.5">
              <div>
                <img
                  src={toAbsoluteUrl(`/media/avatars/${info.row.original.member.avatar}`)}
                  className="h-9 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <Link
                  className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                  to="/network/user-cards/mini-cards"
                >
                  {info.row.original.member.name}
                </Link>
                <span className="text-2sm text-gray-700 font-normal">
                  {info.row.original.member.tasks} tasks
                </span>
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[250px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => {
          return (
            <div className="flex items-center gap-1.5">
              <img
                src={toAbsoluteUrl(`/media/flags/${info.row.original.location.flag}`)}
                className="h-4 rounded-full"
                alt=""
              />
              <span className="leading-none text-gray-800 font-normal">
                {info.row.original.location.name}
              </span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[120px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.status,
        id: 'status',
        enableSorting: true,
        header: () => 'Status',
        cell: (info) => {
          return (
            <span className={`badge badge-xs badge-outline ${info.row.original.status.variant} items-center`}>
              <span className={info.row.original.status.variant}></span>
              {info.row.original.status.label}
            </span>
          );
        },
        meta: {
          className: 'min-w-[103px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.recentlyActivity,
        id: 'recentlyActivity',
        header: () => 'Recent activity',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[160px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        id: 'click',
        header: () => '',
        enableSorting: false,
        cell: () => (
          <Menu className="items-stretch">
            <MenuItem
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: isRTL() ? 'bottom-start' : 'bottom-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: isRTL() ? [0, -10] : [0, 10] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
                <KeenIcon icon="dots-vertical" />
              </MenuToggle>
              {DropdownCrudItem1()}
            </MenuItem>
          </Menu>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    [isRTL]
  );

  // Memoize the team data
  const data: IInvitesData[] = useMemo(() => InvitesData, []);

  // Initialize search term from localStorage if available
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem(storageFilterId) || '';
  });

  // Update localStorage whenever the search term changes
  useEffect(() => {
    localStorage.setItem(storageFilterId, searchTerm);
  }, [searchTerm]);

  // Filtered data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data; // If no search term, return full data

    return data.filter(
      (team) =>
        team.member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap gap-2">
        <h3 className="card-title">Invites</h3>

        <div className="flex gap-6">
          <div className="relative">
            <KeenIcon
              icon="magnifier"
              className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
            />
            <input
              type="text"
              className="input input-sm pl-8"
              placeholder="Search Members"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>

          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">Active Users</span>
          </label>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={filteredData} 
          rowSelect={true}
          pagination={{ size: 5 }}
          sorting={[{ id: 'member', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { Invites };
