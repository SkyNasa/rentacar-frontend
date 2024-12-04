import { useRef, useState } from 'react';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { Menu, MenuItem, MenuToggle } from '@/components';
import { DropdownUser } from '@/partials/dropdowns/user';
import { DropdownNotifications } from '@/partials/dropdowns/notifications';
import { DropdownApps } from '@/partials/dropdowns/apps';
import { DropdownChat } from '@/partials/dropdowns/chat';
import { ModalSearch } from '@/partials/modals/search/ModalSearch';
import { useLanguage } from '@/i18n';

const HeaderTopbar = () => {
  const { isRTL } = useLanguage();
  const itemChatRef = useRef<any>(null);
  const itemAppsRef = useRef<any>(null);
  const itemUserRef = useRef<any>(null);
  const itemNotificationsRef = useRef<any>(null);

  const handleShow = () => {
    window.dispatchEvent(new Event('resize'));
  };

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const handleOpen = () => setSearchModalOpen(true);
  const handleClose = () => {
    setSearchModalOpen(false);
  };

  return (
    <div className="flex items-center gap-2 lg:gap-3.5">
      <button
        onClick={handleOpen}
        className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6079 22.7373C14.2648 22.7373 15.6079 21.3942 15.6079 19.7373C15.6079 18.0805 14.2648 16.7373 12.6079 16.7373C10.9511 16.7373 9.60791 18.0805 9.60791 19.7373C9.60791 21.3942 10.9511 22.7373 12.6079 22.7373Z"
            fill="#E9E9ED"
          />
          <path
            d="M19.6079 15.7373V18.7373C19.6079 19.3373 19.2079 19.7373 18.6079 19.7373H6.60791C6.00791 19.7373 5.60791 19.3373 5.60791 18.7373V15.7373C6.70791 15.7373 7.60791 14.8373 7.60791 13.7373V10.7373C7.60791 8.3373 9.30791 6.3373 11.6079 5.8373V3.7373C11.6079 3.1373 12.0079 2.7373 12.6079 2.7373C13.2079 2.7373 13.6079 3.1373 13.6079 3.7373V5.8373C15.9079 6.3373 17.6079 8.3373 17.6079 10.7373V13.7373C17.6079 14.8373 18.5079 15.7373 19.6079 15.7373ZM11.6079 10.7373C11.6079 10.1373 12.0079 9.7373 12.6079 9.7373C13.2079 9.7373 13.6079 9.3373 13.6079 8.7373C13.6079 8.1373 13.2079 7.7373 12.6079 7.7373C10.9079 7.7373 9.60791 9.0373 9.60791 10.7373C9.60791 11.3373 10.0079 11.7373 10.6079 11.7373C11.2079 11.7373 11.6079 11.3373 11.6079 10.7373Z"
            fill="#B5B5C3"
          />
        </svg>
      </button>

      <button
        onClick={handleOpen}
        className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
      >
        <svg
          width={31}
          height={30}
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5.66553" y="5.07031" width="8.85118" height="8.45833" rx="1.5" fill="#B5B5C3" />
          <path
            opacity="0.3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0456 6.57031C17.0456 5.74189 17.7172 5.07031 18.5456 5.07031H24.3968C25.2252 5.07031 25.8968 5.74189 25.8968 6.57031V12.0286C25.8968 12.8571 25.2252 13.5286 24.3968 13.5286H18.5456C17.7172 13.5286 17.0456 12.8571 17.0456 12.0286V6.57031ZM5.66553 17.4453C5.66553 16.6169 6.3371 15.9453 7.16553 15.9453H13.0167C13.8451 15.9453 14.5167 16.6169 14.5167 17.4453V22.9036C14.5167 23.7321 13.8451 24.4036 13.0167 24.4036H7.16553C6.3371 24.4036 5.66553 23.7321 5.66553 22.9036V17.4453ZM18.5456 15.9453C17.7172 15.9453 17.0456 16.6169 17.0456 17.4453V22.9036C17.0456 23.7321 17.7172 24.4036 18.5456 24.4036H24.3968C25.2252 24.4036 25.8968 23.7321 25.8968 22.9036V17.4453C25.8968 16.6169 25.2252 15.9453 24.3968 15.9453H18.5456Z"
            fill="#B5B5C3"
          />
        </svg>
      </button>
      <ModalSearch open={searchModalOpen} onClose={handleClose} />

      <Menu>
        <MenuItem
          ref={itemChatRef}
          onShow={handleShow}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: isRTL() ? 'bottom-start' : 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: isRTL() ? [-170, 10] : [170, 10]
                }
              }
            ]
          }}
        >
          <MenuToggle className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
            <svg
              width={32}
              height={30}
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.3"
                x="17.3926"
                y="4.91211"
                width="3.79335"
                height="19.6499"
                rx="1.89667"
                fill="#B5B5C3"
              />
              <rect
                x="11.0703"
                y="11.0527"
                width="3.79335"
                height="13.5093"
                rx="1.89667"
                fill="#B5B5C3"
              />
              <rect
                x="23.7148"
                y="13.5098"
                width="3.79335"
                height="11.0531"
                rx="1.89667"
                fill="#B5B5C3"
              />
              <rect
                x="4.74805"
                y="15.9658"
                width="3.79335"
                height="8.59684"
                rx="1.89667"
                fill="#B5B5C3"
              />
            </svg>
          </MenuToggle>

          {DropdownChat({ menuTtemRef: itemChatRef })}
        </MenuItem>
      </Menu>

      <Menu>
        <MenuItem
          ref={itemAppsRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: isRTL() ? 'bottom-start' : 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: isRTL() ? [10, 10] : [-10, 10]
                }
              }
            ]
          }}
        >
          <MenuToggle className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
            <svg
              width={27}
              height={25}
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.5543 19.079C24.8744 19.3783 25.3974 19.1502 25.3957 18.7119L25.3772 13.8629V6.1398C25.3772 4.71801 24.1443 3.56543 22.6234 3.56543H9.77236C8.25147 3.56543 7.01855 4.71801 7.01855 6.1398V9.67956H14.7426C16.3995 9.67956 17.7426 11.0227 17.7426 12.6796V16.4373H21.7284L24.5543 19.079Z"
                fill="#B5B5C3"
              />
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.46533 18.8509V13.7558C2.46533 12.6302 3.44139 11.7178 4.64543 11.7178H13.3658C14.5698 11.7178 15.5459 12.6302 15.5459 13.7558V18.8509C15.5459 19.9765 14.5698 20.889 13.3658 20.889H4.77158L3.32724 22.1813C3.00516 22.4695 2.49384 22.2409 2.49384 21.8087V19.1814C2.47508 19.0738 2.46533 18.9634 2.46533 18.8509ZM6.8418 15.2748C6.8418 14.9987 7.06566 14.7748 7.3418 14.7748H12.8821C13.1582 14.7748 13.3821 14.9987 13.3821 15.2748V15.2939C13.3821 15.57 13.1582 15.7939 12.8821 15.7939H7.3418C7.06566 15.7939 6.8418 15.57 6.8418 15.2939V15.2748ZM10.6119 16.8129C10.3358 16.8129 10.1119 17.0367 10.1119 17.3129V17.3319C10.1119 17.608 10.3358 17.8319 10.6119 17.8319H12.8821C13.1582 17.8319 13.3821 17.608 13.3821 17.3319V17.3129C13.3821 17.0367 13.1582 16.8129 12.8821 16.8129H10.6119Z"
                fill="#B5B5C3"
              />
            </svg>
          </MenuToggle>

          {DropdownApps()}
        </MenuItem>
      </Menu>

      <Menu>
        <MenuItem
          ref={itemNotificationsRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: isRTL() ? 'bottom-start' : 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: isRTL() ? [70, 10] : [-70, 10] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle className="btn btn-icon btn-icon-lg relative cursor-pointer size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
            <svg
              width={31}
              height={30}
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5922 7.77441C15.784 7.77649 14.0505 8.49572 12.7719 9.77431C11.4933 11.0529 10.7741 12.7864 10.772 14.5946C11.1454 23.6359 24.039 23.6359 24.4085 14.5946C24.4064 12.7871 23.6877 11.0542 22.41 9.7757C21.1323 8.49722 19.3997 7.77753 17.5922 7.77441ZM17.0026 20.2041C10.3199 19.3236 10.3199 9.86569 17.0026 8.98515V20.2041Z"
                fill="#B5B5C3"
              />
              <path
                d="M17.5926 6.80055C17.749 6.80055 17.8989 6.73842 18.0095 6.62784C18.1201 6.51726 18.1822 6.36728 18.1822 6.2109V4.78789C18.1822 4.6315 18.1201 4.48153 18.0095 4.37095C17.8989 4.26037 17.749 4.19824 17.5926 4.19824C17.4362 4.19824 17.2862 4.26037 17.1756 4.37095C17.0651 4.48153 17.0029 4.6315 17.0029 4.78789V6.2109C17.0029 6.36728 17.0651 6.51726 17.1756 6.62784C17.2862 6.73842 17.4362 6.80055 17.5926 6.80055Z"
                fill="#E9E9ED"
              />
              <path
                d="M17.5926 22.4023C17.4362 22.4023 17.2862 22.4645 17.1756 22.575C17.0651 22.6856 17.0029 22.8356 17.0029 22.992V24.415C17.0029 24.5714 17.0651 24.7214 17.1756 24.8319C17.2862 24.9425 17.4362 25.0046 17.5926 25.0046C17.749 25.0046 17.8989 24.9425 18.0095 24.8319C18.1201 24.7214 18.1822 24.5714 18.1822 24.415V22.9802C18.1791 22.8259 18.1156 22.6789 18.0054 22.5709C17.8952 22.4628 17.7469 22.4023 17.5926 22.4023Z"
                fill="#E9E9ED"
              />
              <path
                d="M12.0771 20.1106C12.0227 20.0555 11.9578 20.0117 11.8863 19.9818C11.8147 19.9519 11.738 19.9365 11.6605 19.9365C11.5829 19.9365 11.5062 19.9519 11.4347 19.9818C11.3631 20.0117 11.2983 20.0555 11.2438 20.1106L10.2375 21.1169C10.1269 21.228 10.0651 21.3784 10.0654 21.535C10.0658 21.6917 10.1284 21.8418 10.2394 21.9523C10.3504 22.0628 10.5008 22.1247 10.6575 22.1243C10.8141 22.1239 10.9642 22.0613 11.0747 21.9503L12.0771 20.944C12.1323 20.8895 12.1761 20.8246 12.206 20.7531C12.2358 20.6816 12.2512 20.6048 12.2512 20.5273C12.2512 20.4498 12.2358 20.373 12.206 20.3015C12.1761 20.23 12.1323 20.1651 12.0771 20.1106Z"
                fill="#E9E9ED"
              />
              <path
                d="M9.20748 14.0059H7.78447C7.62809 14.0059 7.47811 14.068 7.36753 14.1786C7.25695 14.2891 7.19482 14.4391 7.19482 14.5955C7.19482 14.7519 7.25695 14.9019 7.36753 15.0124C7.47811 15.123 7.62809 15.1852 7.78447 15.1852H9.20748C9.36387 15.1852 9.51384 15.123 9.62442 15.0124C9.735 14.9019 9.79713 14.7519 9.79713 14.5955C9.79713 14.4391 9.735 14.2891 9.62442 14.1786C9.51384 14.068 9.36387 14.0059 9.20748 14.0059Z"
                fill="#E9E9ED"
              />
              <path
                d="M11.2438 9.08399C11.3556 9.18815 11.5034 9.24485 11.6562 9.24216C11.8089 9.23946 11.9547 9.17758 12.0627 9.06955C12.1707 8.96151 12.2326 8.81576 12.2353 8.66301C12.238 8.51025 12.1813 8.36241 12.0771 8.25063L11.0747 7.2443C10.9642 7.13327 10.8141 7.07068 10.6575 7.07031C10.5008 7.06995 10.3504 7.13182 10.2394 7.24233C10.1284 7.35285 10.0658 7.50294 10.0654 7.65959C10.0651 7.81625 10.1269 7.96663 10.2375 8.07767L11.2438 9.08399Z"
                fill="#E9E9ED"
              />
              <path
                d="M14.3845 21.703C14.3136 21.6702 14.2369 21.6518 14.1589 21.6488C14.0808 21.6459 14.0029 21.6585 13.9298 21.686C13.8566 21.7134 13.7897 21.7551 13.7328 21.8086C13.6759 21.8622 13.6302 21.9265 13.5983 21.9978L12.2186 25.0561C12.1534 25.2 12.1481 25.3639 12.2037 25.5117C12.2594 25.6595 12.3715 25.7791 12.5154 25.8443C12.6592 25.9094 12.8231 25.9148 12.9709 25.8591C13.1187 25.8035 13.2384 25.6914 13.3035 25.5475L14.6794 22.4892C14.7133 22.4185 14.7326 22.3416 14.736 22.2633C14.7395 22.1849 14.7271 22.1067 14.6996 22.0332C14.672 21.9598 14.6299 21.8927 14.5758 21.8359C14.5216 21.7792 14.4566 21.734 14.3845 21.703Z"
                fill="#E9E9ED"
              />
              <path
                d="M10.2808 17.2914C10.2261 17.1449 10.1154 17.0262 9.97311 16.9613C9.83083 16.8965 9.66861 16.8908 9.52213 16.9455L6.37735 18.1248C6.24639 18.188 6.14339 18.2973 6.08815 18.4318C6.03291 18.5664 6.02932 18.7165 6.07807 18.8535C6.12683 18.9905 6.22448 19.1047 6.35228 19.1741C6.48008 19.2434 6.62901 19.2631 6.77045 19.2294L9.91523 18.0501C9.98951 18.0249 10.058 17.9852 10.1168 17.9333C10.1755 17.8813 10.2233 17.8182 10.2574 17.7475C10.2914 17.6769 10.311 17.6002 10.315 17.5218C10.3191 17.4435 10.3074 17.3652 10.2808 17.2914Z"
                fill="#E9E9ED"
              />
              <path
                d="M6.70759 10.1569L9.74623 11.5799C9.88802 11.6461 10.0503 11.6532 10.1974 11.5998C10.3444 11.5463 10.4643 11.4367 10.5305 11.2949C10.5967 11.1531 10.6038 10.9908 10.5504 10.8437C10.4969 10.6967 10.3872 10.5768 10.2455 10.5106L7.20682 9.08763C7.06503 9.02143 6.90275 9.01426 6.75568 9.06771C6.60861 9.12116 6.48879 9.23084 6.42259 9.37263C6.35639 9.51441 6.34922 9.67669 6.40267 9.82376C6.45612 9.97084 6.5658 10.0907 6.70759 10.1569Z"
                fill="#E9E9ED"
              />
              <path
                d="M14.2312 6.89056C14.2833 7.03808 14.3919 7.15885 14.5331 7.2263C14.6743 7.29376 14.8365 7.30237 14.984 7.25024C15.1315 7.19811 15.2523 7.08952 15.3197 6.94834C15.3872 6.80717 15.3958 6.64498 15.3437 6.49746L14.2194 3.35268C14.1596 3.21628 14.0503 3.10759 13.9136 3.04845C13.7768 2.98932 13.6228 2.98412 13.4824 3.03391C13.342 3.08369 13.2257 3.18477 13.1568 3.31683C13.0878 3.44889 13.0714 3.60213 13.1109 3.74578L14.2312 6.89056Z"
                fill="#E9E9ED"
              />
            </svg>
          </MenuToggle>
          {DropdownNotifications({ menuTtemRef: itemNotificationsRef })}
        </MenuItem>
      </Menu>

      <Menu>
        <MenuItem
          ref={itemUserRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: isRTL() ? 'bottom-start' : 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: isRTL() ? [-20, 10] : [20, 10] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle className="btn btn-icon rounded-full">
            <img
              className="size-9 rounded-full border-2 border-success shrink-0"
              src={toAbsoluteUrl('/media/avatars/300-2.png')}
              alt=""
            />
          </MenuToggle>
          {DropdownUser({ menuItemRef: itemUserRef })}
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HeaderTopbar };
