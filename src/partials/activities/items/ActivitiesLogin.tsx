import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesLogin = () => {
  return (
    <TimelinesWrapper icon="entrance-left" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Jenny&apos;s last login to the
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;Customer Portal&nbsp;
          </a>
        </div>
        <span className="text-xs font-medium text-gray-500">5 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesLogin };
