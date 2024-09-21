import React from 'react';

const StatsGrid = () => {
  const stats = [
    {
      title: "Value",
      value: "$30,000",
      percentage: "+4.4%",
      icon: (
        <svg
          className="w-12 h-12 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Users",
      value: "50,021",
      percentage: "+2.6%",
      icon: (
        <svg
          className="w-12 h-12 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Orders",
      value: "45,021",
      percentage: "+3.1%",
      icon: (
        <svg
          className="w-12 h-12 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Tickets",
      value: "20,516",
      percentage: "+3.1%",
      icon: (
        <svg
          className="w-12 h-12 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 p-10 mt-14 lg:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center shadow justify-between p-4 bg-white rounded-md">
          <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
              {stat.title}
            </h6>
            <span className="text-xl font-semibold">{stat.value}</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              {stat.percentage}
            </span>
          </div>
          <div>{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
