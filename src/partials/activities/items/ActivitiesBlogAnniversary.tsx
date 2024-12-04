import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesBlogAnniversary = () => {
  return (
    <TimelinesWrapper icon="rocket" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          We recently
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;celebrated&nbsp;
          </a>
          the blog&apos;s 1-year anniversary
        </div>
        <span className="text-xs font-medium text-gray-500">3 weeks ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesBlogAnniversary };
