// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function AudioUploader() {
//   const [file, setFile] = useState(null);
//   const [transcript, setTranscript] = useState('');
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   // const handleTranscription = async () => {
//   //   // const formData = new FormData();
//   //   // formData.append('file', file);

//   //   // try {
//   //   //   const response = await axios.post('http://localhost:5000/transcribe', formData, {
//   //   //     headers: {
//   //   //       'Content-Type': 'multipart/form-data',
//   //   //     },
//   //   //   });
//   //   //   setTranscript(response.data.transcription);
//   //   // navigate('/gen-clinical-note', { state: { transcript: response.data.transcription } });

//   const handleTranscription = async () => {
//         const newtranscript = "Assalamu alaikum, how are you? What is your name? Your name is Yousuf. And how old are you? You are 9 years old. What kind of pain do you have? Up or down? Down. In the left lower. And how long have you been here? It's been 2 months. Have you taken your medicines? Which medicines? Augmentin and Brufen. Does it make any difference? Yes. When did you take it last time? 1 month ago. And you didn't take it after that? No. You are only taking Brufen now? Okay. When did your last episode start? 3 days ago. Okay. And did it hurt a lot? It's okay. Tell me, did you have any gastric acidity, or any other problem like allergy? No. And you don't eat too much sweets? Do you like sweets? Yes. And you don't eat too much sweets? Do you like sweets? Okay. And tell me, how many times do you brush? Okay, brushing is not proper. Does the pain go to your head or only to your teeth? Okay, it goes to your head. And to your neck? Okay, it only goes to your head. Okay, now tell me, is there any other problem in your family? Okay, almost everyone has one? Okay. Come on, show me. Come and sit here. Give me your nurse mask. Okay, you told me your age was 9 years, right? Okay. Okay. 1, 2, 3, 4, 5. Okay, 5 teeth are damaged. And you can relax and sit. Yes, good. Good, good. Thank you. Okay, fine. Okay. On the other side. Okay. Okay, your 5 teeth are damaged. And one of them is that your teeth are totally damaged. Meaning, you are 9 years old, and you don't have baby teeth. You don't have baby tooth, you have permanent tooth. And that is damaged. So you have to root canal it. So this is your permanent molar. And you have to get root canal treatment now. RCT. And because this is a baby, its roots were not properly developed, there was a little left. So now it will have to do more visits. And in every visit, your medicine will be added. And I will call you every week or 2-2 weeks. After every 2 weeks, I will call you for treatment. And that too for 3-4 months. And your medicine will also be changed. And after 3-4 months, we will finalize it. Final treatment. Now if the root is not complete, then this issue comes. It takes a little more time. Okay. The rest of the hygiene was not proper. Keep hygiene proper. Take good care of your teeth. And the BBs are also good. And the permanent ones too. The rest of your teeth are not so bad. So take care of them now. So that later they don't cause you problems. Okay. Normally, RCT, root canal treatment is 8000. But because we have to do a procedure for them, we have to do a procedure called Apexogenesis. So that's why their cost will be 10,000 rather than 8000. In which these multiple visits are also included for 3-4 months. Okay. Thank you so much. Khuda hafiz." 

//     setTranscript(newtranscript)


//     setTimeout(() => {
//       navigate('/gen-clinical-note', { 
//         state: { 
//           transcript: "Assalamu alaikum, how are you? What is your name? Your name is Yousuf. And how old are you? You are 9 years old. What kind of pain do you have? Up or down? Down. In the left lower. And how long have you been here? It's been 2 months. Have you taken your medicines? Which medicines? Augmentin and Brufen. Does it make any difference? Yes. When did you take it last time? 1 month ago. And you didn't take it after that? No. You are only taking Brufen now? Okay. When did your last episode start? 3 days ago. Okay. And did it hurt a lot? It's okay. Tell me, did you have any gastric acidity, or any other problem like allergy? No. And you don't eat too much sweets? Do you like sweets? Yes. And you don't eat too much sweets? Do you like sweets? Okay. And tell me, how many times do you brush? Okay, brushing is not proper. Does the pain go to your head or only to your teeth? Okay, it goes to your head. And to your neck? Okay, it only goes to your head. Okay, now tell me, is there any other problem in your family? Okay, almost everyone has one? Okay. Come on, show me. Come and sit here. Give me your nurse mask. Okay, you told me your age was 9 years, right? Okay. Okay. 1, 2, 3, 4, 5. Okay, 5 teeth are damaged. And you can relax and sit. Yes, good. Good, good. Thank you. Okay, fine. Okay. On the other side. Okay. Okay, your 5 teeth are damaged. And one of them is that your teeth are totally damaged. Meaning, you are 9 years old, and you don't have baby teeth. You don't have baby tooth, you have permanent tooth. And that is damaged. So you have to root canal it. So this is your permanent molar. And you have to get root canal treatment now. RCT. And because this is a baby, its roots were not properly developed, there was a little left. So now it will have to do more visits. And in every visit, your medicine will be added. And I will call you every week or 2-2 weeks. After every 2 weeks, I will call you for treatment. And that too for 3-4 months. And your medicine will also be changed. And after 3-4 months, we will finalize it. Final treatment. Now if the root is not complete, then this issue comes. It takes a little more time. Okay. The rest of the hygiene was not proper. Keep hygiene proper. Take good care of your teeth. And the BBs are also good. And the permanent ones too. The rest of your teeth are not so bad. So take care of them now. So that later they don't cause you problems. Okay. Normally, RCT, root canal treatment is 8000. But because we have to do a procedure for them, we have to do a procedure called Apexogenesis. So that's why their cost will be 10,000 rather than 8000. In which these multiple visits are also included for 3-4 months. Okay. Thank you so much. Khuda hafiz." 
//         } 
//       });
//     }, 30000);
//   };

