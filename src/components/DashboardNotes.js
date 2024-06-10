import React, { useState } from 'react';

const NotePad = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className=" ml-20 p-4 bg-white rounded-lg shadow-md px-96 pt-96">
     
    </div>
  );
};

export default NotePad;
