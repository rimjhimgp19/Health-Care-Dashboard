import React from 'react';
import { healthStatusData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-4 h-full">
      {healthStatusData.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-white text-sm">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.organ}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300" 
              style={{ 
                backgroundColor: item.color, 
                width: `${item.percentage}%` 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;