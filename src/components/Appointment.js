import React from "react";
import { Link } from "react-router-dom";

const Appointment = ({ date, time, title, description }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
        <div className="px-4">
          <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
            {time}
          </p>
          <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
            {title}
          </p>
          <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
