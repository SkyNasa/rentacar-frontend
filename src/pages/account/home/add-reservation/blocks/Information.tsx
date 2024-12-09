import { FaCalendarAlt } from 'react-icons/fa';

interface IGeneralSettingsProps {
  title: string;
}

const Information = ({ title }: IGeneralSettingsProps) => {
  return (
    <div className="card pb-4">
      <div className="card-header" id="information">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body grid gap-5">
        {/* Mileage and Fuel Status */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Mileage At Delivery</label>
            <input type="text" className="input" placeholder="Full Name" />
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

        {/* Pickup Date and Time */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Pickup Date</label>
            <div className="relative">
              <input type="text" className="input w-full" placeholder="00 / 00 / 0000" />
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

        {/* Pickup Car Video and Photo */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Pickup Car Video</label>
            <div className="border-dashed border-2 border-gray-300 p-5 text-center">
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM14 13V17H10V13H7L12 8L17 13H14Z"
                    fill="#0F0F0F"
                  />
                </svg>
                <p className="mb-1 text-sm text-gray-500">Drag and drop your files</p>
                <p className="text-xs text-gray-400 mb-3">Unlimited files, 5GB total limit</p>
                <button className="btn btn-primary btn-sm">Or choose files</button>
              </div>
            </div>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Pickup Car Photo</label>
            <div className="border-dashed border-2 border-gray-300 p-5 text-center">
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM14 13V17H10V13H7L12 8L17 13H14Z"
                    fill="#0F0F0F"
                  />
                </svg>
                <p className="mb-1 text-sm text-gray-500">Drag and drop your files</p>
                <p className="text-xs text-gray-400 mb-3">Unlimited files, 5GB total limit</p>
                <button className="btn btn-primary btn-sm">Or choose files</button>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Switches */}
        <div className="grid lg:grid-cols-2 gap-5">
          {[
            'Check Passport Validity',
            "Recipient's ID",
            'Check Driving License Validity',
            'Delivery Of Contract To Client',
            'Fill In Contract Details',
            'Availability Of A Driver',
            'Receiving Rental Amount'
          ].map((label, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <label htmlFor={label} className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id={label} className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export { Information, type IGeneralSettingsProps };
