import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup.js';
import LoginPage from './pages/Login.js';
import Home from './pages/Home.js';
import ManageAudios from './pages/ManageAudios.js';
import AddAudio from './pages/AddAudio.js';
import AssistantLogin from './pages/AssistantLogin.js';
import AssistantHome from './pages/AssistantHome.js';
import ManageSchedule from './pages/ManageSchedule.js';
import ManageTasksAssistant from './pages/AssistantTasks.js';
import AddAppointment from './pages/AddAppointment.js';
import DoctorSchedule from './pages/DoctorSchedule.js';
import DoctorAppointments from './pages/DoctorAppointments.js';
import TranscribeLiveAudio from './pages/TranscribeLiveAudio.js';
import ManagePatients from './pages/ManagePatients.js';
import AddPatientForm from './pages/AddPatient.js';
import './index.css';
import AudioTranscription from './components/AudioTranscription.js';

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
            <Route path="/assistant-home" element={<AssistantHome/>} />
            <Route path="/manage-schedule" element={<ManageSchedule/>} />
            <Route path="/manage-tasks" element={<ManageTasksAssistant/>} />
            <Route path="/add-appointment" element={<AddAppointment/>} />
            <Route path="/doctor-schedule" element={<DoctorSchedule/>} />
            <Route path="/doctor-appointments" element={<DoctorAppointments/>} />
            <Route path="/add-live-audio" element={<TranscribeLiveAudio/>} />
            <Route path="/manage-patients" element={<ManagePatients/>} />
            <Route path="/add-patient-form" element={<AddPatientForm/>} />
            {/* <Route path="/livetranscription" element={<AudioTranscription/>} /> */}
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;