import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import AuthenticationContextProvider from "./context/AuthenticationProvider/AuthenticationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <AuthenticationContextProvider>
              <App/>
          </AuthenticationContextProvider>
      </Router>
  </React.StrictMode>
);
