import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import PageHeadings from "../components/PatientAudiosCards";

const Home = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        <div classname="mt-10">
            <PageHeadings />
            <PageHeadings/>
        </div>
        </>
    );
};

export default Home;