import { TripsProvider } from './providers/TripsContext';
import { TripsMap } from './TripsMap';

const TripsPage = () => {
  return (
    <div className="size-full">
      <TripsProvider>
        <TripsMap />
      </TripsProvider>
    </div>
  );
};

export { TripsPage };
