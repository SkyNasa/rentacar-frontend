import { VehicleLocation } from '@/api/cars';
import { Client, getClients } from '@/api/client';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';
import mqtt from 'mqtt';

interface MqttResponse {
  device_id: number;
  device_name: string;
  engine_ignition_status: string;
  existing_kilometers: string;
  external_battery_voltage?: number;
  fuel_level?: number;
  gsm_signal_level?: number;
  ident: string;
  movement_status?: boolean;
  parking_time: string;
  position_altitude: number;
  position_latitude: number;
  position_longitude: number;
  position_satellites?: number;
  position_speed?: number;
  position_valid: boolean;
  position_direction?: number;
  protocol: string;
  server_timestamp: string;
  timestamp: string;
}

interface MonitoringContextProps {
  clients: Client[];
  selectedClient?: Client;
  // eslint-disable-next-line no-unused-vars
  setSelectedClient: (v: Client | undefined) => void;
  locations: VehicleLocation[];
  selectedLocation?: VehicleLocation;
  // eslint-disable-next-line no-unused-vars
  setSelectedLocation: (v: VehicleLocation | undefined) => void;
  // eslint-disable-next-line no-unused-vars
  search: (target: string, query: string) => void;
}

let memoryMaplocations: Record<string, VehicleLocation> = {};

const MonitoringContext = createContext<MonitoringContextProps>({
  clients: [],
  locations: [],
  setSelectedClient: () => {},
  setSelectedLocation: () => {},
  search: () => {}
});

export const MonitoringProvider = ({ children }: PropsWithChildren) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clients, setClients] = useState<Client[]>([]);
  const [locations, setLocations] = useState<VehicleLocation[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<VehicleLocation[]>([]);
  const selectedClient = useMemo(
    () => clients.find((c) => c.name === searchParams.get('client')),
    [clients, searchParams]
  );
  const selectedLocation = useMemo(
    () => locations.find((v) => v.vehicle.imei === searchParams.get('location')),
    [locations, searchParams]
  );
  const mqttClient = useMemo(
    () =>
      mqtt.connect('wss://test.fletrax.com:8084/mqtt', {
        username: 'super_admin',
        password: 'fletrax159',
        clean: true,
        keepalive: 60,
        protocolVersion: 5
      }),
    []
  );

  const setSelectedClient = useCallback(
    (client?: Client) => {
      setSearchParams((params) => {
        client ? params.set('client', client.name) : params.delete('client');
        return params;
      });
    },
    [setSearchParams]
  );
  const setSelectedLocation = useCallback(
    (location?: VehicleLocation) => {
      setSearchParams((params) => {
        location ? params.set('location', location.vehicle.imei) : params.delete('location');
        return params;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    mqttClient.on('connect', () => {
      mqttClient.subscribeAsync('device/monitoring/+', {
        qos: 2
      });
    });
    mqttClient.on('message', (topic, payload) => {
      const device: MqttResponse = JSON.parse(payload.toString('utf-8'));
      memoryMaplocations[topic] = {
        online: true,
        lat: device.position_latitude,
        long: device.position_longitude,
        angle: device.position_direction || 0,
        status: {
          parkingTime: device.parking_time,
          engineStatus: device.engine_ignition_status === 'true',
          timestamp: new Date(+device.timestamp * 1000),
          batteryLevel: device.external_battery_voltage || 0,
          defenseStatus: false,
          engineBlocked: false,
          existingKilometer: device.existing_kilometers,
          satellietes: device.position_satellites || 0,
          signalLevel: device.gsm_signal_level || -1,
          speed: device.position_speed || 0
        },
        vehicle: {
          imei: device.ident,
          name: device.device_name,
          brandImage: '',
          plate: 'AAAAAA'
        }
      };
    });
  }, [mqttClient]);

  useEffect(() => {
    getClients('').then(setClients);
  }, []);

  useEffect(() => {
    // TODO: Need to activate this when changing subscriptions
    // memoryMaplocations = {};
    // setLocations([]);
    const interval = setInterval(async () => {
      setLocations(Object.values(memoryMaplocations));
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedClient]);

  const search = async (target: string, query: string) => {
    if (query === '') {
      setFilteredLocations([]);
      setClients(await getClients(''));
      return;
    }

    if (target === 'Vehicle') {
      setFilteredLocations(
        locations.filter((l) => l.vehicle.name.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setClients(await getClients(query));
    }
  };

  return (
    <MonitoringContext.Provider
      value={{
        locations: filteredLocations.length ? filteredLocations : locations,
        clients,
        selectedClient,
        setSelectedClient,
        selectedLocation,
        setSelectedLocation,
        search
      }}
    >
      {children}
    </MonitoringContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMonitoringProvider = () => {
  return useContext(MonitoringContext);
};
