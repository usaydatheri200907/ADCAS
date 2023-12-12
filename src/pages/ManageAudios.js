import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import PageHeadings from "../components/PatientAudiosCards";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        <div classname="mt-10">
            <PageHeadings
             patientID={1}
             patientName={"Usayd Ather"}
             patientAge={20}
             patientGender={"male"}
             patientDate={"2021-06-17"}
             />
            <PageHeadings
            patientID={2}
            patientName={"Muhammad Awais"}
            patientAge={21}
            patientGender={"male"}
            patientDate={"2021-06-17"}
            />
            <Link 
            to="../add-new-audio">
            <Button
            placeholder={"Add New Patient Audio"}
            />
            </Link>
        </div>
        </>
    );
};

export default Home;