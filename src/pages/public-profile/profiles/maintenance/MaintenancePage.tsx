import { MaintenanceTable } from './blocks';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const MaintenancePage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">Maintenance List</h3>

      <UserMiniCards />
      <MaintenanceTable searchQuery={''} />
    </div>
  );
};

export { MaintenancePage };
