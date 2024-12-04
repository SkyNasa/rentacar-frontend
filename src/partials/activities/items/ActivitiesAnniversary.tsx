import { Link } from 'react-router-dom';

import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesAnniversary = () => {
  return (
    <TimelinesWrapper icon="cup" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          We recently
          <Link to="/public-profile/profiles/nft" className="text-sm font-medium link">
            &nbsp;celebrated&nbsp;
          </Link>
          the blog&apos;s 1-year anniversary
        </div>
        <span className="text-xs font-medium text-gray-500">3 months ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesAnniversary };
