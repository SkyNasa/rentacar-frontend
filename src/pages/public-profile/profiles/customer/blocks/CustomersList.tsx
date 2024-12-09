import React, { useState } from 'react';
import { Search, LayoutGrid, LayoutList, Eye, Pencil, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Reservation {
  number: string;
  date: string;
  car: {
    plate: string;
    brand: string;
    model: string;
    icon: string;
  };
  owner: {
    name: string;
    avatar: string;
    email: string;
  };
  status: 'Active' | 'Under Review';
}

const mockReservations: Reservation[] = [
  {
    number: '525144',
    date: 'Sep 9, 2020',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    status: 'Active'
  },
  {
    number: '525145',
    date: 'Sep 9, 2020',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    status: 'Under Review'
  },
  {
    number: '525146',
    date: 'Sep 9, 2020',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    status: 'Under Review'
  },
  {
    number: '525147',
    date: 'Sep 9, 2020',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    owner: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    status: 'Active'
  }
];

const ReservationCard = ({ reservation }: { reservation: Reservation }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-start">
        <span className="text-gray-900 font-medium">#{reservation.number}</span>
      </div>
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
        reservation.status === 'Active' ? 'text-green-500 bg-green-50' : 'text-yellow-500 bg-yellow-50'
      }`}>
        {reservation.status}
        <span className="text-xs">▼</span>
      </div>
    </div>

    <div className="flex items-center gap-3 mb-4">
      <img src={reservation.car.icon} alt="" className="w-10 h-10" />
      <div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
            TR
          </span>
          <span className="text-gray-900">{reservation.car.plate}</span>
        </div>
        <div className="text-gray-400 text-sm">{reservation.car.model}</div>
      </div>
    </div>

    <div className="flex items-center gap-3 mb-4">
      <img
        src={reservation.owner.avatar}
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div>
        <div className="text-gray-900">{reservation.owner.name}</div>
        <div className="text-gray-400 text-sm">{reservation.owner.email}</div>
      </div>
    </div>

    <div className="flex items-center gap-3 text-gray-500">
      <span>Date:</span>
      <span className="text-gray-900">{reservation.date}</span>
    </div>

    <div className="flex justify-end gap-2 mt-4">
      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
        <Eye className="w-4 h-4" />
      </button>
      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
        <Pencil className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const CustomersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Customer List</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' ? 'bg-white text-blue-600 shadow' : 'text-gray-500'
              }`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-white text-blue-600 shadow' : 'text-gray-500'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
            <span>Filters</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded-full text-sm">2</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
            Export
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-500 text-left border-b">
                <th className="py-4 px-6 font-medium">Order Number</th>
                <th className="py-4 px-6 font-medium">Date</th>
                <th className="py-4 px-6 font-medium">Car</th>
                <th className="py-4 px-6 font-medium">Owner</th>
                <th className="py-4 px-6 font-medium">STATUS</th>
                <th className="py-4 px-6 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((reservation, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4 px-6 text-gray-900">{reservation.number}</td>
                  <td className="py-4 px-6 text-gray-900">{reservation.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={reservation.car.icon} alt="" className="w-8 h-8" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
                            TR
                          </span>
                          <span className="text-gray-900">{reservation.car.plate}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{reservation.car.model}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={reservation.owner.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="text-gray-900">{reservation.owner.name}</div>
                        <div className="text-gray-400 text-sm">{reservation.owner.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
                      reservation.status === 'Active' ? 'text-green-500 bg-green-50' : 'text-yellow-500 bg-yellow-50'
                    }`}>
                      {reservation.status}
                      <span className="text-xs">▼</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReservations.map((reservation, index) => (
            <ReservationCard key={index} reservation={reservation} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-2 mt-6">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          ←
        </button>
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <span className="px-2">...</span>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          →
        </button>
      </div>
    </div>
  );
};

export default CustomersList;