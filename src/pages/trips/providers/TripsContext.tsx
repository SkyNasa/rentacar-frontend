import { searchTrips, TripGroup } from '@/api/trips';
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

interface TripsContextProps {
  searchDeviceQuery: string;
  // eslint-disable-next-line no-unused-vars
  setSearchDeviceQuery: (query: string) => void;
  startDate?: Date;
  // eslint-disable-next-line no-unused-vars
  setStartDate: (date: Date | undefined) => void;
  endDate?: Date;
  // eslint-disable-next-line no-unused-vars
  setEndDate: (date: Date | undefined) => void;
  search: () => void;
  trips: TripGroup[];
}

const TripsContext = createContext<TripsContextProps>({
  searchDeviceQuery: '',
  setSearchDeviceQuery: () => {},
  startDate: new Date(),
  setStartDate: () => {},
  endDate: new Date(),
  setEndDate: () => {},
  search: () => {},
  trips: []
});

export const TripsProvider = ({ children }: PropsWithChildren) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDeviceQuery = searchParams.get('device') || '';
  const setSearchDeviceQuery = useCallback(
    (query: string) => {
      setSearchParams((params) => {
        params.set('device', query);
        return params;
      });
    },
    [setSearchParams]
  );
  const startDate = useMemo(() => {
    const date = searchParams.get('startDate');
    return date ? new Date(+date) : undefined;
  }, [searchParams]);
  const setStartDate = useCallback(
    (date: Date | undefined) => {
      if (date && isNaN(date?.getTime())) {
        return;
      }

      setSearchParams((params) => {
        if (!date) {
          params.delete('startDate');
          return params;
        }
        params.set('startDate', date.getTime().toString());
        return params;
      });
    },
    [setSearchParams]
  );
  const endDate = useMemo(() => {
    const date = searchParams.get('endDate');
    return date ? new Date(+date) : undefined;
  }, [searchParams]);
  const setEndDate = useCallback(
    (date: Date | undefined) => {
      setSearchParams((params) => {
        if (!date) {
          params.delete('endDate');
          return params;
        }
        params.set('endDate', date.getTime().toString());
        return params;
      });
    },
    [setSearchParams]
  );
  const [trips, setTrips] = useState<TripGroup[]>([]);
  const search = useCallback(async () => {
    const trips = await searchTrips({
      query: searchDeviceQuery,
      startDate,
      endDate
    });
    setTrips(trips);
  }, [endDate, searchDeviceQuery, startDate]);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TripsContext.Provider
      value={{
        searchDeviceQuery,
        setSearchDeviceQuery,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        search,
        trips
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTripsContext = () => {
  return useContext(TripsContext);
};
