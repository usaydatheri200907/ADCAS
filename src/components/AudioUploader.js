// AudioUploader.js

import React, { useState } from 'react';
import axios from 'axios';

function AudioUploader() {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTranscript(response.data.transcript);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg ml-20">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
      />
      <button 
        onClick={handleSubmit} 
        className="block w-full py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Upload
      </button>
      <div>
        <h2 className="text-xl font-semibold mb-2">Transcript:</h2>
        <p className="text-gray-800">{transcript}</p>
      </div>
    </div>
  )
}

export default AudioUploader;
