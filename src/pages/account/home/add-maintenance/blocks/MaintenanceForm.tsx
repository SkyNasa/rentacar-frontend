import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

interface MaintenanceFormProps {
  onSubmit: (formData: any) => void;
}

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div className="card pb-2.5">
      <div className="card-header" id="maintenance_settings">
        <h3 className="card-title">Maintenance Form</h3>
      </div>
      <form onSubmit={handleSubmit} className="card-body grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Types Of Maintenance</label>
            <input
              type="text"
              id="maintenanceType"
              name="maintenanceType"
              className="input"
              placeholder="Oil Change"
            />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Car Or Appointment</label>
            <input
              type="text"
              id="carOrAppointment"
              name="carOrAppointment"
              className="input"
              placeholder="GL96ABR"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Supplier</label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              className="input"
              placeholder="Supplier"
            />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="input"
              placeholder="1 $"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Start Date</label>
            <div className="relative flex items-center">
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="input w-full"
              />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Start Time</label>
            <div className="relative flex items-center">
              <input
                type="time"
                id="startTime"
                name="startTime"
                className="input w-full"
                placeholder="07:30 AM"
              />
              <FaClock className="absolute right-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid gap-2.5">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="input"
            placeholder="Description"
            rows={4}
          ></textarea>
        </div>

        <div className="grid gap-2.5">
          <label className="form-label">Maintenance Related To Reservation</label>
          <div className="flex items-center">
            <div className="switch switch-sm">
              <input
                type="checkbox"
                id="relatedToReservation"
                name="relatedToReservation"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-2.5">
          <label className="form-label">Status</label>
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="finished"
                name="status"
                value="finished"
                className="form-radio"
              />
              <span>Finished</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="ongoing"
                name="status"
                value="ongoing"
                className="form-radio"
              />
              <span>Ongoing</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MaintenanceForm;