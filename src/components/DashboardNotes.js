import React, { useState } from 'react';

const NotePad = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="notepad-container ml-20 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Notifications and Reminders</h3>
      <textarea
        className="w-full h-32 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your note here..."
      />
    </div>
  );
};

export default NotePad;
