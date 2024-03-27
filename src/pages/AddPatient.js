import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
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
      <AddPatientForm />
    </>
  );
};

export default Home;
