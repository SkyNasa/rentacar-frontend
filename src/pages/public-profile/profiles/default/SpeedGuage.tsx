import React from 'react';

const SpeedGauge = () => {
  // Constants for arc calculations
  const value = 46;
  const maxValue = 100;
  const radius = 80;
  const strokeWidth = 12;
  const viewBoxSize = 200;
  const center = viewBoxSize / 2;

  // Calculate the arc path
  const startAngle = -150;
  const endAngle = -30;
  const angleRange = endAngle - startAngle;
  const valueAngle = startAngle + angleRange * (value / maxValue);

  // Create arc paths with proper typing
  const createArc = (start: number, end: number): string => {
    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArcFlag = end - start <= 180 ? '0' : '1';

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  return (
    <div className="w-75 h-70 relative border m-4">
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="w-full">
        {/* Background arc */}
        <path
          d={createArc(startAngle, endAngle)}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Value arc (blue) */}
        <path
          d={createArc(startAngle, valueAngle)}
          fill="none"
          stroke="#4338ca"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Red segment */}
        <path
          d={createArc(endAngle - 30, endAngle)}
          fill="none"
          stroke="#ef4444"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Center value */}
        <text x={center} y={center} textAnchor="middle" className="text-4xl font-bold" fill="black">
          {value}
        </text>

        <text x={center} y={center + 25} textAnchor="middle" className="text-sm" fill="#6b7280">
          km
        </text>
      </svg>

      {/* Location information */}
      <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
        {/* Left Section: Distance and Speed */}
        <div className="flex flex-col items-center">
          {/* Distance */}
          <div className="text-lg font-semibold text-gray-800">4.92 KM</div>
          {/* Speed Indicator */}
          <div className="relative mt-2">
            {/* Circle Background */}
            <div className="w-20 h-20 rounded-full border-4 border-gray-200"></div>
            {/* Yellow Arc */}
            <div
              className="absolute inset-0 w-20 h-20 rounded-full border-4 border-yellow-400"
              style={{
                clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
              }}
            ></div>
            {/* Speed Text */}
            <div className="absolute inset-2 flex items-center justify-center text-sm font-bold text-gray-700">
              km/h 75
            </div>
          </div>
        </div>

        {/* Right Section: Route Details */}
        <div className="ml-4 flex flex-col">
          {/* Location 1 */}
          <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-white border-2 border-blue-600"></div>

            <div className="ml-2">
              <div className="text-sm font-semibold text-gray-800">Başakşehir/İstanbul</div>
              <div className="text-xs text-gray-500">2024-04-29 12:35:35</div>
            </div>
          </div>

          {/* Line Between Locations */}
          <div className="ml-1 h-6 border-l border-gray-300"></div>

          {/* Location 2 */}
          <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-white border-2 border-blue-600"></div>
            <div className="ml-2">
              <div className="text-sm font-semibold text-gray-800">Fatih/İstanbul</div>
              <div className="text-xs text-gray-500">2024-04-29 12:35:35</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedGauge;
