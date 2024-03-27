import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";

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
        </>
    );
};

export default Home;