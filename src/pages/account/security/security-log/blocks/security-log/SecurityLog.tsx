/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';

import { SecurityLogData, ISecurityLogData } from '.';

const SecurityLog = () => {
  const columns = useMemo<ColumnDef<ISecurityLogData>[]>(
    () => [
      {
        accessorFn: (row) => row.timestamp,
        id: 'timestamp',
        header: () => 'Timestamp',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[200px]'
        },
      },
      {
        accessorFn: (row) => row.eventType,
        id: 'eventType',
        header: () => 'Event Type',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-1.5">
            <KeenIcon
              icon={info.row.original.eventType.icon.name}
              className={`text-lg ${info.row.original.eventType.icon.variant}`}
            />
            <span className="leading-none font-semibold text-gray-700">
              {info.row.original.eventType.label}
            </span>
          </div>
        ),
        meta: {
          className: 'min-w-[200px]',
        },
      },
      {
        accessorFn: (row) => row.actionTaken,
        id: 'actionTaken',
        header: () => 'Action Taken',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[200px]',
        },
      },
      {
        accessorFn: (row) => row.sourceIp,
        id: 'sourceIp',
        header: () => 'Source IP',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[130px]',
        },
      },
      {
        accessorFn: (row) => row.destinationIp,
        id: 'destinationIp',
        header: () => 'Destination IP',
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[140px]',
        },
      },
      {
        accessorFn: (row) => row.severity,
        id: 'severity',
        header: () => 'Severity',
        enableSorting: true,
        cell: (info) => (
          <span className={`badge badge-sm badge-outline ${info.row.original.severity.variant}`}>
            {info.row.original.severity.label}
          </span>
        ),
        meta: {
          className: 'min-w-[110px]',
        },
      },
      {
        id: 'click',
        header: () => '',
        enableSorting: false,
        cell: () => (
          <button 
            className="btn btn-icon btn-light btn-clear btn-sm" 
          >
            <KeenIcon icon="notepad" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    []
  );

  const data: ISecurityLogData[] = useMemo(() => SecurityLogData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Security Log</h3>
        <label className="switch switch-sm">
          <input name="check" type="checkbox" value="1" defaultChecked className="order-2" readOnly />
          <span className="switch-label order-1">
            Push Alerts
          </span>
        </label>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'timestamp', desc: false }]}  
        />
      </div>
    </div>
  );
};

export { SecurityLog };
