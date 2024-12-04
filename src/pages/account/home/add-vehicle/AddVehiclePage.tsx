import React, { useRef, useState } from 'react';
import {
  Information,
  Registration,
  InspectionAndInsurance,
  CarScratches,
  Rent,
  ImageUploadCard
} from './blocks';

type TabType = 'information' | 'registration' | 'inspectionAndInsurance' | 'carScratches' | 'rent';

const AddVehiclePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('information');

  const refs = {
    information: useRef<HTMLDivElement>(null),
    registration: useRef<HTMLDivElement>(null),
    inspectionAndInsurance: useRef<HTMLDivElement>(null),
    carScratches: useRef<HTMLDivElement>(null),
    rent: useRef<HTMLDivElement>(null),
  };

  const tabConfig = [
    { id: 'information', label: 'Information' },
    { id: 'registration', label: 'Registration' },
    { id: 'inspectionAndInsurance', label: 'Inspection & Insurance' },
    { id: 'carScratches', label: 'Car Scratches' },
    { id: 'rent', label: 'Rent' },
  ] as const;

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);

    refs[tab].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    const header = refs[tab].current?.querySelector('h2, h3') as HTMLElement | null;
    if (header) {
      header.setAttribute('tabindex', '-1');
      header.focus();
    }
  };

  const handleNextClick = () => {
    const currentIndex = tabConfig.findIndex(tab => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabConfig.length;
    handleTabClick(tabConfig[nextIndex].id as TabType);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <Information title="Information" />;
      case 'registration':
        return <Registration />;
      case 'inspectionAndInsurance':
        return <InspectionAndInsurance />;
      case 'carScratches':
        return <CarScratches />;
      case 'rent':
        return <Rent />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-5 lg:gap-7.5 xl:w-[85rem] mx-auto">
      <div className="flex">
       

        {/* Main Content */}
        <div className="w-full align-center">
          {/* Tabs Navigation */}
          <div className="tabs mb-5 flex flex-wrap border-b" data-tabs="true">
            {tabConfig.map(({ id, label }) => (
              <button
                key={id}
                className={`tab px-4 py-2 font-medium text-lg border-b-4 -mb-[1px] ${
                  activeTab === id
                    ? 'text-primary border-primary'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => handleTabClick(id as TabType)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div ref={refs[activeTab]} className="focus:outline-none">
              {renderContent()}
              <div className="mt-5 flex justify-end">
                <button
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddVehiclePage };
