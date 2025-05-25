import React from 'react';
import { anatomyIndicators } from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <div className="relative h-full">
        <div className="flex justify-center items-center h-full">
          <div className="relative">
            {/* Human body representation */}
            <img
            src="/assets/anatomy.jpg"
            alt="Human Anatomy"
            className="w-64 h-auto"
          />
            
            {/* Health indicators */}
            {anatomyIndicators.map((indicator) => (
              <div
                key={indicator.id}
                className={`absolute ${indicator.color} text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap`}
                style={indicator.position}
              >
                {indicator.icon} {indicator.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;