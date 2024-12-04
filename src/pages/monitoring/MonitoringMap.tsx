import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import { CarsLayer } from './blocks/CarsLayer';
import { ZoomControl } from './blocks/ZoomControl';
import { MapControls } from './blocks/MapControls';
import { OtherControls } from './blocks/OtherControls';
import { MainControl } from './blocks/MainControl';
import { MainCard } from './blocks/MainCard';
import { SubControl } from './blocks/SubControl';
import { useMonitoringProvider } from './providers/MonitoringProvider';
import { LocationCard } from './blocks/LocationCard';

const MonitoringMap = () => {
  const { selectedLocation } = useMonitoringProvider();

  return (
    <MapContainer
      center={[38.9637, 35.2433]}
      zoom={7}
      className="size-full"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CarsLayer />
      <AttributionControl prefix="Leaflet" />
      <MapControls>
        <ZoomControl />
        <OtherControls />
      </MapControls>
      <MainControl>
        <MainCard />
      </MainControl>
      {selectedLocation && (
        <SubControl>
          <LocationCard />
        </SubControl>
      )}
    </MapContainer>
  );
};

export { MonitoringMap };
