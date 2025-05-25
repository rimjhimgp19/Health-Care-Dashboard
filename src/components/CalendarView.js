import React from 'react';
import { calendarData, featuredAppointments } from '../data/calendarData';

const CalendarView = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{calendarData.month}</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded text-gray-600">←</button>
          <button className="p-1 hover:bg-gray-100 rounded text-gray-600">→</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {calendarData.days.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{day.day}</div>
            <div className="font-semibold text-gray-800 mb-2">{day.date}</div>
            <div className="space-y-1">
              {day.appointments.map((appointment, appointmentIndex) => (
                <div 
                  key={appointmentIndex} 
                  className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded"
                >
                  {appointment.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {featuredAppointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className={`${appointment.color} p-4 rounded-lg text-Black`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{appointment.icon}</span>
              <div>
                <h4 className="font-semibold">{appointment.title}</h4>
                <p className="text-sm opacity-90">{appointment.time}</p>
                <p className="text-xs opacity-75">{appointment.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;