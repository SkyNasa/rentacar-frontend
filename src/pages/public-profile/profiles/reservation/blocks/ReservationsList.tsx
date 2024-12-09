import React, { useState } from 'react';
import { SearchIcon, LayoutGridIcon, LayoutListIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Reservation {
  number: string;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
  car: {
    plate: string;
    brand: string;
    model: string;
    icon: string;
  };
  customer: {
    name: string;
    avatar: string;
    email: string;
  };
  price: number;
  status: 'New' | 'Confirmed' | 'In Progress' | 'Canceled' | 'Completed';
}
const mockReservations: Reservation[] = [
  {
    number: '525144',
    pickupDate: 'Sep 9, 2020',
    pickupTime: '23:15',
    dropoffDate: 'Sep 9, 2020',
    dropoffTime: '23:15',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    customer: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    price: 250,
    status: 'New'
  },
  {
    number: '525145',
    pickupDate: 'Sep 9, 2020',
    pickupTime: '23:15',
    dropoffDate: 'Sep 9, 2020',
    dropoffTime: '23:15',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    customer: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    price: 250,
    status: 'Confirmed'
  },
  {
    number: '525146',
    pickupDate: 'Sep 9, 2020',
    pickupTime: '23:15',
    dropoffDate: 'Sep 9, 2020',
    dropoffTime: '23:15',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    customer: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    price: 250,
    status: 'In Progress'
  },
  {
    number: '525147',
    pickupDate: 'Sep 9, 2020',
    pickupTime: '23:15',
    dropoffDate: 'Sep 9, 2020',
    dropoffTime: '23:15',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    customer: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    price: 250,
    status: 'Canceled'
  },
  {
    number: '525148',
    pickupDate: 'Sep 9, 2020',
    pickupTime: '23:15',
    dropoffDate: 'Sep 9, 2020',
    dropoffTime: '23:15',
    car: {
      plate: 'GL96ABR',
      brand: 'Toyota',
      model: 'Reno Volvo',
      icon: '/api/placeholder/40/40'
    },
    customer: {
      name: 'Karina Clark',
      avatar: '/api/placeholder/40/40',
      email: 'karina@kpmg.com.au'
    },
    price: 250,
    status: 'Completed'
  }
];
const ReservationsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const navigate = useNavigate();

  const getStatusStyle = (status: string) => {
    const styles = {
      New: 'text-green-500 bg-green-50',
      Confirmed: 'text-purple-500 bg-purple-50',
      'In Progress': 'text-yellow-500 bg-yellow-50',
      Canceled: 'text-red-500 bg-red-50',
      Completed: 'text-blue-500 bg-blue-50'
    };
    return styles[status as keyof typeof styles];
  };

  const handleViewReservationClick = () => {
    navigate('view-Reservation');
  };

  const ReservationGridCard: React.FC<{ reservation: Reservation }> = ({ reservation }) => (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={reservation.customer.avatar}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-semibold">{reservation.customer.name}</div>
            <div className="text-gray-500 text-sm">{reservation.customer.email}</div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded ${getStatusStyle(reservation.status)}`}>
          {reservation.status}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <img src={reservation.car.icon} alt="" className="w-10 h-10" />
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
              TR
            </span>
            <span>{reservation.car.plate}</span>
          </div>
          <div className="text-gray-500 text-sm">{reservation.car.model}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-gray-500 text-sm">Pickup</div>
          <div>{reservation.pickupDate}</div>
          <div className="text-gray-500 text-sm">{reservation.pickupTime}</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Drop off</div>
          <div>{reservation.dropoffDate}</div>
          <div className="text-gray-500 text-sm">{reservation.dropoffTime}</div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div className="font-semibold">{reservation.price} $</div>
        <div className="flex gap-2">
          <button
            onClick={handleViewReservationClick}
            className="p-2 hover:bg-gray-100 rounded"
          >
            View
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">Edit</button>
          <button className="p-2 hover:bg-gray-100 rounded">Delete</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Reservations List</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              <LayoutListIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              <LayoutGridIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Filters</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">2</span>
          </div>
          <button className="px-4 py-2 bg-gray-100 rounded">Export</button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
        // List View
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-500 text-left">
                <th className="py-3 px-4 font-medium">Number</th>
                <th className="py-3 px-4 font-medium">Pickup Date</th>
                <th className="py-3 px-4 font-medium">Drop off Date</th>
                <th className="py-3 px-4 font-medium">Car</th>
                <th className="py-3 px-4 font-medium">Customer</th>
                <th className="py-3 px-4 font-medium">Price</th>
                <th className="py-3 px-4 font-medium">STATUS</th>
                <th className="py-3 px-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((reservation, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">{reservation.number}</td>
                  <td className="py-4 px-4">
                    <div>{reservation.pickupDate}</div>
                    <div className="text-gray-400 text-sm">{reservation.pickupTime}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div>{reservation.dropoffDate}</div>
                    <div className="text-gray-400 text-sm">{reservation.dropoffTime}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src={reservation.car.icon} alt="" className="w-8 h-8" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
                            TR
                          </span>
                          <span>{reservation.car.plate}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{reservation.car.model}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={reservation.customer.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div>{reservation.customer.name}</div>
                        <div className="text-gray-400 text-sm">{reservation.customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{reservation.price} $</td>
                  <td className="py-4 px-4">
                    <div
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded ${getStatusStyle(
                        reservation.status
                      )}`}
                    >
                      {reservation.status} <span className="text-xs">▼</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button onClick={handleViewReservationClick} className="p-2">
                        View
                      </button>
                      <button className="p-2">Edit</button>
                      <button className="p-2">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReservations.map((reservation, index) => (
            <ReservationGridCard key={index} reservation={reservation} />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          className="px-3 py-2 rounded bg-gray-100 text-gray-600"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          ←
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <span className="px-3 py-1">...</span>
        </div>
        <button
          className="px-3 py-2 rounded bg-gray-100 text-gray-600"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReservationsList;