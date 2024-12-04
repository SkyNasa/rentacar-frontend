import { MonitoringProvider } from './providers/MonitoringProvider';
import { MonitoringMap } from './MonitoringMap';

const MonitoringPage = () => {
  return (
    <div className="size-full">
      <MonitoringProvider>
        <MonitoringMap />
      </MonitoringProvider>
    </div>
  );
};

export { MonitoringPage };
