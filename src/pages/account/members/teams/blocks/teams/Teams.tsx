/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

import { DataGrid, KeenIcon } from '@/components';

import { CommonAvatars, CommonRating } from '@/partials/common';

import { TeamsData, ITeamData } from './';

const Teams = () => {
  const storageFilterId = 'teams-filter';

  const columns = useMemo<ColumnDef<ITeamData>[]>(
    () => [
      {
        accessorFn: (row) => row.team.name,
        id: 'team',
        header: () => 'Team',
        enableSorting: true,
        cell: (info) => {
          return (
            <div className="flex flex-col gap-2">
              <Link
                className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                to="#"
              >
                {info.row.original.team.name}
              </Link>
              <span className="text-2sm text-gray-700 font-normal leading-3">
                {info.row.original.team.description}
              </span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[350px]',
          cellClassName: 'text-gray-700 font-normal'
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
          className: 'w-[200px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.lastModified,
        id: 'lastModified',
        enableSorting: true,
        header: () => 'Last Modified',
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[200px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.members,
        id: 'members',
        header: () => 'Members',
        enableSorting: true,
        cell: (info) => (
          <CommonAvatars
            size="size-[30px]"
            group={info.row.original.members.group}
            more={info.row.original.members.more}
          />
        ),
        meta: {
          className: 'w-[200px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-sm btn-icon btn-clear btn-light" 
            onClick={() => alert(`Clicked on edit for ${row.original.team}`)}
          >
            <KeenIcon icon="notepad-edit" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
      {
        id: 'delete',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-sm btn-icon btn-clear btn-light" 
            onClick={() => alert(`Clicked on delete for ${row.original.team}`)}
          >
            <KeenIcon icon="trash" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    []
  );

  // Memoize the team data
  const data: ITeamData[] = useMemo(() => TeamsData, []);

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
        team.team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.team.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header flex-wrap py-5">
        <h3 className="card-title">Teams</h3>
        <div className="flex gap-6">
          <div className="relative">
            <KeenIcon
              icon="magnifier"
              className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
            />
            <input
              type="text"
              placeholder="Search Teams"
              className="input input-sm ps-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>
          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">Only Active Groups</span>
          </label>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={filteredData} 
          rowSelect={true}
          pagination={{ size: 10 }}
          sorting={[{ id: 'team', desc: false }]}
        />
      </div>
    </div>
  );
};

export { Teams };
