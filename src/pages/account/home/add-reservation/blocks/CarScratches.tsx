import React, { useState } from 'react';
import carImage from './car.png';

const CarScratches = () => {
  const [selectedPlace, setSelectedPlace] = useState('8');
  const [places, setPlaces] = useState([
    { id: '2', selectedValue: '2' },
    { id: '8', selectedValue: '8' }
  ]);

  const handleAddPlace = () => {
    if (!places.find((p) => p.id === selectedPlace)) {
      setPlaces([...places, { id: selectedPlace, selectedValue: selectedPlace }]);
    }
  };

  const handlePlaceChange = (placeId: string, newValue: string) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId ? { ...place, selectedValue: newValue } : place
      )
    );
  };

  const radioStyle = (isSelected: boolean) =>
    `flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
      isSelected
        ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
        : 'border-gray-300 text-gray-600'
    }`;

  return (
    <div className="card pb-2.5">
      <div className="card-header">
        <h4 className="text-base font-medium card-title">Car Scratches</h4>
      </div>
      <div className="card-body grid gap-5 grid-cols-1 md:grid-cols-[1fr,300px]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Dropdown and Add Button */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose a place</label>
            <div className="flex gap-4">
              <select
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="select"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={String(num)}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddPlace}
                className="px-6 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50"
              >
                Add
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">As per side image</p>
          </div>

          {/* Place Sections */}
          {places.map((place) => (
            <div key={place.id} className="space-y-2">
              <div className="w-full max-w-2xl p-4">
                {/* Dynamic Place Label */}
                <h3 className="text-lg font-medium mb-4">Place {place.selectedValue}</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    {/* Place Dropdown */}
                    <div className="w-1/3">
                      <select
                        className="select"
                        value={place.selectedValue}
                        onChange={(e) => handlePlaceChange(place.id, e.target.value)}
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={String(num)}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1 text-sm text-gray-500">As per side image</p>
                    </div>

                    {/* Image Upload */}
                    <div className="w-2/3">
                      <div className="flex items-center justify-between w-full p-2 border border-gray-200 rounded-lg bg-white">
                        <span className="text-gray-500">Drag and drop your files</span>
                        <button className="px-4 py-1 bg-blue-600 text-white rounded-lg">
                          Or choose files
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Unlimited files (5GB total limit)
                      </p>
                    </div>
                  </div>

                  {/* Explanation Text Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Explanation of Place {place.selectedValue}
                    </label>
                    <textarea
                      className="mt-1 w-full p-3 border border-gray-200 rounded-lg resize-none h-32"
                      placeholder="Organize your thoughts with an outline. Here's the outlining strategy I use. I promise it works like a charm."
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Image Space */}
        <div className="h-full border border-gray-200 rounded-lg p-8">
          <img src={carImage} alt="car" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export { CarScratches };