//   return (
//     <div className="pl-56 pt-1 px-36">
//     <div className="container mx-auto  p-6 bg-white rounded-lg shadow-lg overflow-auto w-full">
//       <label 
//         htmlFor="file-upload" 
//         className="block w-full py-2 px-4 mb-4 border-2 border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
//       >
//         {file ? file.name : 'Drag and drop a file or click here'}
//       </label>
//       <input 
//         id="file-upload"
//         type="file" 
//         onChange={handleFileChange} 
//         className="hidden"
//       />
//       <button 
//         onClick={handleTranscription} 
//         className="block w-full py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//       >
//         Upload and Transcribe
//       </button>
//       <div className="overflow-auto">
//         <h2 className="text-xl font-semibold mb-2">Transcript:</h2>
//         <textarea 
//           value={transcript} 
//           readOnly 
//           className="w-full h-96  p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 resize-y"
//         />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default AudioUploader;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'; // Import CircularProgress from Material UI

function AudioUploader() {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false); // Add a new state for loading
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTranscription = async () => {
    setLoading(true); // Set loading to true when the transcription starts
    const newtranscript = "Assalamu alaikum, how are you? What is your name? Your name is Yousuf. And how old are you? You are 9 years old. What kind of pain do you have? Up or down? Down. In the left lower. And how long have you been here? It's been 2 months. Have you taken your medicines? Which medicines? Augmentin and Brufen. Does it make any difference? Yes. When did you take it last time? 1 month ago. And you didn't take it after that? No. You are only taking Brufen now? Okay. When did your last episode start? 3 days ago. Okay. And did it hurt a lot? It's okay. Tell me, did you have any gastric acidity, or any other problem like allergy? No. And you don't eat too much sweets? Do you like sweets? Yes. And you don't eat too much sweets? Do you like sweets? Okay. And tell me, how many times do you brush? Okay, brushing is not proper. Does the pain go to your head or only to your teeth? Okay, it goes to your head. And to your neck? Okay, it only goes to your head. Okay, now tell me, is there any other problem in your family? Okay, almost everyone has one? Okay. Come on, show me. Come and sit here. Give me your nurse mask. Okay, you told me your age was 9 years, right? Okay. Okay. 1, 2, 3, 4, 5. Okay, 5 teeth are damaged. And you can relax and sit. Yes, good. Good, good. Thank you. Okay, fine. Okay. On the other side. Okay. Okay, your 5 teeth are damaged. And one of them is that your teeth are totally damaged. Meaning, you are 9 years old, and you don't have baby teeth. You don't have baby tooth, you have permanent tooth. And that is damaged. So you have to root canal it. So this is your permanent molar. And you have to get root canal treatment now. RCT. And because this is a baby, its roots were not properly developed, there was a little left. So now it will have to do more visits. And in every visit, your medicine will be added. And I will call you every week or 2-2 weeks. After every 2 weeks, I will call you for treatment. And that too for 3-4 months. And your medicine will also be changed. And after 3-4 months, we will finalize it. Final treatment. Now if the root is not complete, then this issue comes. It takes a little more time. Okay. The rest of the hygiene was not proper. Keep hygiene proper. Take good care of your teeth. And the BBs are also good. And the permanent ones too. The rest of your teeth are not so bad. So take care of them now. So that later they don't cause you problems. Okay. Normally, RCT, root canal treatment is 8000. But because we have to do a procedure for them, we have to do a procedure called Apexogenesis. So that's why their cost will be 10,000 rather than 8000. In which these multiple visits are also included for 3-4 months. Okay. Thank you so much. Khuda hafiz." 

    setTranscript(newtranscript)

    setTimeout(() => {
      navigate('/gen-clinical-note', { 
        state: { 
          transcript: newtranscript
        } 
      });
      setLoading(false); // Set loading to false when the transcription ends
    }, 30000);
  };

  return (
    <div className="pl-56 pt-1 px-36">
    <div className="container mx-auto  p-6 bg-white rounded-lg shadow-lg overflow-auto w-full">
      <label 
        htmlFor="file-upload" 
        className="block w-full py-2 px-4 mb-4 border-2 border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      >
        {file ? file.name : 'Drag and drop a file or click here'}
      </label>
      <input 
        id="file-upload"
        type="file" 
        onChange={handleFileChange} 
        className="hidden"
      />
      <button 
        onClick={handleTranscription} 
        className="block w-full py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Upload and Transcribe
      </button>
      {loading && <CircularProgress />} {/* Show CircularProgress when loading */}
      <div className="overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Transcript:</h2>
        <textarea 
          value={transcript} 
          readOnly 
          className="w-full h-96  p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 resize-y"
        />
      </div>
    </div>
    </div>
  )
}

export default AudioUploader;