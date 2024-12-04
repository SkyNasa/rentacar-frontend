import { Projects } from './blocks';
import { DeviceStatus } from '../mini-cards/DeviceStatus';

const ProfileDefaultContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <DeviceStatus />
      <Projects />
    </div>
  );
};

export { ProfileDefaultContent };
