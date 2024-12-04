import { KeenIcon } from '@/components';

const InvitePeople = () => {
  return (
    <div className="card">
      <div className="card-header" id="webhooks">
        <h3 className="card-title">Invite People</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="form-label max-w-32 w-full">Email</span>
          <div className="grow min-w-48">
            <input
              type="text"
              className="input w-full"
              placeholder=""
              value="jason@studio.io"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-baseline flex-wrap gap-2.5">
          <label className="form-label max-w-32">Role</label>
          <div className="grid gap-5 grow items-start">
            <select className="select w-full">
              <option>Member</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div>
              <a className="btn btn-light btn-sm">
                <KeenIcon icon="plus-squared" /> Add more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer justify-center">
        <button className="btn btn-sm btn-primary">Invite People</button>
      </div>
    </div>
  );
};

export { InvitePeople };
