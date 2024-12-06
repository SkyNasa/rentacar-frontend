import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Define the prop types
interface CardChartProps {
  title: string;
  value: string;
  unit: string;
  percentage: number;
  color: string;
  icon: string;
  shape?: 'full' | 'half' | 'three-quarters'; // New prop for shape
}

interface CardsChartsProps {
  cardsData: CardChartProps[];
}

const CardsCharts: React.FC<CardsChartsProps> = ({ cardsData }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cardsData.map((card, index) => {
        // Define rotation offsets based on the shape
        let rotationOffset = 0;
        let maxPercentage = 100;

        if (card.shape === 'half') {
          rotationOffset = -90; // Adjust for half-circle
          maxPercentage = 50; // Only half is visible
        } else if (card.shape === 'three-quarters') {
          rotationOffset = -135; // Adjust for three-quarters
          maxPercentage = 75; // 75% visible
        }

        return (
          <div
            key={index}
            className="card flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4"
          >
            <div style={{ width: 80, height: 80, marginBottom: '1rem' }}>
              <CircularProgressbar
                value={(card.percentage / 100) * maxPercentage}
                text={`${card.value}${card.unit}`}
                styles={buildStyles({
                  textColor: '#000',
                  pathColor: card.color,
                  trailColor: '#f5f5f5',
                  rotation: rotationOffset / 360, // Adjust rotation offset
                  strokeLinecap: 'round', // Smooth line endings
                })}
              />
            </div>
            <h4 className="text-lg font-semibold">{card.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export { CardsCharts };
