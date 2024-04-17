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
        />
      <AudioUploader />
    </>
  );
};

export default TranscribeLiveAudio;
