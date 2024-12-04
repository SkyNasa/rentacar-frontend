import { Link } from 'react-router-dom';

import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesUpcomingContent = () => {
  return (
    <TimelinesWrapper icon="share" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          I couldn&apos;t resist sharing a sneak peek of our
          <Link to="/public-profile/profiles/blogger" className="text-sm font-medium link">
            &nbsp;upcoming content
          </Link>
        </div>
        <span className="text-xs font-medium text-gray-500">5 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesUpcomingContent };
