import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { DropdownCard1, DropdownCardItem1 } from '@/partials/dropdowns/general';

interface IContributorsItem {
  avatar: string;
  name: string;
  connections: number;
  connected: boolean;
}
interface IContributorsItems extends Array<IContributorsItem> {}

const Contributors = () => {
  const { isRTL } = useLanguage();

  const items: IContributorsItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 6,
      connected: false
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 29,
      connected: true
    },
    {
      avatar: '300-14.png',
      name: 'Cody Fisher',
      connections: 34,
      connected: false
    },
    {
      avatar: '300-7.png',
      name: 'Arlene McCoy',
      connections: 1,
      connected: true
    }
  ];

  const renderItem = (item: IContributorsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2">
        <div className="flex items-center grow gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
            className="rounded-full size-9 shrink-0"
            alt=""
          />

          <div className="flex flex-col">
            <a
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
            >
              {item.name}
            </a>
            <span className="text-xs font-semibold text-gray-600">
              {item.connections} contributors
            </span>
          </div>
        </div>

        <Menu>
          <MenuItem
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: isRTL() ? 'bottom-start' : 'bottom-end',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: isRTL() ? [0, -10] : [0, 10] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </MenuToggle>
            {DropdownCardItem1()}
          </MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header gap-2">
        <h3 className="card-title">Contributors</h3>

        <Menu>
          <MenuItem
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: isRTL() ? 'bottom-start' : 'bottom-end',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: isRTL() ? [0, -10] : [0, 10] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </MenuToggle>
            {DropdownCard1()}
          </MenuItem>
        </Menu>
      </div>

      <div className="card-body">
        <div className="flex flex-col gap-2 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to="/public-profile/network" className="btn btn-link">
          All Contributors
        </Link>
      </div>
    </div>
  );
};

export { Contributors, type IContributorsItem, type IContributorsItems };