import { CrudAvatarUpload } from '@/partials/crud';

const BasicSettings = () => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="basic_settings">
        <h3 className="card-title">Basic Settings</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">Photo</label>
          <div className="flex items-center justify-between flex-wrap grow gap-2.5">
            <span className="text-2sm text-gray-700">150x150px JPEG, PNG Image</span>
            <CrudAvatarUpload />
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label flex items-center gap-1 max-w-56">Name</label>
            <input className="input" type="text" value="Jason Tatum" readOnly />
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label flex items-center gap-1 max-w-56">Company</label>
            <input className="input" type="text" value="KeenThemes" readOnly />
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label flex items-center gap-1 max-w-56">Phone number</label>
            <input className="input" type="text" placeholder="Enter phone" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">Visibility</label>
          <div className="grow">
            <select className="select">
              <option>Public</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">Avaibality</label>
          <div className="grow">
            <label className="switch">
              <span className="switch-label">Available to hire</span>
              <input type="checkbox" defaultChecked value="1" readOnly />
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-2.5">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { BasicSettings };
