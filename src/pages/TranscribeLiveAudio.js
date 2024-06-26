import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AudioUploader from "../components/AudioUploader";
const TranscribeLiveAudio = () => {
  return (
    <>
      <Navbar title="Doctor's Portal" />
      <Sidebar 
        manage="Manage Audios"
        linkUrl="/manage-audios"
        manage2="Manage Schedule"
        linkurl2="/doctor-schedule" 
        linkurl3="/add-live-audio"
        manage3="Transcribe Live Audio"
        linkurl4="/manage-patients"
        manage4="Manage Patients"    
        linkurl5="/manage-patients"
        manage5="Manage Patients"
        />
      <AudioUploader />
    </>
  );
};

export default TranscribeLiveAudio;
