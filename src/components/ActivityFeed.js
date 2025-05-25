import React from 'react';
import { activityData } from '../data/appointmentData';

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Activity</h2>
      <p className="text-sm text-gray-600 mb-4">
        {activityData.weeklyAppointments} appointments on this week
      </p>
      
      <div className="flex items-end justify-between space-x-2 h-32">
        {activityData.chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="bg-teal-400 rounded-t-sm w-full mb-2 transition-all duration-300 hover:bg-teal-500" 
              style={{ 
                height: `${(item.value / 5) * 80 + 20}px`,
                minHeight: '20px'
              }}
            ></div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;