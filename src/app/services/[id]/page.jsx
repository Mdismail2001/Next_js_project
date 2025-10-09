import React from 'react';

const page = ({params}) => {
         const servicesData = [
  {
    id: 1,
    title: "Task Creation & Assignment",
    description:
      "Easily create new tasks, assign them to team members, and set clear deadlines to ensure smooth project progress.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Real-Time Progress Tracking",
    description:
      "Monitor the status of each task in real-time with live updates, ensuring every team member stays on the same page.",
    icon: "📊",
  },
  {
    id: 3,
    title: "User Roles & Permissions",
    description:
      "Assign roles like Admin, Team Lead, and Member to control access and responsibilities effectively within your team.",
    icon: "👥",
  },
  {
    id: 4,
    title: "Report & Analytics",
    description:
      "View detailed performance analytics and generate progress reports to evaluate productivity and efficiency.",
    icon: "📈",
  },
  {
    id: 5,
    title: "Notification & Reminder System",
    description:
      "Get instant notifications and smart reminders for upcoming deadlines, ensuring no task is left behind.",
    icon: "🔔",
  },
];

    const id = params.id;
    const service =  servicesData.find(s => s.id == id);
    // console.log(service);
    return (
        <div className='text-center text-3xl font-bold mt-20'>
            Single service details page id: {id}
            <div className='mt-10'>
                <h2>{service?.icon} {service?.title}</h2>
                <p className='mt-5'>{service?.description}</p>
            </div>
        </div>
    );
};

export default page;