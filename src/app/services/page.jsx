import Link from 'next/link';
import React from 'react';


export const metadata = {
        title: "Service Page",
        description: "This is service page"
    };
    
const ServicePage = () => {
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

    return (
        <div>
            this is service page
            {servicesData.map(service => (
                <div key={service.id} className="border p-4 m-4 rounded shadow">
                    <Link href={`/services/${service.id}`}>
                    <h2 className="text-xl font-bold">{service.icon} {service.title}</h2>
                    <p className="mt-2">{service.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ServicePage;