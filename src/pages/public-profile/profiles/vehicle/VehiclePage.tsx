import { VehicleList } from './blocks';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const VehiclePage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">Vehicle List</h3>

      <UserMiniCards />
      <VehicleList />
    </div>
  );
};

export { VehiclePage };
