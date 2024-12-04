import { Vehicle } from '@/api/cars';
import { CarPlate } from './CarPlate';

export interface CarViewProps {
  vehicle: Vehicle;
}

export const CarView = ({ vehicle }: CarViewProps) => {
  return (
    <div className="flex flex-col gap-1 px-2">
      <div className="flex gap-2 items-center">
        <img src={vehicle.brandImage} className="size-9 object-cover" />
        <CarPlate plate={vehicle.plate} />
      </div>
      <div className="text-gray-600 text-2sm">{vehicle.imei}</div>
    </div>
  );
};
