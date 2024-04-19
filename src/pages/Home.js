import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNotes from "../components/DashboardNotes";

const Home = () => {
    return (
        <>
        <Navbar 
        title="Doctor's Portal"
        />
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
        <DashboardNotes />
        </>
    );
};

export default Home;