import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ClinicalNoteGenerator() {
  const [transcript, setTranscript] = useState('');
  const [clinicalNote, setClinicalNote] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.transcript) {
      setTranscript(location.state.transcript);
    }
    console.log(location.state);
    console.log("kkkkk");
    
    console.log(transcript);
  }, [location]);

  const handleClinicalNoteGeneration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/clinical-note-generation', {
        transcription: transcript,
      });
      setClinicalNote(response.data.clinical_note);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePdfGeneration = async () => {
    try {
      console.log(clinicalNote);
      const response = await axios.post('http://localhost:3001/pdf/generate-pdf', {
        clinicalNote: clinicalNote,
      });
      // Handle the response here. This might involve downloading the PDF or displaying it in a new tab.
      

    } catch (error) {
      console.error('Error:', error);
    }
  };

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
    <div className="container mx-auto p-6  bg-white rounded-lg shadow-lg overflow-auto w-3/4 max-h-screen">
      <h2 className="text-xl font-semibold mb-2">Clinical Note:</h2>
      <textarea 
        value={clinicalNote} 
        readOnly 
        className="w-full h-96 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 resize-y"
      />
      <div className="flex justify-center mt-4">
        <button 
          onClick={handleClinicalNoteGeneration} 
          className="py-4 px-4 w-96 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
        >
          Generate Clinical Note
        </button>
      </div>
    </div>
    <div className="fixed bottom-0 right-0 m-6 pb-48 pr-56">
      <button 
          onClick={handlePdfGeneration}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 p-4"
      >
          Generate Pdf
      </button>
    </div>
    </>
  )
}

export default ClinicalNoteGenerator;
