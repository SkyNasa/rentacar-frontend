const AdvancedSettingsPreferences = () => {
  return (
    <div className="card">
      <div className="card-header" id="advanced_settings_preferences">
        <h3 className="card-title">Preferences</h3>
      </div>
      <div className="card-body grid gap-5 lg:py-7.5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Language</label>
          <select className="select">
            <option>American English</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Time zone</label>
          <div className="grow">
            <select className="select">
              <option>GMT -5:00 - Eastern Time(US & Canada)</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
          <label className="form-label max-w-56">Currency</label>
          <div className="grow">
            <select className="select">
              <option>United States Dollar (USD)</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Open tasks as...</label>
          <div className="flex items-center gap-5">
            <label className="radio-group">
              <input className="radio" name="open-tasks" type="radio" value="1" readOnly />
              <span className="radio-label">Modal</span>
            </label>
            <label className="radio-group">
              <input className="radio" name="open-tasks" type="radio" value="2" readOnly />
              <span className="radio-label">Fullscreen</span>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-1.5">
          <label className="form-label max-w-56">Attributes</label>
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2.5">
              <label className="checkbox-group">
                <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
                <span className="checkbox-label">Show list names</span>
              </label>
              <div className="form-hint">See the name next to each icon</div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="checkbox-group">
                <input
                  className="checkbox"
                  name="attributes"
                  type="checkbox"
                  defaultChecked
                  value="2"
                  readOnly
                />
                <span className="checkbox-label">Show linked task names</span>
              </label>
              <div className="form-hint">Show task names next to ids for linked project tasks.</div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <label className="form-label max-w-56">Email visibility</label>
          <label className="switch">
            <input type="checkbox" defaultChecked value="1" readOnly />
            <span className="text-gray-800 text-sm">Visible</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { AdvancedSettingsPreferences };
