import { useState } from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

interface IGeneralSettingsProps {
  title: string;
}

const Password = ({ title }: IGeneralSettingsProps) => {
  const [scratches, setScratches] = useState<number[]>([1]); // Initial scratch item

  // Function to add a new scratch
  const addScratch = () => {
    setScratches([...scratches, scratches.length + 1]);
  };

  return (
    <div className="card pb-4">
      <div className="card-header" id="Password">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body grid gap-5">
        {/* Mileage and Fuel Status */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Mileage At Delivery</label>
            <input type="text" className="input" placeholder="Mileage" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Fuel Status</label>
            <select className="select">
              <option>20%</option>
              <option>30%</option>
              <option>50%</option>
              <option>Full</option>
            </select>
          </div>
        </div>

        {/* Scratches Section */}
        <div className="grid gap-5">
          <label className="form-label">Add Scratches</label>
          {scratches.map((id) => (
            <div
              key={id}
              className="border-dashed border-2 border-gray-300 p-4 text-center flex items-center justify-between"
            >
              <p className="text-sm text-gray-500">Scratch Photo {id}</p>
              <button className="btn btn-primary btn-sm">Upload Photo</button>
            </div>
          ))}
          <button
            type="button"
            onClick={addScratch}
            className="btn btn-outline-primary flex items-center gap-2 mt-3"
          >
            <FaPlus />
            Add Scratch
          </button>
        </div>

        {/* Pickup Date and Time */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Pickup Date</label>
            <div className="relative">
              <input
                type="text"
                className="input w-full"
                placeholder="00 / 00 / 0000"
              />
              <FaCalendarAlt className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Pickup Time</label>
            <select className="select">
              <option>07:30 AM</option>
              <option>08:00 AM</option>
              <option>09:00 AM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Password, type IGeneralSettingsProps };
