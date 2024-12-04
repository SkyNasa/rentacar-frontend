import React, { useRef, useState } from 'react';
import MaintenanceForm from './blocks/MaintenanceForm';

const AddMaintenancePage = () => {
  const [activeTab, setActiveTab] = useState<'maintenance'>('maintenance');

  const maintenanceRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (
    ref: React.RefObject<HTMLDivElement>,
    tab: 'maintenance'
  ) => {
    setActiveTab(tab);

    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    const header = ref.current?.querySelector('h2');
    if (header) {
      header.setAttribute('tabindex', '-1');
      header.focus();
    }
  };

  return (
    <div className="grid gap-5 lg:gap-7.5 xl:w-[60rem] mx-auto">
      <div className="tabs mb-5 flex" data-tabs="true">
        <button
          className={`tab px-4 py-2 font-medium text-lg border-b-4 ${
            activeTab === 'maintenance'
              ? 'text-primary border-primary'
              : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => handleTabClick(maintenanceRef, 'maintenance')}
        >
          Maintenance
        </button>
      </div>

      <div ref={maintenanceRef}>
        <MaintenanceForm onSubmit={(formData: any) => console.log(formData)} />
      </div>
    </div>
  );
};

export { AddMaintenancePage };
