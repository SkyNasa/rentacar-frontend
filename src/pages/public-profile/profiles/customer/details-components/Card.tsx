import React from 'react';

type CardProps = {
  type: 'maintenance' | 'violations';
  title: string;
  description: string;
  count: number;
  date: string;
  unpaidAmount: number;
  paidAmount: number;
};

const Card: React.FC<CardProps> = ({ type, title, description, count, date, unpaidAmount, paidAmount }) => {
  const MaintenanceIcon = () => (
    <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_709_11735)">
        <rect x="6" y="2" width="64" height="64" rx="12" fill="#FFA800" />
      </g>
      <g clip-path="url(#clip0_709_11735)">
        <g clip-path="url(#clip1_709_11735)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.4566 24.682L33.2591 35.4596C33.2068 35.51 33.2439 35.5959 33.318 35.5957C36.443 35.5902 38.1664 35.5883 39.5576 36.0104C39.5878 36.0196 39.6186 36.0123 39.6411 35.9908L47.9237 28.0189C48.3446 27.6137 48.8883 27.429 49.4907 27.5014L52.6762 27.8845C53.273 27.9562 53.8178 27.7763 54.2432 27.367L56.4281 25.2639C56.8139 24.8924 57.0007 24.4328 56.9788 23.9079L56.8057 19.7613C56.8027 19.6918 56.7154 19.6589 56.6643 19.7081C55.3145 21.0073 53.9645 22.3066 52.6147 23.6058C52.195 24.0098 51.5105 24.0097 51.091 23.6058L49.0419 21.6337C48.6224 21.2297 48.6224 20.571 49.0419 20.1671C50.3919 18.8679 51.7418 17.5686 53.0918 16.2693C53.1429 16.22 53.1087 16.1359 53.0365 16.1332L48.7283 15.9665C48.1829 15.9454 47.7052 16.1252 47.3193 16.4965L45.1342 18.5997C44.709 19.009 44.522 19.5334 44.5965 20.1077L44.9946 23.1737C45.0696 23.7536 44.8775 24.2769 44.4566 24.682ZM47.1176 46.3777C46.2072 46.7382 45.4997 47.5548 45.4997 48.8307C45.4997 50.3333 46.765 51.551 48.3261 51.551C49.8872 51.551 51.1524 50.3333 51.1524 48.8307C51.1524 47.5281 50.4351 46.7382 49.5061 46.3664L49.5057 46.3673C48.7243 46.0667 47.9037 46.0957 47.1201 46.3767C47.1193 46.377 47.1185 46.3773 47.1176 46.3777ZM29.6577 46.907C28.554 45.8447 26.7641 45.8447 25.6605 46.907C24.5568 47.9692 24.5568 49.692 25.6605 50.7543C26.7642 51.8165 28.554 51.8165 29.6577 50.7543C30.7613 49.692 30.7613 47.9692 29.6577 46.907ZM43.1744 39.8726C43.9384 40.5197 45.9394 41.2405 46.838 41.4832C49.4858 42.1986 52.4371 42.7575 55.0505 43.325C56.2346 43.5822 57.2644 44.3251 57.4536 45.466C57.5732 46.1873 57.494 47.0799 57.4557 47.9172C57.4471 48.1023 57.2778 48.2321 57.0793 48.2321H52.4293C52.3879 48.2321 52.3533 48.2033 52.3474 48.1637C52.1241 46.688 51.1597 45.7193 49.967 45.2598L49.9674 45.259C47.6411 44.3641 44.7108 45.4918 44.3051 48.1637C44.2991 48.2032 44.2645 48.232 44.2232 48.232H31.7523C31.7116 48.232 31.6775 48.2043 31.6706 48.1656C31.5258 47.3504 31.1192 46.621 30.5369 46.0606C28.3099 43.9171 24.5319 44.9329 23.7292 47.8074C23.7178 47.8483 23.6755 47.8734 23.6325 47.8649L19.7116 47.0895C19.3394 47.0159 18.9653 46.7743 18.9653 46.4041V41.8406C18.9653 41.2055 19.5472 40.7761 20.1935 40.6384L24.0529 39.8162C24.1826 39.7888 24.304 39.7212 24.3954 39.6154C26.8366 36.7856 27.1845 36.7858 32.063 36.7885C32.4404 36.7887 32.8435 36.7889 33.2749 36.788C36.4351 36.781 38.0287 36.7856 39.2369 37.1661C40.4102 37.5357 41.341 38.3201 43.1744 39.8726ZM48.6014 29.0817C48.5889 29.0517 48.5955 29.0194 48.619 28.9963C48.8286 28.7903 48.9825 28.6141 49.3405 28.6571L52.5261 29.0402C53.3969 29.1449 54.2364 28.9049 54.8964 28.3694C54.9429 28.3315 55.014 28.353 55.0298 28.4097L55.9836 31.8359C55.9931 31.8698 55.9793 31.9043 55.9487 31.9234L53.1567 33.6686C53.1349 33.6822 53.122 33.7026 53.1193 33.7274C52.9741 35.1194 52.5924 36.4665 52.0048 37.7193C51.9941 37.7421 51.9947 37.766 52.0065 37.7884L53.5199 40.6475C53.5365 40.6788 53.5305 40.7152 53.5047 40.7402L52.6545 41.5585C52.634 41.5784 52.6066 41.586 52.5783 41.5801C50.7529 41.1979 48.9248 40.8065 47.1733 40.333C46.7773 40.2261 46.1805 40.0265 45.5901 39.7901C45.5309 39.7664 45.5207 39.6906 45.5716 39.6532C48.9949 37.1325 50.1394 32.7884 48.6014 29.0817ZM33.1952 26.0384C30.5395 28.5945 29.8014 32.2972 30.9807 35.4907C31.0001 35.5429 30.9604 35.597 30.9029 35.5972C27.5799 35.6089 26.4941 35.7471 24.9977 37.1679C24.9524 37.2109 24.8759 37.191 24.8594 37.1317L23.7259 33.0601C23.7165 33.0262 23.7303 32.9917 23.7608 32.9726L26.5529 31.2274C26.5747 31.2138 26.5876 31.1934 26.5903 31.1685C26.7355 29.7765 27.1172 28.4295 27.7048 27.1767C27.7155 27.1539 27.7149 27.13 27.7031 27.1076L26.1896 24.2486C26.1731 24.2173 26.1791 24.1809 26.2048 24.156L31.2397 19.3101C31.2655 19.2853 31.3034 19.2794 31.3359 19.2954L34.3036 20.7508C34.3267 20.7621 34.3515 20.7628 34.3751 20.7525C35.689 20.1842 37.0914 19.8224 38.5245 19.6824C38.5504 19.6799 38.5715 19.6675 38.5857 19.6465L40.3998 16.9578C40.4197 16.9284 40.4555 16.915 40.4908 16.9242L44.0506 17.8423C44.1094 17.8574 44.1318 17.926 44.0925 17.9708C43.536 18.606 43.2867 19.414 43.3954 20.2521L43.7935 23.3184C43.8382 23.6628 43.6552 23.811 43.4411 24.0127C43.4172 24.0352 43.3836 24.0417 43.3524 24.0297C39.9609 22.7261 35.9412 23.3953 33.1952 26.0384Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_709_11735"
          x="0.5"
          y="-2.38419e-07"
          width="75"
          height="75"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.5" />
          <feGaussianBlur stdDeviation="2.75" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_709_11735" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_709_11735"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_709_11735">
          <rect width="47" height="47" fill="white" transform="translate(14 11)" />
        </clipPath>
        <clipPath id="clip1_709_11735">
          <rect width="43" height="43" fill="white" transform="translate(16 13)" />
        </clipPath>
      </defs>
    </svg>
  );

  const ViolationsIcon = () => (
    <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_709_11762)">
        <rect x="6" y="2" width="64" height="64" rx="12" fill="#FF0000" />
      </g>
      <g clip-path="url(#clip0_709_11762)">
        <path
          d="M38 14C27.5236 14 19 22.5236 19 33C19 43.4764 27.5236 52 38 52C48.4764 52 57 43.4764 57 33C57 22.5236 48.4764 14 38 14ZM38 47.25C30.1428 47.25 23.75 40.8572 23.75 33C23.75 30.0011 24.6592 27.1661 26.3879 24.747L46.253 44.6121C43.8339 46.3408 40.9989 47.25 38 47.25ZM49.6121 41.253L29.747 21.3879C32.1661 19.6592 35.0011 18.75 38 18.75C45.8572 18.75 52.25 25.1428 52.25 33C52.25 35.9989 51.3408 38.8339 49.6121 41.253Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_709_11762"
          x="0.5"
          y="-2.38419e-07"
          width="75"
          height="75"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.5" />
          <feGaussianBlur stdDeviation="2.75" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_709_11762" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_709_11762"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_709_11762">
          <rect width="47" height="47" fill="white" transform="translate(14 10)" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full md:w-1/3 mt-8">
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-start space-x-2 flex-grow">
          <div>{type === 'maintenance' ? <MaintenanceIcon /> : <ViolationsIcon />}</div>
          <div className="flex-grow min-w-0">
            <h2 className="text-gray-800 font-semibold text-base truncate">
              {type === 'maintenance' ? 'Maintenance' : 'Violations'}
            </h2>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:flex-col sm:items-center ml-auto">
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-gray-600">{count}</span>
          </div>
          <span className="text-gray-500 text-sm sm:mt-1">
            {type === 'maintenance' ? 'Maintenance' : 'Violations'}
          </span>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <div className="flex-1">
          <p className="text-red-500 text-sm mb-1">Unpaid</p>
          <div className="flex items-center text-red-500">
            <svg
              className="w-4 h-4 rotate-45 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-gray-900 ml-1">+${unpaidAmount}</span>
          </div>
        </div>

        <div className="flex-1 text-right">
          <p className="text-green-500 text-sm mb-1">Paid</p>
          <div className="flex items-center justify-end text-green-500">
            <svg
              className="w-4 h-4 -rotate-45 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-gray-900 ml-1">+${paidAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
