import React from 'react';
import { Calendar } from 'lucide-react';

interface IGeneralSettingsProps {
  title?: string;
}

const Information = ({ title }: IGeneralSettingsProps) => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Information</h3>

      <div className="grid gap-6">
        {/* Full Name and Date of Birth */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg input focus:border-blue-500 input"
              placeholder="Full Name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Date Of Birth</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg input focus:border-blue-500"
                placeholder="00 / 00 / 0000"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Identity Type and Nationality */}
        <div className=" w-full grid gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Identity Type</label>
            <div className="flex gap-4">
              <label className="relative flex items-center p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input type="radio" name="identityType" value="turkish" className="input peer sr-only" />
                <div className="w-4 h-4 border-2 rounded-full mr-2 border-gray-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-sm font-medium text-gray-900">Turkish</span>
                <div className="absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:border-dashed" />
              </label>

              <label className="relative flex items-center p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input type="radio" name="identityType" value="foreign" className="input peer sr-only" />
                <div className="w-4 h-4 border-2 rounded-full mr-2 border-gray-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-sm font-medium text-gray-900">Foreign</span>
                <div className="absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:border-dashed" />
              </label>
            </div>
          </div>
        </div>

        {/* Place of Birth and Nationality */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Place Of Birth</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg input focus:border-blue-500">
              <option value="">Nationality</option>
              <option value="tr">Turkish</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Nationality</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg input focus:border-blue-500">
              <option value="">Nationality</option>
              <option value="tr">Turkish</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Passport Photo and Entry Stamp */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Passport Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_370_5466)">
                    <path
                      d="M2 13C2 6.37258 7.37258 1 14 1H38C44.6274 1 50 6.37258 50 13V37C50 43.6274 44.6274 49 38 49H14C7.37258 49 2 43.6274 2 37V13Z"
                      fill="white"
                    />
                    <path
                      d="M2.5 13C2.5 6.64873 7.64873 1.5 14 1.5H38C44.3513 1.5 49.5 6.64873 49.5 13V37C49.5 43.3513 44.3513 48.5 38 48.5H14C7.64873 48.5 2.5 43.3513 2.5 37V13Z"
                      stroke="#E9EBF0"
                    />
                    <path
                      d="M33.35 23.04C32.67 19.59 29.64 17 26 17C23.11 17 20.6 18.64 19.35 21.04C16.34 21.36 14 23.91 14 27C14 30.31 16.69 33 20 33H33C35.76 33 38 30.76 38 28C38 25.36 35.95 23.22 33.35 23.04ZM28 26V30H24V26H21L26 21L31 26H28Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_370_5466"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
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
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0584 0 0 0 0 0.0656 0 0 0 0 0.08 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_370_5466"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_370_5466"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <p className="mb-1 text-sm text-gray-600">Drag and drop your files</p>
                <p className="text-xs text-gray-400 mb-3">Unlimited files, 5GB total limit</p>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                  Or choose files
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">
              Photo Of The Last Entry Stamp To Turkey
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_370_5466)">
                    <path
                      d="M2 13C2 6.37258 7.37258 1 14 1H38C44.6274 1 50 6.37258 50 13V37C50 43.6274 44.6274 49 38 49H14C7.37258 49 2 43.6274 2 37V13Z"
                      fill="white"
                    />
                    <path
                      d="M2.5 13C2.5 6.64873 7.64873 1.5 14 1.5H38C44.3513 1.5 49.5 6.64873 49.5 13V37C49.5 43.3513 44.3513 48.5 38 48.5H14C7.64873 48.5 2.5 43.3513 2.5 37V13Z"
                      stroke="#E9EBF0"
                    />
                    <path
                      d="M33.35 23.04C32.67 19.59 29.64 17 26 17C23.11 17 20.6 18.64 19.35 21.04C16.34 21.36 14 23.91 14 27C14 30.31 16.69 33 20 33H33C35.76 33 38 30.76 38 28C38 25.36 35.95 23.22 33.35 23.04ZM28 26V30H24V26H21L26 21L31 26H28Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_370_5466"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
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
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0584 0 0 0 0 0.0656 0 0 0 0 0.08 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_370_5466"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_370_5466"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <p className="mb-1 text-sm text-gray-600">Drag and drop your files</p>
                <p className="text-xs text-gray-400 mb-3">Unlimited files, 5GB total limit</p>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                  Or choose files
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Passport Number */}
        <div className="grid gap-2">
          <label className="text-sm font-medium text-gray-700">Passport number</label>
          <input
            type="text"
            className="w-full px-4 py-2 input"
            placeholder="ID number"
          />
        </div>
      </div>
    </div>
  );
};

export { Information, type IGeneralSettingsProps };
