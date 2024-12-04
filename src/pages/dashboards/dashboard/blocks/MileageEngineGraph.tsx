import { useEffect, useState } from 'react';
import { ButtonRadioGroup } from './ButtonRadioGroup';
import { CarMileageAndEngine, getCarsMileageAndEngine } from '@/api/cars';
import { CircularProgress } from '@mui/material';

const MileageEngineGraph = () => {
  const [selection, setSelection] = useState('All');
  const [data, setData] = useState<CarMileageAndEngine[]>();

  useEffect(() => {
    getCarsMileageAndEngine().then(setData);
  }, []);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <div className="card h-full">
      <div className="card-header">
        <div className="card-title">
          <h3>Mileage & Engine Hours</h3>
          <h4 className="text-sm font-thin text-[#B5B5C3]">All today</h4>
        </div>

        <ButtonRadioGroup
          selection={selection}
          setSelection={setSelection}
          selections={['Engine', 'Mileage', 'All']}
        />
      </div>
      <div className="card-body flex flex-col gap-2 scrollable grow px-3 py-3">
        {data.map((car) => (
          <>
            <div className="flex gap-4">
              <img src={car.vehicle.brandImage} className="size-12 object-cover" />
              <div className="w-40">
                <div className="font-medium text-sm text-gray-800">{car.vehicle.plate}</div>
                <div className="text-sm text-gray-600">{car.vehicle.imei}</div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-1">
                {(selection === 'Mileage' || selection === 'All') && (
                  <div
                    className="h-2 bg-[#5151F9] rounded-lg"
                    style={{
                      width: `${(car.mileage / data[0].mileage) * 100}%`
                    }}
                  />
                )}
                {(selection === 'Engine' || selection === 'All') && (
                  <div
                    className="h-2 bg-[#FFA800] rounded-lg"
                    style={{
                      width: `${(car.engine / data[0].engine) * 100}%`
                    }}
                  />
                )}
              </div>
              <div className="w-40 flex flex-col justify-center">
                {(selection === 'Mileage' || selection === 'All') && (
                  <div className="text-sm">{car.mileage.toFixed(3)} KM</div>
                )}
                {(selection === 'Engine' || selection === 'All') && (
                  <div className="text-sm">{car.engine.toFixed(2)} Hours</div>
                )}
              </div>
            </div>
            <div className="border-b-2 border-dashed" />
          </>
        ))}
      </div>
    </div>
  );
};

export { MileageEngineGraph };
