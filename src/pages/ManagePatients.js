import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PatientsTable from "../components/PatientsTable";
import Button from "../components/Button";
import AddPatientForm from "../components/AddPatientForm";

const Home = () => {
  return (
    <>
      <Navbar title="Assistant's Portal" />
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
      <PatientsTable />
      <Link to="../add-patient-form">
        <Button placeholder={"Add Patient"} />
      </Link>
    </>
  );
};

export default Home;