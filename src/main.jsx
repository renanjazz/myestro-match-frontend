import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextWrapper } from './context/auth.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthContextWrapper>
			<App />
		</AuthContextWrapper>
	</BrowserRouter>
);
