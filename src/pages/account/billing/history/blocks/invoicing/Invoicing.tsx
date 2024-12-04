/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';

import { InvoicingData, IInvoicingData } from './';

const Invoicing = () => {
  const columns = useMemo<ColumnDef<IInvoicingData>[]>(
    () => [
      {
        accessorFn: (row) => row.invoice,
        id: 'invoice',
        header: () => 'Member',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.invoice;
        },
        meta: {
          className: 'min-w-[200px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.label,
        id: 'label',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => {                    
          return (
            <div className={`badge badge-sm badge-outline ${info.row.original.color}`}>
              {info.row.original.label}
            </div>
          );
        },
        meta: {
          className: 'w-[170px]',
        }
      },   
      {
        accessorFn: (row) => row.date,
        id: 'date',
        header: () => 'Date',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.date;
        },
        meta: {
          className: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.dueDate,
        id: 'dueDate',
        header: () => 'Due Date',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.dueDate;
        },
        meta: {
          className: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },    
      {
        accessorFn: (row) => row.amount,
        id: 'amount',
        header: () => 'Amount',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.amount;
        },
        meta: {
          className: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        id: 'actions',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <button className="btn btn-link">Download</button>
          );
        },
        meta: {
          className: 'w-[100px]'
        }
      },      
    ],
    []
  );

  const data: IInvoicingData[] = useMemo(() => InvoicingData, []);

  return (
    <div className="card card-grid h-full min-w-full">
      <div className="card-header">
        <h3 className="card-title">Billing and Invoicing</h3>

				<button className="btn btn-light btn-sm">
					<KeenIcon icon="exit-down" />
					Download PDF
				</button>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 5 }}
          sorting={[{ id: 'invoice', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { Invoicing };
