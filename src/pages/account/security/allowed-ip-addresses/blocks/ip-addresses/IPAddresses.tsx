/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataGrid, DefaultTooltip, KeenIcon } from '@/components';
import { IPAddressesData, IIPAddressesData } from '.';

const IPAddresses = () => {
  const columns = useMemo<ColumnDef<IIPAddressesData>[]>(
    () => [
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => (
          <span className={`badge badge-dot size-2 ${info.row.original.status}`}></span>
        ),
        meta: {
          className: 'w-[100px]',
          cellClassName: 'text-center'
        },
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: () => 'IP Address',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[250px]',
        },
      },
      {
        accessorFn: (row) => row.lastSession,
        id: 'lastSession',
        header: () => 'Last Session',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        accessorFn: (row) => row.label,
        id: 'label',
        header: () => 'Label',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        accessorFn: (row) => row.method,
        id: 'method',
        header: () => (
          <>
            <DefaultTooltip title="Verify the identity of a user trying to access a resource" placement="left" className="max-w-48">
              <KeenIcon icon="information-2" className="text-lg leading-none" />
            </DefaultTooltip>
            Method
          </>
        ),
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-sm btn-icon btn-clear btn-light" 
            onClick={() => alert(`Clicked on edit for ${row.original.label}`)}
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
            onClick={() => alert(`Clicked on delete for ${row.original.label}`)}
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

  const data: IIPAddressesData[] = useMemo(() => IPAddressesData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header">
        <h3 className="card-title">IP Addresses</h3>

        <div className="flex gap-5">
          <label className="switch switch-sm">
            <span className="switch-label">
              IP Allowlist Enabled
            </span>
            <input type="checkbox" value="1" name="check" defaultChecked readOnly />
          </label>
          <a href="#" className="btn btn-sm btn-primary">Add IP Address</a>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'method', desc: false }]}
        />
      </div>
    </div>
  );
};

export { IPAddresses };
