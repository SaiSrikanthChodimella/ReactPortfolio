import React from "react";

const timelineData = [
  {
    title: "Engineering Journey Begins",
    description:
      "Started my Bachelor's Degree in Electronics and Communication Engineering",
    date: "Jul 2018",
    iconClass: "bi bi-building",
    iconBgColor: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    title: "First Milestone Achieved",
    description: "Electronics & Communication Eng. Graduate, CGPA 7.03.",
    date: "May 2018",
    iconClass: "bi bi-cash-coin",
    iconBgColor: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    title: "New Chapter",
    description: "Joined Accenture as an Associate Software Engineer.",
    date: "Nov 2018",
    iconClass: "bi bi-rocket",
    iconBgColor: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    title: "Pursuing Master's Degree",
    description: "Enrolled in FAU's Artificial Intelligence program",
    date: "Sept 2021",
    iconClass: "bi bi-globe",
    iconBgColor: "bg-yellow-500",
    textColor: "text-yellow-600",
  },
  {
    title: "Advancing my professional journey",
    description:
      "Joined Siemens Healthineers as a Working Student/Software Engineer.",
    date: "Apr 2022",
    iconClass: "bi bi-people",
    iconBgColor: "bg-red-600",
    textColor: "text-red-600",
  },
  {
    title: "Embracing new milestones",
    description: "Eager to enhance my skills and make a meaningful impact",
    date: "Present",
    iconClass: "bi bi-award",
    iconBgColor: "bg-pink-600",
    textColor: "text-pink-600",
  },
];

const TimelineItem = ({ item, isAlternate }) => (
  <div
    className={`flex flex-col items-center w-64 ${isAlternate ? "mt-24" : ""}`}
  >
    <div
      className={`w-12 h-12 ${item.iconBgColor} text-white rounded-full flex items-center justify-center shadow-lg`}
    >
      <i className={`${item.iconClass} text-xl`}></i>
    </div>
    <div
      className={`bg-white p-6 rounded-lg shadow-lg ${
        isAlternate ? "mt-4" : "mb-4"
      } transform transition-transform hover:scale-105`}
    >
      <h5 className={`text-xl font-semibold ${item.textColor}`}>
        {item.title}
      </h5>
      <p className="text-gray-600 mt-2">{item.description}</p>
      <span className="text-sm text-gray-500">{item.date}</span>
    </div>
  </div>
);

function TimelineDashboard() {
  return (
    <div className="py-12">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-10 overflow-x-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300 transform -translate-y-1/2"></div>
          <div className="flex space-x-8 pb-8">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isAlternate={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineDashboard;
