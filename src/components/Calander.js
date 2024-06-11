import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scheduler } from "@aldabil/react-scheduler";

export default function IndexPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="top-20 pl-96 ">
        <div className="fixed p-8 bottom-10 overflow-hidden">
          <div className="top-20 left-80 fixed mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-600">
              Your Scheduler
            </h2>
            <p className="text-gray-600 dark:text-gray-600">
              Manage Appointments
            </p>
            <p className="text-gray-600 dark:text-gray-600">
              Today's Date: {date.toLocaleDateString()}
            </p>
          </div>
          <div className="ml-10 mt-20 shadow-lg max-w-1/2 w-full space-y-8 pl-14 pt-14">
            <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t top-30 ">
              <div className="px-4 flex items-center justify-between rounded-md">
                <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                  Scheduler
                </h1>
              </div>
              <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <Link to="/manage-tasks">
                  <Scheduler
                    view="month"
                    events={[
                      {
                        event_id: 1,
                        title: "Event 1",
                        start: new Date("2021/5/2 09:30"),
                        end: new Date("2021/5/2 10:30"),
                      },
                      {
                        event_id: 2,
                        title: "Event 2",
                        start: new Date("2021/5/4 10:00"),
                        end: new Date("2021/5/4 11:00"),
                      },
                    ]}
                  />
                </Link>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}