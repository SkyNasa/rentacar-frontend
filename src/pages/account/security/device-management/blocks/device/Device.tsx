/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, DefaultTooltip, KeenIcon } from '@/components';

import { DeviceData, IDeviceData } from '.';

const Device = () => {
  const columns = useMemo<ColumnDef<IDeviceData>[]>(
    () => [
      {
        accessorFn: (row: IDeviceData) => row.device,
        id: 'device',
        header: () => 'Device', 
        enableSorting: true,
        cell: ({ row }) => {  // 'row' argumentini cell funksiyasiga qo'shdik
          return (
            <div className="flex items-center gap-4">
              <KeenIcon icon={row.original.device.icon} className="text-2xl text-gray-500" />

              <div className="flex flex-col gap-0.5">
                <span className="leading-none font-medium text-sm text-gray-900">
                  {row.original.device.name}
                </span>
                <span className="text-2sm text-gray-700 font-normal">
                  {row.original.device.browser}
                </span>
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[200px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: () => 'IP Address',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.ipAddress;
        },
        meta: {
          className: 'w-[170px]',
        }
      },   
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.location;
        },
        meta: {
          className: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.added,
        id: 'added',
        header: () => (
          <>
            <DefaultTooltip title="Verify the identity of a user trying to access a resource" placement="left" className="max-w-48">
              <KeenIcon icon="information-2" className="text-lg leading-none" />
            </DefaultTooltip>
            Method
          </>
        ),
        enableSorting: true, 
        meta: {
          className: 'w-[170px]' 
        }
      },    
      {
        accessorFn: (row) => row.lastSession,
        id: 'lastSession',
        header: () => 'LastSession',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.lastSession;
        },
        meta: {
          className: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            <button className="btn btn-sm btn-icon btn-clear btn-light">
              <KeenIcon icon="notepad-edit" /> 
            </button>
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
            <button className="btn btn-sm btn-icon btn-clear btn-light"> 
              <KeenIcon icon="trash" />
            </button>
          );
        },
        meta: {
          className: 'w-[70px]'
        }
      },      
    ],
    []
  );

  const data: IDeviceData[] = useMemo(() => DeviceData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Devices</h3>

				<div className="flex gap-5">
          <a href="#" className="btn btn-sm btn-primary">Add Device</a>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'device', desc: false }]}
        />
      </div>
    </div>
  )
};

export { Device };
