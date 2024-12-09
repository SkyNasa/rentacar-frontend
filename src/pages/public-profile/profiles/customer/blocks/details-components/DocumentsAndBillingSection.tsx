import React from "react";

const DocumentsAndBillingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Documents</h3>
        <ul>
          <li className="p-4 bg-gray-100 rounded-md">
            <p>file-name.pdf</p>
            <button className="btn btn-primary">View</button>
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Billing History</h3>
        <ul>
          <li className="p-4 bg-gray-100 rounded-md">
            <p>Date: Sep 9, 2020</p>
            <p>Amount: $505</p>
            <p>Status: Unpaid</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsAndBillingSection;
