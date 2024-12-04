import { KeenIcon } from '@/components';

const InvitePeople = () => {
  return (
    <form className="card">
      <div className="card-header">
        <h3 className="card-title">Invite People</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label className="form-label max-w-32">Email</label>
          <input
            type="text"
            className="input"
            placeholder=""
            name="user_email"
            value="jason@studio.io"
            readOnly
          />
        </div>

        <div className="flex items-baseline flex-wrap gap-2.5">
          <label className="form-label max-w-32">Role</label>
          <div className="flex flex-col items-start grow gap-5">
            <select className="select" name="user_role">
              <option value="1">Member</option>
              <option value="2">Editor</option>
              <option value="3">Designer</option>
              <option value="4">Admin</option>
            </select>

            <a href="#" className="btn btn-sm btn-light btn-outline">
              <KeenIcon icon="plus-squared" />
              Add more
            </a>
          </div>
        </div>
      </div>
      <div className="card-footer justify-center">
        <a href="#" className="btn btn-sm btn-primary">
          Invite People
        </a>
      </div>
    </form>
  );
};

export { InvitePeople };
