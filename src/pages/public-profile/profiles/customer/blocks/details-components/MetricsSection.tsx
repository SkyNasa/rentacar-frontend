import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { EngineHours, Mileage, FuelConsumption, RentedTimes } from '../svg';

interface MetricCardProps {
  icon: React.ComponentType;
  label: string;
  value: string | number;
  percentage: number;
  color: string;
}

interface Metrics {
  engineHours: string;
  mileage: string;
  fuelConsumption: string;
  rentedTimes: string;
}

interface VehicleMetricsProps {
  metrics?: Metrics;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, label, value, percentage, color }) => {
  const numericValue = typeof value === 'string' ? value.split(' ')[0] : value;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
      <div className="mb-2">
        <Icon />
      </div>
      <p className="text-lg font-medium text-gray-900 m-2">{label}</p>
      <div className="w-24 h-24 mb-3">
        <CircularProgressbar
          value={percentage}
          text={`${numericValue}`}
          styles={buildStyles({
            textSize: '20px',
            pathColor: color,
            textColor: '#374151',
            trailColor: '#E5E7EB',
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
     
    </div>
  );
};

const VehicleMetrics: React.FC<VehicleMetricsProps> = ({ metrics = {
  engineHours: '250 Hr',
  mileage: '157 km',
  fuelConsumption: '9%',
  rentedTimes: '7'
} }) => {
  const metricConfigs: MetricCardProps[] = [
    { 
      icon: EngineHours, 
      label: 'Engine Hours', 
      value: metrics.engineHours,
      percentage: 70,
      color: '#F87171'
    },
    { 
      icon: Mileage, 
      label: 'Mileage', 
      value: metrics.mileage,
      percentage: 80,
      color: '#60A5FA'
    },
    { 
      icon: FuelConsumption, 
      label: 'Fuel Consumption', 
      value: metrics.fuelConsumption,
      percentage: 25,
      color: '#A78BFA'
    },
    { 
      icon: RentedTimes, 
      label: 'Rented times', 
      value: metrics.rentedTimes,
      percentage: 50,
      color: '#FBBF24'
    }
  ];

  return (
    <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricConfigs.map((config, index) => (
        <MetricCard key={index} {...config} />
      ))}
    </div>
  );
};

export default VehicleMetrics;