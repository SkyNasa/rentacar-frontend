import React from 'react';
import { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { toAbsoluteUrl } from '@/utils/Assets';
interface ScratchPhoto {
  id: number;
  file: File | null;
  preview: string | null;
}

interface IGeneralSettingsProps {
  title: string;
}

const CarScratch = ({ title }: IGeneralSettingsProps) => {
  const [scratchPhotos, setScratchPhotos] = useState<ScratchPhoto[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  // Handle file selection and add the photo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPhoto: ScratchPhoto = {
        id: nextId,
        file,
        preview: URL.createObjectURL(file)
      };
      setScratchPhotos([...scratchPhotos, newPhoto]);
      setNextId(nextId + 1);
    }
  };

  // Delete a scratch photo
  const deleteScratch = (id: number) => {
    setScratchPhotos(scratchPhotos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="card bg-white shadow-md rounded-lg p-4">
      <div className="flex p-4 gap-6">
        {/* Scratch Photo Grid Section */}
        <div className="w-2/3">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {scratchPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative border border-gray-300 rounded-md overflow-hidden"
              >
                <img
                  src={photo.preview || ''}
                  alt={`Scratch ${photo.id}`}
                  className="w-full h-32 object-cover"
                />
                <button
                  type="button"
                  onClick={() => deleteScratch(photo.id)}
                  className="absolute top-2 right-2 bg-gray-200 text-white p-1 rounded-full hover:bg-gray-600"
                >
                  {/* Edit Icon */}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_430_3495)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1483 19.3928L18.5979 11.0522C18.9484 10.6025 19.0731 10.0825 18.9562 9.55298C18.855 9.07165 18.559 8.61398 18.115 8.26679L17.0322 7.4067C16.0897 6.65708 14.9213 6.73598 14.2514 7.59608L13.527 8.53586C13.4336 8.65344 13.4569 8.82703 13.5738 8.92172C13.5738 8.92172 15.4043 10.3894 15.4432 10.421C15.5678 10.5393 15.6613 10.6971 15.6847 10.8865C15.7236 11.2574 15.4666 11.6046 15.0849 11.6519C14.9058 11.6756 14.7344 11.6204 14.6098 11.5178L12.6858 9.98697C12.5923 9.91675 12.4521 9.93174 12.3742 10.0264L7.80186 15.9445C7.50587 16.3154 7.40461 16.7967 7.50587 17.2623L8.09007 19.7952C8.12123 19.9293 8.23807 20.024 8.37828 20.024L10.9488 19.9925C11.4161 19.9846 11.8523 19.7715 12.1483 19.3928ZM15.7477 18.6039H19.9391C20.3481 18.6039 20.6807 18.9409 20.6807 19.3551C20.6807 19.7702 20.3481 20.1063 19.9391 20.1063H15.7477C15.3388 20.1063 15.0062 19.7702 15.0062 19.3551C15.0062 18.9409 15.3388 18.6039 15.7477 18.6039Z"
                        fill="#50CD89"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_430_3495">
                        <rect width="27" height="27" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            ))}

            {/* Upload Button */}
            <label
              htmlFor="file-upload"
              className="cursor-pointer border-dashed border-2 border-gray-400 flex flex-col items-center justify-center rounded-md hover:bg-gray-100"
              style={{ height: '8rem' }}
            >
              <FaPlus size={24} className="text-gray-500" />
              <span className="text-gray-500 text-sm">Upload Photo</span>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>

        {/* Car Diagram Section */}
        <div className="w-1/3 border border-gray-300 rounded-md p-4 relative">
          <h3 className="text-lg font-semibold mb-2">Car Diagram</h3>
          <div className="relative">
            <div className="relative flex justify-center items-center col-span-full rounded-lg p-4 mb-8">
              <img
                className="rounded-lg object-cover max-w-full max-h-full"
                src={toAbsoluteUrl('/media/images/car.png')}
                alt="Car"
              />
              {/* Plus buttons */}
              <button
                className="absolute top-2 left-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => alert('Add input here')}
              >
                +
              </button>
              <button
                className="absolute top-2 right-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => alert('Add input here')}
              >
                +
              </button>
              <button
                className="absolute bottom-2 left-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => alert('Add input here')}
              >
                +
              </button>
              <button
                className="absolute bottom-2 right-2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => alert('Add input here')}
              >
                +
              </button>
              {/* Center Plus Buttons */}
              <button
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white text-gray rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => alert('Center button')}
              >
                +
              </button>

              <button
                className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white text-gray rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => alert('Lower center button')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CarScratch };
