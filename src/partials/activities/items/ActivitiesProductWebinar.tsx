import { KeenIcon } from '@/components';

import { CommonAvatars } from '@/partials/common';
import { TimelinesWrapper } from '@/partials/timelines/default/item';

import { Link } from 'react-router-dom';

const ActivitiesProductWebinar = () => {
  return (
    <TimelinesWrapper icon="calendar-tick" line={true}>
      <div className="flex flex-col pb-2.5">
        <span className="text-sm font-medium text-gray-700">
          Jenny attended a webinar on new product features.
        </span>
        <span className="text-xs font-medium text-gray-500">3 days ago, 11:45 AM</span>
      </div>

      <div className="card shadow-none p-4">
        <div className="flex flex-wrap gap-2.5">
          <KeenIcon icon="code" className="text-lg text-info" />
          <div className="flex flex-col gap-5 grow">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-md font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                  Leadership Development Series: Part 1
                </span>
                <span className="text-xs font-medium text-gray-500">
                  The first installment of a leadership development series.
                </span>
              </div>

              <Link to="/account/members/teams" className="btn btn-link">
                View
              </Link>
            </div>

            <div className="flex flex-wrap gap-7.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2sm font-medium text-gray-500">Code:</span>
                <span className="text-2sm font-semibold text-primary">#leaderdev-1</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-2sm font-medium text-gray-500">Progress:</span>
                <div className="progress progress-success min-w-[120px]">
                  <div className="progress-bar" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 lg:min-w-24 shrink-0 max-w-auto">
                <span className="text-2sm font-medium text-gray-500">Guests:</span>
                <CommonAvatars
                  size="size-7"
                  group={[
                    { filename: '300-4.png' },
                    { filename: '300-1.png' },
                    { filename: '300-2.png' },
                    {
                      fallback: '+24',
                      variant: 'text-primary-inverse ring-primary-light bg-primary'
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesProductWebinar };
