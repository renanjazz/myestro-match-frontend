// React tools
import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScheduleCard from "./components/ScheduleCard";
import StudioCard from "./components/StudioCard";
import TeacherCard from "./components/TeacherCard";
// Pages
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import SchedulePage from "./pages/SchedulePage";
import StudiosBookingPage from "./pages/StudiosBookingPage";
import StudiosPage from "./pages/StudiosPage";
import TeacherPage from "./pages/TeacherPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/schedule" element={<SchedulePage/>}/>
          <Route path="/studios" element={<StudiosPage/>}/>
          <Route path="/studios-booking" element={<StudiosBookingPage/>}/>
          <Route path="/teacher" element={<TeacherPage/>}/>
          <Route path="/profile" element={<UserProfilePage/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
