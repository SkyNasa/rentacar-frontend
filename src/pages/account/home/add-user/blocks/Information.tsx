import { FaCalendarAlt } from 'react-icons/fa';

interface IGeneralSettingsProps {
  title: string;
}

const Information = ({ title }: IGeneralSettingsProps) => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="general_settings">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Name</label>
            <input type="text" className="input " placeholder="Name" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Identify Number</label>
            <input type="text" className="input " placeholder="Identify Number" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Subscription Start Date</label>

            <div className="relative flex items-center">
              
              <input type="text" className="input w-full" placeholder="00 / 00 / 0000" />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Time Zone</label>
            <select className="select">
              <option>UTC</option> <option>GMT</option> <option>CET</option> <option>EST</option>
              <option>PST</option> <option>IST</option> <option>JST</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2.5 w-1/2">
          <label className="form-label">Role</label>
          <select className="select">
            <option>Role</option> <option>Option 2</option> <option>Option 3</option>
          </select>
          <div className="grid gap-2.5"></div>
        </div>
        <div className="grid gap-2.5">
          <label className="form-label">Photo</label>
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
          <label className="form-label">Status</label>
          <div className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div className="switch switch-sm">
                <input name="param" type="checkbox" defaultValue={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Information, type IGeneralSettingsProps };
