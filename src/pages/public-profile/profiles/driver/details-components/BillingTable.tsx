import { DataGrid } from '@/components';
import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns/fp';
import { toAbsoluteUrl } from '@/utils';
import { StatusDropdown } from './StatusDropdown';

interface Billing {
  id: string;
  date: string;
  type: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Unpaid';
}

interface BillingTableProps {
  searchQuery: string;
}

const BillingTable = ({ searchQuery }: BillingTableProps) => {
  // Static fake data
  const fakeData: Billing[] = [
    {
      id: '1',
      date: '2023-12-01',
      type: 'Invoice',
      description: 'Website Development',
      amount: 1500,
      status: 'Paid'
    },
    {
      id: '2',
      date: '2023-11-25',
      type: 'Receipt',
      description: 'Hosting Renewal',
      amount: 200,
      status: 'Unpaid'
    },
    {
      id: '3',
      date: '2023-11-20',
      type: 'Invoice',
      description: 'Domain Purchase',
      amount: 20,
      status: 'Paid'
    }
  ];

  const [data, setData] = useState<Billing[]>(fakeData);

  const columns = useMemo<ColumnDef<Billing>[]>(
    () => [
      {
        accessorFn: (row) => row.date,
        id: 'date',
        header: () => 'Date',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">
            {format('MMM d, yyyy', info.row.original.date)}
          </span>
        )
      },
      {
        accessorFn: (row) => row.type,
        id: 'type',
        header: () => 'Type',
        enableSorting: true,
        cell: (info) => <span className="text-gray-800 font-bold">{info.row.original.type}</span>
      },
      {
        accessorFn: (row) => row.description,
        id: 'description',
        header: () => 'Description',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">{info.row.original.description}</span>
        )
      },
      {
        accessorFn: (row) => row.amount,
        id: 'amount',
        header: () => 'Amount',
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-800 font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(info.row.original.amount)}
          </span>
        )
      },
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => (
          <StatusDropdown
            selected={info.row.original.status}
            setSelected={() => {}}
            options={{
              Unpaid: {
                color: '#F1416C',
                backgroundColor: '#FFF5F8'
              },
              Paid: {
                color: '#50CD89',
                backgroundColor: '#EEFAF4'
              }
            }}
          />
        )
      },
      {
        id: 'actions',
        header: () => 'Actions',
        cell: (info) => (
          <div className="flex gap-3">
            <a href="#">
              <img src={toAbsoluteUrl('/media/icons/view.svg')} alt="View" />
            </a>
            <a href="#">
              <img src={toAbsoluteUrl('/media/icons/edit.svg')} alt="Edit" />
            </a>
          </div>
        )
      }
    ],
    []
  );

  return (
    <div className="flex flex-col items-start w-full p-4">
      <h1 className="text-xl font-semibold mb-4 ps-4">Billing History</h1>
      <div className="w-full overflow-x-auto">
        <DataGrid columns={columns} data={data} />
      </div>
    </div>
  );
};

export { BillingTable };
