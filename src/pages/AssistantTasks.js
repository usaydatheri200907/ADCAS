import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Appointment from "../components/Appointment";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const AssistantTasks = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/appointments/all");
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData();

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <Navbar title="Assistant's Portal" />
      <Sidebar 
        manage="Manage Audios"
        linkUrl="/manage-audios"
        manage2="Manage Schedule"
        linkurl2="/doctor-schedule" 
        linkurl3="/add-live-audio"
        manage3="Transcribe Live Audio"
        linkurl4="/manage-patients"
                manage4="Manage Patients"
      />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-800 mb-4 ml-5">
         {currentDate}
      </h1>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment._id} // Assuming there's an _id field in the appointment data
          date={appointment.date}
          time={appointment.time}
          title={appointment.title}
          description={appointment.description}
        />
      ))}
      <Link to="../add-appointment">
        <Button placeholder={"Add Appointment"} />
      </Link>
    </>
  );
};

export default AssistantTasks;
