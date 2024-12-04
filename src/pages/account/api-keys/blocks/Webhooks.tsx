const Webhooks = () => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="webhooks">
        <h3 className="card-title">Webhooks</h3>
      </div>
      <div className="card-body grid gap-5">
        <p className="text-2sm text-gray-800">
          Set up Webhooks to trigger actions on external services in real-time. Stay informed on
          updates and changes to <br />
          ensure seamless integration.
        </p>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Webhook URL</label>
          <div className="grow">
            <input type="text" className="input" placeholder="Enter URL" value="" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Webhook Name</label>
          <div className="grow">
            <input type="text" className="input" placeholder="" value="CostaRicaHook" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-56">Event Type</label>
          <div className="grow">
            <select className="select">
              <option>All Events</option>
              <option>Push Webhooks</option>
              <option>Pipe Webhook</option>
              <option>Plugin Webhooks</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <label className="form-label max-w-56">Custom Headers</label>
          <div className="grow">
            <label className="switch">
              <span className="switch-label">Use Custom Header</span>
              <input type="checkbox" defaultChecked value="1" readOnly />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { Webhooks };
