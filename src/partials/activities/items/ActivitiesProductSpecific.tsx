import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesProductSpecific = () => {
  return (
    <TimelinesWrapper icon="rocket" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Explored niche demo ideas for product-specific solutions.
        </div>
        <span className="text-xs font-medium text-gray-500">3 weeks ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesProductSpecific };
