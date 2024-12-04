const Password = () => {
  return (
    <div className="card pb-2.5">
      
      <div className="card-header" id="company_settings">
        
        <h3 className="card-title">Information Account</h3>
      </div>
      <div className="card-body grid gap-5">
        
        <div className="grid gap-2.5">
          
          <label className="form-label">User Name</label>
          <select className="input w-1/2">
            
            <option>Name company</option>
          </select>
        </div>
        <div className="grid gap-2.5">
          
          <label className="form-label">Password</label>
          <input type="text" className="input w-1/2" placeholder="*****" value="" readOnly />
        </div>
        <div className="grid gap-2.5 mb-2.5">
          
      
        </div>
      </div>
    </div>
  );
};

export { Password };
