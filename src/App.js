import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/DoctorSignup.js';
import LoginPage from './pages/DoctorLogin.js';
import AssistantSignupPage from './pages/AssistantSignup.js';
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
import GenClinicalNote from './pages/GenClinicalNote.js';
import AppointmentScheduling from './pages/Calendar.js';

function App() {
  return (
    <div className="">
    <div className="max-w-full w-full space-y-8 pl-14 pt-14">
     <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/doctor/signup" element={<SignupPage/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/manage-audios" element={<ManageAudios/>} />
            <Route path="/add-new-audio" element={<AddAudio/>} />
            <Route path="/assistant/login" element={<AssistantLogin/>} />
            <Route path="/assistant-home" element={<AssistantHome/>} />
            <Route path="/manage-schedule" element={<ManageSchedule/>} />
            <Route path="/manage-tasks" element={<ManageTasksAssistant/>} />
            <Route path="/add-appointment" element={<AddAppointment/>} />
            <Route path="/doctor-schedule" element={<DoctorSchedule/>} />
            <Route path="/doctor-appointments" element={<DoctorAppointments/>} />
            <Route path="/add-live-audio" element={<TranscribeLiveAudio/>} />
            <Route path="/manage-patients" element={<ManagePatients/>} />
            <Route path="/add-patient-form" element={<AddPatientForm/>} />
            <Route path="/gen-clinical-note" element={<GenClinicalNote/>} />
            <Route path="/appointmentsdash" element={<AppointmentScheduling/>} />
            {/* <Route path="/livetranscription" element={<AudioTranscription/>} /> */}
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;