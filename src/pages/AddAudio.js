import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import PageHeadings from "../components/PatientAudiosCards";
import Button from "../components/Button";
import NewPatientForm from "../components/NewPatientForm";

const Home = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        <NewPatientForm/>
        </>
    );
};

export default Home;