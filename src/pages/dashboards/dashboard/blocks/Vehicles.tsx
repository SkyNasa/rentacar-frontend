import { getVehicles, VehicleDetails } from '@/api/cars';
import { Paginated } from '@/api/common';
import { useEffect, useState } from 'react';
import { CarPlate } from './CarPlate';
import { toAbsoluteUrl } from '@/utils';
import { StatusDropdown } from './StatusDropdown';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Paginated<VehicleDetails>>();

  useEffect(() => {
    getVehicles().then(setVehicles);
  }, []);

  return (
    <div className="card">
      <div className="px-7 pt-6 flex items-center justify-between">
        <div className="card-title">
          <h3>Vehicle</h3>
          <h4 className="text-sm font-thin text-[#B5B5C3]">
            You have {vehicles?.totalCount}{' '}
            {(vehicles?.totalCount ?? 0 > 1) ? 'vehicles' : 'vehicle'}
          </h4>
        </div>
        <button className="btn btn-info px-8">
          <img src={toAbsoluteUrl('/media/icons/add-user.svg')} />
          Add Car
        </button>
      </div>

      <div className="card-body scrollable-x pt-2 px-6 pb-7">
        <div className="flex flex-col lg:flex-row gap-4">
          {vehicles?.data.map((vehicle) => (
            <div className="flex flex-col flex-shrink-0 rounded-2xl border border-[#E7E8ED] w-[386px]">
              <div className="flex flex-col gap-5 px-8 py-6">
                <div className="flex justify-between items-center">
                  <CarPlate plate={vehicle.vehicle.plate} />
                  <StatusDropdown
                    selected={vehicle.status}
                    setSelected={() => {}}
                    options={{
                      Unavailable: {
                        color: '#F1416C',
                        backgroundColor: '#FFF5F8'
                      },
                      Maintenance: {
                        color: '#FFA800',
                        backgroundColor: '#FFF8EA'
                      },
                      Available: {
                        color: '#50CD89',
                        backgroundColor: '#EEFAF4'
                      }
                    }}
                  />
                </div>
                <div className="flex gap-[38px] justify-between">
                  <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                      <img
                        src={vehicle.customer.avatar}
                        className="size-9 rounded-full aspect-square"
                      />
                      <div className="w-48 text-nowrap">
                        <div className="text-[#3F4254] font-bold text-[15px] text-ellipsis overflow-hidden">
                          {vehicle.customer.name}
                        </div>
                        <div className="text-[#B5B5C3] font-medium text-2sm text-ellipsis overflow-hidden">
                          {vehicle.customer.email}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={vehicle.vehicle.brandImage}
                    className="size-9 aspect-square object-cover mr-0.5"
                  />
                </div>
                <div className="flex justify-between items-end gap-4">
                  <div className="flex gap-[18px] text-[#72767C] font-dm-sans">
                    <div className="flex gap-1">
                      <img src={toAbsoluteUrl('/media/icons/gauge.svg')} />
                      <span>{vehicle.mileage} KM</span>
                    </div>
                    <div className="flex gap-1">
                      <img src={toAbsoluteUrl('/media/icons/manual.svg')} />
                      <span>{vehicle.type}</span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#3F4254] max-w-[92px] text-ellipsis overflow-hidden text-nowrap">
                    {vehicle.brandName}
                  </div>
                </div>
              </div>
              <div className="text-xs border-t flex justify-center">
                <a href="#" className="px-5 py-2 flex gap-2">
                  <img src={toAbsoluteUrl('/media/icons/view-light.svg')} />
                  <span>View</span>
                </a>
                <a href="#" className="px-5 py-2 border-x flex gap-2">
                  <img src={toAbsoluteUrl('/media/icons/edit-light.svg')} />
                  <span>Edit</span>
                </a>
                <a href="#" className="px-5 py-2 flex gap-2">
                  <img src={toAbsoluteUrl('/media/icons/delete-light.svg')} />
                  <span>Delete</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { VehicleList };
