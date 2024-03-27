import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import Calander from "../components/Calander";

const Home = () => {
    return (
        <>
        <Navbar 
        title="Assistant's Portal"
        />
        <Sidebar 
        manage="Manage Schedule"
        linkUrl="/manage-schedule"
        manage2="Manage Patients"
        linkurl2="/manage-patients"/>
        <Calander
        linkurl="/manage-tasks"/>
        </>    );
};

export default Home;