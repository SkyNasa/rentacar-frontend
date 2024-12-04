import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesProjectStatus = () => {
  return (
    <TimelinesWrapper icon="rocket" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Completed phase one of client project ahead of schedule.
        </div>
        <span className="text-xs font-medium text-gray-500">6 days ago, 10:45 AM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesProjectStatus };
