import { UserList } from './blocks';
import { UserMiniCards } from './mini-cards/UserMiniCards';

const UserPage = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <h3 className="font-bold text-xl text-gray-800">User List</h3>

      <UserMiniCards />
      <UserList />
    </div>
  );
};

export { UserPage };
