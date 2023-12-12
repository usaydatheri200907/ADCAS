import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup.js';
import LoginPage from './pages/Login.js';
import Home from './pages/Home.js';
import ManageAudios from './pages/ManageAudios.js';
import AddAudio from './pages/AddAudio.js';
import AssistantLogin from './pages/AssistantLogin.js';
import './index.css';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/manage-audios" element={<ManageAudios/>} />
            <Route path="/add-new-audio" element={<AddAudio/>} />
            <Route path="/assistant-login" element={<AssistantLogin/>} />
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;