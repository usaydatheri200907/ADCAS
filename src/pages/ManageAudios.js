import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import PageHeadings from "../components/PatientAudiosCards";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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
        linkurl4="/add-live-audio"
        manage4="Transcribe Live Audio"
        />
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
            <PageHeadings
            patientID={3}
            patientName={"Saad Shafiq"}
            patientAge={22}
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