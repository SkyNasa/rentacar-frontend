import { Marker, useMap } from 'react-leaflet';
import 'leaflet-rotatedmarker';
import { toAbsoluteUrl } from '@/utils';
import L from 'leaflet';
import { useTripsContext } from '../providers/TripsContext';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useCallback, useEffect, useMemo } from 'react';
import { VehicleLocation } from '@/api/cars';

export const CarsLayer = () => {
  const map = useMap();
  const { locations, selectedLocation, setSelectedLocation } = useTripsContext();
  const icon = useMemo(
    () => ({
      green: L.icon({
        iconUrl: toAbsoluteUrl('/media/icons/car-marker-green.png'),
        iconSize: [20, 20],
        iconAnchor: [0.5, 0.5]
      }),
      red: L.icon({
        iconUrl: toAbsoluteUrl('/media/icons/car-marker-red.png'),
        iconSize: [20, 20],
        iconAnchor: [0.5, 0.5]
      }),
      gray: L.icon({
        iconUrl: toAbsoluteUrl('/media/icons/car-marker-gray.png'),
        iconSize: [20, 20],
        iconAnchor: [0.5, 0.5]
      })
    }),
    []
  );

  const getIcon = useCallback(
    (location: VehicleLocation) => {
      if (!location.online) {
        return icon.gray;
      }

      if (location.status.engineStatus) {
        return icon.green;
      }

      return icon.red;
    },
    [icon.gray, icon.green, icon.red]
  );

  useEffect(() => {
    if (!selectedLocation) return;

    map.flyTo([selectedLocation.lat, selectedLocation.long], 16, {
      animate: true
    });
  }, [map, selectedLocation]);

  return (
    <MarkerClusterGroup chunkedLoading removeOutsideVisibleBounds>
      {selectedLocation
        ? selectedLocation.lat &&
        selectedLocation.long && (
          <Marker
            position={[selectedLocation.lat, selectedLocation.long]}
            rotationAngle={selectedLocation.angle}
            icon={getIcon(selectedLocation)}
            eventHandlers={{
              click: () => {
                setSelectedLocation(undefined);
              }
            }}
          />
        )
        : locations?.map(
          (location) =>
            location.lat &&
            location.long && (
              <Marker
                key={location.vehicle.imei}
                position={[location.lat, location.long]}
                rotationAngle={location.angle}
                icon={getIcon(location)}
                eventHandlers={{
                  click: () => {
                    setSelectedLocation(location);
                  }
                }}
              />
            )
        )}
    </MarkerClusterGroup>
  );
};
