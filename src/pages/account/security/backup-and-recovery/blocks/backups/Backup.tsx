/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';

import { BackupData, IBackupData } from '.';


const Backup= () => {
  const columns = useMemo<ColumnDef<IBackupData>[]>(
    () => [
      {
        accessorFn: (row) => row.when,
        id: 'when',
        header: () => 'When', 
        enableSorting: true,
        cell: ({ row }) => { 
          return (
            <div className="flex items-center gap-4">

              <div className="flex flex-col gap-0.5">
                <span className="leading-none font-medium text-sm text-gray-900">
                  {row.original.when.duration}
                </span>
                <span className="text-2sm text-gray-700 font-normal">
                  {row.original.when.datetime}
                </span>
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[260px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.details,
        id: 'details',
        header: () => 'Details',
        enableSorting: true,
        cell: (info) => {
          return (
            <div>
              <p>{info.row.original.details.title}</p>
              <span className="flex items-center gap-2 text-xs text-gray-600 font-normal">
                <span className="flex items-center gap-1">
                  <KeenIcon icon="files" className="text-sm text-gray-500" />
                  <p>{info.row.original.details.pages} pages</p>
                </span>
                <span className="border-e border-e-gray-300 h-4"></span>
                <span className="flex items-center gap-1">
                  <KeenIcon icon="picture" className="text-sm text-gray-500" />
                  <p>{info.row.original.details.media} media</p>
                </span>
              </span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[260px]',
        }
      },
  
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <Link to="#" className="btn btn-sm btn-clear btn-light">
              Preview
            </Link>
          );
        },
        meta: {
          className: 'w-[70px]'
        }
      },      
      {
        id: 'trash',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <Link to="#" className="btn btn-sm btn-light btn-outline">
							Restore
						</Link>
          );
        },
        meta: {
          className: 'w-[70px]'
        }
      },      
    ],
    []
  );

  const data: IBackupData[] = useMemo(() => BackupData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Backups</h3>

        <label className="switch switch-sm">
          <span className="switch-label">
            Cloud Sync
          </span>
          <input type="checkbox" value="1" name="check" defaultChecked readOnly />
        </label>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'when', desc: false }]}
        />
      </div>
    </div>
  );
};

export { Backup };