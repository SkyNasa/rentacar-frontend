import { TimelinesWrapper } from '@/partials/timelines/default/item';

const ActivitiesNewProduct = () => {
  return (
    <TimelinesWrapper icon="people" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Jenny sent an
          <a href="#" className="text-sm font-medium link">
            &nbsp;inquiry&nbsp;
          </a>
          about a
          <a href="#" className="text-sm font-medium link">
            &nbsp;new product&nbsp;
          </a>
          .
        </div>
        <span className="text-xs font-medium text-gray-500">Today, 9:00 AM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { ActivitiesNewProduct };
