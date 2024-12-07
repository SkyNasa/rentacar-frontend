import React from "react";

const VehicleSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Vehicle</h3>
      <div className="flex items-center">
        <img src="/car-image.svg" alt="Car" className="w-1/2" />
        <div className="ml-6">
          <p>Insurance: Included</p>
          <p>Child Seat: +$25</p>
          <p>Daily Price: $136.00</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleSection;
