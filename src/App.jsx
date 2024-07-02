// React tools
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config.js";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/auth.context.jsx";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
// Pages
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignUpPage from "./pages/SignupPage";
import SchedulePage from "./pages/SchedulePage";
import StudiosPage from "./pages/StudiosPage";
import StudiosDetailsPage from "./pages/StudiosDetailsPage";
import TeacherPage from "./pages/TeacherPage";
import TeacherDetailsPage from "./pages/TeacherDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import EditUserPage from "./pages/EditUserPage";
import EditScheduleReqPage from "./pages/EditScheduleReqPage.jsx";

function App() {
  const [profileUser, setProfileUser] = useState(null);
  const { currUser } = useContext(AuthContext);

  useEffect(() => {
    if (currUser) {
      async function getUserInfo() {
        try {
          const { data } = await axios.get(
            `${API_URL}/auth/profile/${currUser._id}`
          );
          setProfileUser(data);
        } catch (error) {
          console.error("No user found:", error);
        }
      }
      getUserInfo();
    }
  }, [currUser]);

  console.log("this is user", currUser);

  const formatTime = (time) => {
    const timeStr = time.toString();
    if (timeStr.length === 4) {
      return timeStr.slice(0, 2) + ":" + timeStr.slice(2);
    } else if (timeStr.length === 3) {
      return "0" + timeStr.slice(0, 1) + ":" + timeStr.slice(1);
    }
    return timeStr;
  };

  return (
    <>
      <div className="body-of-app">
        <Navbar profileUser={profileUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/schedule"
            element={
              <IsPrivate>
                {" "}
                <SchedulePage formatTime={formatTime} />{" "}
              </IsPrivate>
            }
          />
          <Route path="/studios" element={<StudiosPage />} />
          <Route
            path="/studios/:studioId"
            element={<StudiosDetailsPage formatTime={formatTime} />}
          />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route
            path="/teacher/:teacherId"
            element={<TeacherDetailsPage formatTime={formatTime} />}
          />
          <Route
            path="/profile"
            element={
              <IsPrivate>
                {" "}
                <UserProfilePage profileUser={profileUser} />{" "}
              </IsPrivate>
            }
          />
          <Route
            path="/edit-user-profile"
            element={
              <EditUserPage
                profileUser={profileUser}
                setProfileUser={setProfileUser}
              />
            }
          />
          <Route path="/edit-schedule-date" element={<EditScheduleReqPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
