import React, { useState } from 'react';
import axios from 'axios';

function AudioUploader() {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [clinicalNote, setClinicalNote] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTranscription = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTranscript(response.data.transcription);

    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg overflow-auto">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
      />
      <button 
        onClick={handleTranscription} 
        className="block w-full py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Upload and Transcribe
      </button>
      <div className="overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Transcript:</h2>
        <textarea 
          value={transcript} 
          readOnly 
          className="w-full h-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 resize-y"
        />
      </div>
      <button 
        onClick={handleClinicalNoteGeneration} 
        className="block w-full py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Generate Clinical Note
      </button>
      <div className="overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Clinical Note:</h2>
        <textarea 
          value={clinicalNote} 
          readOnly 
          className="w-full h-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 resize-y"
        />
      </div>
    </div>
  )
}

export default AudioUploader;
