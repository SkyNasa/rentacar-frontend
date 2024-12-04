import { KeenIcon, Menu, MenuItem, MenuLink, MenuSub, MenuTitle, MenuToggle } from '@/components';
import { Dispatch, SetStateAction } from 'react';

export interface StatusDropdownProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  options: Record<
    string,
    {
      color: string;
      backgroundColor: string;
    }
  >;
}

export const StatusDropdown = ({ selected, setSelected, options }: StatusDropdownProps) => {
  return (
    <Menu>
      <MenuItem
        toggle="dropdown"
        trigger="click"
        dropdownProps={{
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10] // [skid, distance]
              }
            }
          ]
        }}
      >
        <MenuToggle
          className="btn btn-clear font-bold text-xs h-fit px-3 py-[6px]"
          style={{
            color: options[selected]?.color ?? 'white',
            backgroundColor: options[selected]?.backgroundColor ?? 'gray'
          }}
        >
          {selected}
          <KeenIcon icon="down" className="!text-inherit !text-xs" />
        </MenuToggle>
        <MenuSub className="menu-default" rootClassName="w-full max-w-[200px]">
          {Object.entries(options).map(([key, options]) => (
            <MenuItem
              key={key}
              handleClick={() => {
                setSelected(key);
              }}
            >
              <MenuLink>
                <MenuTitle>
                  <div
                    style={{
                      color: options.color
                    }}
                  >
                    {key}
                  </div>
                </MenuTitle>
              </MenuLink>
            </MenuItem>
          ))}
        </MenuSub>
      </MenuItem>
    </Menu>
  );
};
