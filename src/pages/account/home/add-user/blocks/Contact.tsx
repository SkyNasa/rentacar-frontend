const Contact = () => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="company_settings">
        <h3 className="card-title">Contact</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Phone</label>
            <input className="input" placeholder="Phone number" type="phone" value="" />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Mail</label>
            <input
              className="input"
              name="email"
              placeholder="Enter email address"
              type="text"
              defaultValue="jason@studio.io"
            />
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Phone 2</label>
            <input className="input" placeholder="Phone number" type="phone" value="" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid gap-2.5">
            <label className="form-label">Country</label>
            <select className="select" name="select">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </select>
          </div>

          <div className="grid gap-2.5">
            <label className="form-label">City</label>
            <select className="select" name="select">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </select>
          </div>
          <div className="grid gap-2.5">
            <label className="form-label">Area</label>
            <select className="select" name="select">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </select>
          </div>
        </div>
        <div className="grid gap-2.5">
          <label className="form-label">Address in Detail</label>
          <input type="text" className="input" placeholder="Address in Detail" />
        </div>
      </div>
    </div>
  );
};

export { Contact };
