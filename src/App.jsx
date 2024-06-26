// React tools
import { useState } from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScheduleCard from './components/ScheduleCard';
import StudioCard from './components/StudioCard';
import TeacherCard from './components/TeacherCard';
// Pages
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SchedulePage from './pages/SchedulePage';
import StudiosPage from './pages/StudiosPage';
import TeacherPage from './pages/TeacherPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Routes></Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
