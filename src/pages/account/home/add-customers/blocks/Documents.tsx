import { FaCalendarAlt } from 'react-icons/fa';

interface DocsProps {
  title: string;
}

const Documents = ({ title }: DocsProps) => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="general_settings">
        <h3 className="card-title">Documents</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">ID number</label>
            <input type="text" className="input" placeholder="ID number" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">License Issue Date</label>
            <div className="relative flex items-center">
              <input type="text" className="input w-full" placeholder="00 / 00 / 0000" />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">License Expiry Date</label>
            <div className="relative flex items-center">
              <input type="text" className="input w-full" placeholder="00 / 00 / 0000" />
              <FaCalendarAlt className="absolute right-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Lisense number</label>
            <input type="number" className="input" placeholder="Lisense number" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">billing address</label>
            <input type="text" className="input" placeholder="billing address" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Front Photo Of Driving Lisense</label>
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
            <label className="form-label">Driving Lisense Background Photo</label>
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

export { Documents, type DocsProps };
