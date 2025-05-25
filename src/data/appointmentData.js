export const upcomingAppointments = [
    {
      day: 'On Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '🏥',
          color: 'bg-purple-100',
          type: 'checkup'
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️',
          color: 'bg-blue-100',
          type: 'specialist'
        }
      ]
    },
    {
      day: 'On Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️',
          color: 'bg-red-100',
          type: 'specialist'
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
          color: 'bg-purple-100',
          type: 'specialist'
        }
      ]
    }
  ];
  
  export const activityData = {
    weeklyAppointments: 3,
    chartData: [
      { day: 'Mon', value: 2 },
      { day: 'Tue', value: 4 },
      { day: 'Wed', value: 1 },
      { day: 'Thu', value: 3 },
      { day: 'Fri', value: 5 },
      { day: 'Sat', value: 2 },
      { day: 'Sun', value: 4 }
    ]
  };