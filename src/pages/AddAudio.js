import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import PageHeadings from "../components/PatientAudiosCards";
import Button from "../components/Button";
import NewPatientForm from "../components/NewPatientForm";

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
        linkurl2="/doctor-schedule"/>
        <NewPatientForm/>
        </>
    );
};

export default Home;