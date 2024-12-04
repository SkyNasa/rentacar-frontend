import { FaCalendarAlt } from 'react-icons/fa';

interface IGeneralSettingsProps {
  title: string;
}

const Information = ({ title }: IGeneralSettingsProps) => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="general_settings">
        <h3 className="card-title">Information</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Full Name</label>
            <input type="text" className="input" placeholder="Full Name" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Date Of Birth</label>
            <div className="relative flex items-center">
              <input type="text" className="input w-full" placeholder="00 / 00 / 0000" />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Identity Type</label>
            <div className="flex gap-4">
              {/* Turkish Option */}
              <label className="relative flex py-3 px-4 bg-white border rounded-lg cursor-pointer group w-1/2 transition hover:shadow-lg">
                <input
                  type="radio"
                  name="identityType"
                  value="turkish"
                  className="peer absolute opacity-0"
                  defaultChecked
                />
                <div className="absolute inset-0 border border-gray-200 rounded-lg peer-checked:border-primary peer-checked:border-dashed peer-checked:ring-2 peer-checked:ring-blue-300"></div>
                <div className="flex items-center gap-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                  </div>
                  <span className="text-gray-600 peer-checked:text-primary font-semibold">
                    Turkish
                  </span>
                </div>
              </label>

              {/* Foreign Option */}
              <label className="relative flex py-3 px-4 bg-white border rounded-lg cursor-pointer group w-1/2 transition hover:shadow-lg">
                <input
                  type="radio"
                  name="identityType"
                  value="foreign"
                  className="peer absolute opacity-0"
                />
                <div className="absolute inset-0 border border-gray-200 rounded-lg peer-checked:border-primary peer-checked:border-dashed peer-checked:ring-2 peer-checked:ring-blue-300"></div>
                <div className="flex items-center gap-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                  </div>
                  <span className="text-gray-600 peer-checked:text-primary font-semibold">
                    Foreign
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Company</label>
            <select className="select">
              <option value="">Company</option>
              <option>Company 1</option>
              <option>Company 2</option>
              <option>Company 3</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Front Photo Of National ID</label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
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
            <label className="form-label">National ID Background Image</label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
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
      </div>
    </div>
  );
};

export { Information, type IGeneralSettingsProps };
