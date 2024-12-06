import { ReservationsList } from './blocks';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const ReservationsPage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">Reservations List</h3>

      <UserMiniCards />
      <ReservationsList />
    </div>
  );
};

export { ReservationsPage };
