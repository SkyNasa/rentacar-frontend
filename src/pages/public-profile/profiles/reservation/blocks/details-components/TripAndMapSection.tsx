import React from "react";
import { Check } from "lucide-react";

interface VehicleDetails {
  deviceId: string;
  vehicleId: string;
  additionalFeatures: string[];
  payDetails: {
    dailyPrice: number;
    comprehensive: number;
    insurance: number;
    childrensChair: number;
    partialInsurance: number;
  };
  dayDetails: {
    basicPeriod: string;
    usedPeriod: string;
    remainingPeriod: string;
  };
}

const TripAndMapSection: React.FC = () => {
  const details: VehicleDetails = {
    deviceId: "B604650416437739",
    vehicleId: "GL96ABR",
    additionalFeatures: ["Insurance", "Insurance", "Children's chair +(25$)"],
    payDetails: {
      dailyPrice: 136.00,
      comprehensive: 136.00,
      insurance: 136.00,
      childrensChair: 136.00,
      partialInsurance: 136.00
    },
    dayDetails: {
      basicPeriod: "15 Day",
      usedPeriod: "1 Day",
      remainingPeriod: "14 Day"
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Left Column - Vehicle Image */}
      <div className="relative">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded">TR</span>
          <span className="text-gray-700">{details.vehicleId}</span>
          <img src="/api/placeholder/24/24" alt="Toyota" className="w-6 h-6" />
          <div className="flex items-center text-gray-500 text-sm">
            <span className="text-blue-600 mr-2">$</span>
            {details.deviceId}
          </div>
        </div>
        
        {/* Car Image Container */}
        <div className="relative border border-blue-100 rounded-lg p-8">
          <img 
            src="/api/placeholder/400/300" 
            alt="Vehicle" 
            className="w-full h-auto"
          />
          {/* Add markers/hotspots */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs">+</div>
          {/* Add more markers as needed */}
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="space-y-8">
        {/* Additional Features */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Additional features</h3>
          <div className="space-y-3">
            {details.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pay Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pay Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Daily price</span>
              <span className="text-gray-700">${details.payDetails.dailyPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Comprehensive</span>
              <span className="text-gray-700">${details.payDetails.comprehensive.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">insurance</span>
              <span className="text-gray-700">${details.payDetails.insurance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Children's chair</span>
              <span className="text-gray-700">${details.payDetails.childrensChair.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Partial insurance</span>
              <span className="text-gray-700">${details.payDetails.partialInsurance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-blue-600 font-semibold">
              <span>Total</span>
              <span>${details.payDetails.dailyPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Day Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Day Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Basic Period</span>
              <span className="text-gray-700">{details.dayDetails.basicPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Used Period</span>
              <span className="text-gray-700">{details.dayDetails.usedPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Remaining Period</span>
              <span className="text-gray-700">{details.dayDetails.remainingPeriod}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripAndMapSection;