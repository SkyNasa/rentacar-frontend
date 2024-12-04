import { DriverList } from './blocks';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const DriverPage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">Driver List</h3>

      <UserMiniCards />
      <DriverList />
    </div>
  );
};

export { DriverPage };
