const ImageUploadCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 p-3">
      <div className="p-4 card grid gap-2.5 overflow-auto p-6">
        <label className="form-label card-title">Vehicle Image</label>
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

  

      {/* Performance Metrics Card */}
      <div className="card p-4">
        <h3 className="card-title">Performance Metrics</h3>
        <div className="grid gap-2.5">
          <div className="grid gap-2.5">
            <label className="form-label">Current Mileage</label>
            <input type="number" className="input" placeholder="Current Mileage" />
          </div>
          <div className="grid gap-2.5 mt-4">
            <label className="form-label">Maintenance Mileage</label>
            <input type="number" className="input" placeholder="Maintenance Mileage" />
          </div>
          <div className="grid gap-2.5 mt-4">
            <label className="form-label">Fuel Consumption (KM)</label>
            <input type="number" className="input" placeholder="Fuel Consumption (KM)" />
          </div>
        </div>
      </div>

      <div className="card p-4 grid gap-2.5 overflow-auto p-6">
        <label className="form-label card-title">Documents</label>
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

      <div className="card p-4">
        <div className="mt-5">
          <label className="form-label card-title">Plate Number</label>

          <div className="flex font-medium">
            <div className="rounded-s-lg py-2 px-2 bg-[#5271FF] text-white">TR</div>
            <input type="text" className="input" placeholder="TR 56084684" />
          </div>
        </div>
      </div>

      <div className="card p-4">
        <h3 className="card-title">Status</h3>
        <div className="grid gap-2.5">
          <label className="form-label">Status</label>
          <select className="select">
            <option value="available">Available</option> <option value="rented">Rented</option>
            <option value="maintenance">Maintenance</option> <option value="sold">Sold</option>
          </select>
        </div>
      </div>
      {/* HGS Number Card */}
      <div className="card p-4">
        <h3 className="card-title">HGS Number</h3>
        <div className="grid gap-2.5">
          <label className="form-label">HGS Number</label>
          <input type="text" className="input" placeholder="HGS Number" />
        </div>
      </div>
    </div>
  );
};

export { ImageUploadCard };
