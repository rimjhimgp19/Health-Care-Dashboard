import React from 'react';
import { upcomingAppointments } from '../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      <div className="space-y-4">
        {upcomingAppointments.map((daySchedule, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-gray-600 mb-2">{daySchedule.day}</h3>
            <div className="grid grid-cols-2 gap-3">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;