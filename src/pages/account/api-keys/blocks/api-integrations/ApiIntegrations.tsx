/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';

import { ApiIntegrationsData, IApiIntegrationsData } from '.';

const ApiIntegrations = () => {
  const columns = useMemo<ColumnDef<IApiIntegrationsData>[]>(
    () => [
      {
        accessorFn: (row) => row.integration,
        id: 'integration',
        header: () => 'Integration',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[206px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.apiKey,
        id: 'apiKey',
        header: () => 'API Key',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center text-gray-800 font-normal">
            {info.row.original.apiKey}
            <a
              href="#"
              className="btn btn-sm btn-icon btn-clear text-gray-500 hover:text-primary-active"
            >
              <KeenIcon icon="copy" />
            </a>
          </div>
        ),
        meta: {
          className: 'min-w-[224px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },   
      {
        accessorFn: (row) => row.dailyCalls,
        id: 'dailyCalls',
        header: () => 'Daily Calls',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[122px]',
          cellClassName: 'text-gray-700 font-normal',
        }
      },
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[98px]',
          cellClassName: 'text-gray-700 font-normal',
        }
      },
      {
        id: 'actions',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <button 
              className="btn btn-sm btn-icon btn-icon-lg btn-clear btn-light" 
            >
              <KeenIcon icon="notepad-edit" />
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

  const data: IApiIntegrationsData[] = useMemo(() => ApiIntegrationsData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">API Integrations</h3>
        <div className="flex gap-7.5">
          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">Pause all</span>
          </label>
          <a href="#" className="btn btn-sm btn-primary">
            Add New
          </a>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={false} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'integration', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { ApiIntegrations };
