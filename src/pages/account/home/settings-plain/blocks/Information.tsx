import { CrudAvatarUpload } from '@/partials/crud';

interface IGeneralSettingsProps {
  title: string;
}

const Information = ({ title }: IGeneralSettingsProps) => {
  return (
    <div className=" card pb-2.5">
      <div className="card-header" id="general_settings">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Name</label>
            <input type="text" className="input" placeholder="Name" />
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Identify Number</label>
            <input type="text" className="input" placeholder="Identify Number" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Phone</label>
            <div className="flex items-center gap-2.5">
              <select className="select">
                <option>+90</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input type="text" className="input" placeholder="Phone" />
            </div>
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Protocol</label>
            <select className="select">
              <option>Protocol</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Device Type</label>
            <select className="select">
              <option>Device Type</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Plate</label>
            <input type="text" className="input" placeholder="Plate" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Subscription Start Date</label>
            <input type="text" className="input" placeholder="00 / 00 / 0000" />
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">Subscription End Date</label>
            <input type="text" className="input" placeholder="00 / 00 / 0000" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Time Zone</label>
            <select className="select">
              <option>UTC</option>
              <option>GMT</option>
              <option>CET</option>
              <option>EST</option>
              <option>PST</option>
              <option>IST</option>
              <option>JST</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Information, type IGeneralSettingsProps };
