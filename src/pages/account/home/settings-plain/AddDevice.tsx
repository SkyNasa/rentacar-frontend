import React, { useRef, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Information, Company } from './blocks';

const AddDevice = () => {
  const [activeTab, setActiveTab] = useState<'information' | 'company'>('information');

  const informationRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (
    ref: React.RefObject<HTMLDivElement>,
    tab: 'information' | 'company'
  ) => {
    setActiveTab(tab);

    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    const header = ref.current?.querySelector('h2');
    if (header) {
      header.setAttribute('tabindex', '-1');
      header.focus();
    }
  };

  return (
    <div className="grid gap-5 lg:gap-7.5 xl:w-[60rem] mx-auto">
      <div className="tabs mb-5 flex">
        <button
          className={`tab px-4 py-2 font-medium text-lg border-b-4 ${
            activeTab === 'information'
              ? 'text-primary border-primary'
              : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => handleTabClick(informationRef, 'information')}
        >
          Information
        </button>
        <button
          className={`tab px-4 py-2 font-medium text-lg border-b-4 ${
            activeTab === 'company'
              ? 'text-primary border-primary'
              : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => handleTabClick(companyRef, 'company')}
        >
          Company
        </button>
      </div>

      <div ref={informationRef}>
        <Information title="Information" />
      </div>
      <div ref={companyRef}>
        <Company />
      </div>
    </div>
  );
};

export { AddDevice };
