import React, { useRef, useState } from 'react';
import { Information, Password, Contact } from './blocks';

const AddUserPage = () => {
  const [activeTab, setActiveTab] = useState<'information' | 'account' | 'contact'>('information');

  const informationRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (
    ref: React.RefObject<HTMLDivElement>,
    tab: 'information' | 'account' | 'contact'
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
      <div className="tabs mb-5 flex " data-tabs="true">
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
            activeTab === 'account'
              ? 'text-primary border-primary'
              : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => handleTabClick(accountRef, 'account')}
        >
          Account
        </button>
        <button
          className={`tab px-4 py-2 font-medium text-lg border-b-4 ${
            activeTab === 'contact'
              ? 'text-primary border-primary'
              : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => handleTabClick(contactRef, 'contact')}
        >
          Contact
        </button>
      </div>

      <div ref={informationRef}>
        <Information title="Information" />
      </div>
      <div ref={accountRef}>
        <Password />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export { AddUserPage };
