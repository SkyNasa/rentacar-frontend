import { KeenIcon } from '@/components';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import { useTripsContext } from '../providers/TripsContext';
import 'react-resizable/css/styles.css';
import { format } from 'date-fns';
import { toAbsoluteUrl } from '@/utils';
import TripCard from './TripCard';

export const MainCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    searchDeviceQuery,
    setSearchDeviceQuery,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    search,
    trips
  } = useTripsContext();

  return (
    <div className="card w-[411px] data-[open=true]:h-full group" data-open={isOpen}>
      <div
        className="card-header border-dashed border-0 group-data-[open=true]:border-b-2"
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="card-title font-bold text-[22px]">
          <h3>Trips</h3>
        </div>
        {isOpen ? <KeenIcon icon="up" /> : <KeenIcon icon="down" />}
      </div>

      <Collapse in={isOpen} className="flex-grow" classes={{ wrapper: 'h-full' }}>
        <div className="card-body flex flex-col gap-2 px-3 py-3 h-full">
          <div className="input input-sm h-[34px] shrink-0">
            <input
              type="text"
              placeholder="Search Devices"
              value={searchDeviceQuery}
              onChange={(e) => setSearchDeviceQuery(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 shrink-0">
            <div className="flex flex-col gap-2">
              <div className="text-xs font-medium text-[#3F4254]">Start Date</div>
              <div className="input input-sm h-[34px] shrink-0">
                <input
                  type="date"
                  value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => {
                    if (!startDate) {
                      setStartDate(new Date(e.target.value));
                      return;
                    }
                    const newDate = new Date(e.target.value);
                    setStartDate(
                      new Date(
                        newDate.getFullYear(),
                        newDate.getMonth(),
                        newDate.getDate(),
                        startDate.getHours(),
                        startDate.getMinutes()
                      )
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-medium text-[#3F4254]">End Date</div>
              <div className="input input-sm h-[34px] shrink-0">
                <input
                  type="date"
                  value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => {
                    if (!endDate) {
                      setEndDate(new Date(e.target.value));
                      return;
                    }
                    const newDate = new Date(e.target.value);
                    setEndDate(
                      new Date(
                        newDate.getFullYear(),
                        newDate.getMonth(),
                        newDate.getDate(),
                        endDate.getHours(),
                        endDate.getMinutes()
                      )
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-medium text-[#3F4254]">Start Time</div>
              <div className="input input-sm h-[34px] shrink-0">
                <input
                  type="time"
                  value={startDate ? format(startDate, 'HH:mm') : ''}
                  onChange={(e) => {
                    if (!startDate) {
                      setStartDate(new Date(e.target.value));
                      return;
                    }
                    const time = e.target.value.split(':');
                    setStartDate(
                      new Date(
                        startDate.getFullYear(),
                        startDate.getMonth(),
                        startDate.getDate(),
                        +time[0],
                        +time[1]
                      )
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-medium text-[#3F4254]">End Time</div>
              <div className="input input-sm h-[34px] shrink-0">
                <input
                  type="time"
                  value={endDate ? format(endDate, 'HH:mm') : ''}
                  onChange={(e) => {
                    if (!endDate) {
                      setEndDate(new Date(e.target.value));
                      return;
                    }
                    const time = e.target.value.split(':');
                    setEndDate(
                      new Date(
                        endDate.getFullYear(),
                        endDate.getMonth(),
                        endDate.getDate(),
                        +time[0],
                        +time[1]
                      )
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-info justify-center text-xs font-medium shrink-0"
            onClick={search}
          >
            <img src={toAbsoluteUrl('/media/icons/search.svg')} />
            Search
          </button>
          <div className="scrollable pb-2 flex flex-col gap-[10px]">
            {trips.map((tripGroup) => (
              <TripCard key={tripGroup.date.getTime()} tripGroup={tripGroup} />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};
