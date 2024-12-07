import React from "react";

const ViolationAndMaintenanceSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Violation & Maintenance</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Date</th>
            <th>Violation Type</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <tr key={index}>
                <td>Karina Clark</td>
                <td>04/10/2024</td>
                <td>Parking</td>
                <td>$100</td>
                <td>Paid</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViolationAndMaintenanceSection;
