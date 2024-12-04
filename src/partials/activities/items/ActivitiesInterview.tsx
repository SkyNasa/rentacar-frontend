import { Link } from 'react-router-dom';

import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesInterview = () => {
  return (
    <TimelinesWrapper icon="entrance-left" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          I had the privilege of interviewing an industry expert for an
          <Link to="/public-profile/profiles/blogger" className="text-sm font-medium link">
            &nbsp;upcoming blog post&nbsp;
          </Link>
        </div>
        <span className="text-xs font-medium text-gray-500">2 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesInterview };
