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
        linkurl3="/add-live-audio"
        manage3="Transcribe Live Audio"
        />
        <DashboardNotes />
        </>
    );
};

export default Home;