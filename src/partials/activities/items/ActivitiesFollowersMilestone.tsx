import { Link } from 'react-router-dom';

import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesFollowersMilestone = () => {
  return (
    <TimelinesWrapper icon="coffee" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Reaching the milestone of
          <Link to="/public-profile/profiles/feeds" className="text-sm font-medium link">
            &nbsp;10,000 followers&nbsp;
          </Link>
          on the blog was a dream come true
        </div>
        <span className="text-xs font-medium text-gray-500">5 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesFollowersMilestone };
