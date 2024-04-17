import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Appointment";
import Button from "../components/Button";
import AddAppointment from "../components/AddAppointment";
import { Link } from "react-router-dom";

const Home = () => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
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
            />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-800 mb-4 ml-5">{currentDate}</h1>
            <AddAppointment />
        </>
    );
};

export default Home;
