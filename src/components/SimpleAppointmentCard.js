import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`${appointment.color} p-3 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow`}>
      <span className="text-lg">{appointment.icon}</span>
      <div>
        <h4 className="font-medium text-gray-800">{appointment.title}</h4>
        <p className="text-sm text-gray-600">{appointment.time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;