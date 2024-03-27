import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Appointment";
import Button from "../components/Button";
import AddAppointment from "../components/AddAppointment";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar 
        title="Assistant's Portal"
        />
        <Sidebar 
        manage="Manage Schedule"
        linkUrl="/manage-schedule"/>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-800 mb-4 ml-5">13 December 2023 - Friday</h1>
        <AddAppointment/>
        </>
    );
};

export default Home;