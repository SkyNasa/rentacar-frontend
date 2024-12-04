import { Options, IOptionsItems } from './blocks';

const NetworkGetStartedContent = () => {
  const items: IOptionsItems = [
    {
      icon: 'user-square',
      title: 'User Cards',
      description: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Mini Cards',
          path: '#'
        },
        {
          title: 'Team Members',
          path: '#'
        },
        {
          title: 'Athor',
          path: '#'
        },
        {
          title: 'NFT',
          path: '#'
        },
        {
          title: 'Social',
          path: '#'
        }
      ]
    },
    {
      icon: 'subtitle',
      title: 'User Base',
      description: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Team Crew',
          path: '#'
        },
        {
          title: 'App Roster',
          path: '#'
        },
        {
          title: 'Visitor',
          path: '#'
        },
        {
          title: 'Authors',
          path: '#'
        },
        {
          title: 'SaaS Users',
          path: '#'
        },
        {
          title: 'Store Clients',
          path: '#'
        }
      ]
    },
    {
      icon: 'key-square',
      title: 'Cooperators',
      description: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: '#'
        },
        {
          title: 'Employee',
          path: '#'
        },
        {
          title: 'Vendors',
          path: '#'
        },
        {
          title: 'Companies',
          path: '#'
        },
        {
          title: 'Service Agents',
          path: '#'
        },
        {
          title: 'Applicants',
          path: '#'
        }
      ]
    },
    {
      icon: 'chart-pie-3',
      title: 'Community Engagement',
      description: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: '#'
        },
        {
          title: 'Employee',
          path: '#'
        },
        {
          title: 'Vendors',
          path: '#'
        },
        {
          title: 'Companies',
          path: '#'
        },
        {
          title: 'Service Agents',
          path: '#'
        },
        {
          title: 'Applicants',
          path: '#'
        }
      ]
    },
    {
      icon: 'calendar-tick',
      title: 'Donatiors',
      description: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: '#'
        },
        {
          title: 'Employee',
          path: '#'
        },
        {
          title: 'Vendors',
          path: '#'
        },
        {
          title: 'Companies',
          path: '#'
        },
        {
          title: 'Service Agents',
          path: '#'
        },
        {
          title: 'Applicants',
          path: '#'
        }
      ]
    }
  ];

  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Options items={items} />
    </div>
  );
};

export { NetworkGetStartedContent };
