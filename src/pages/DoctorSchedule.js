import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import Calander from "../components/Calander";

const Home = () => {
    return (
        <>
        <Navbar 
        title="Doctors's Portal"
        />
        <Sidebar 
        manage="Manage Audios"
        linkUrl="/manage-audios"
        manage2="Manage Schedule"
        linkurl2="/doctor-schedule"
        />
        <Calander
        linkurl="/doctor-appointments"/>
        </>    );
};

export default Home;