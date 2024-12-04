const DeleteAccount = () => {
  return (
    <div className="card">
      <div className="card-header" id="delete_account">
        <h3 className="card-title">Delete Account</h3>
      </div>
      <div className="card-body lg:py-7.5 lg:gap-7.5 gap-5">
        <div className="flex flex-col gap-5">
          <div className="text-2sm text-gray-800">
            We regret to see you leave. Confirm account deletion below. Your data will be
            permanently removed. Thank you for being part of our community. Please check our
            <a href="#" className="link">
              &nbsp;Setup Guidelines&nbsp;
            </a>
            if you still wish continue.
          </div>

          <label className="checkbox-group">
            <input
              className="checkbox checkbox-sm"
              name="delete"
              type="checkbox"
              value="1"
              readOnly
            />
            <span className="checkbox-label">Confirm deleting account</span>
          </label>
        </div>

        
      </div>
    </div>
  );
};

export { DeleteAccount };
