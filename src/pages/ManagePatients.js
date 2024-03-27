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
        manage="Manage Schedule"
        linkUrl="/manage-schedule"
        manage2="Manage Patients"
        linkurl2="/manage-patients"
      />
      <PatientsTable />
      <Link to="../add-patient-form">
        <Button placeholder={"Add Patient"} />
      </Link>
    </>
  );
};

export default Home;
