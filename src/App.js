import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Addition from './components/Addition';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1050);
  }
  const togleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2a2a7c';
      showAlert('dARK MODE HAS BEEN ENABLED', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('dARK MODE HAS BEEN DISABLED', 'success');
    }
  }

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" About="About textutils" mode={mode} togleMode={togleMode} />
        <Alert alert={alert} />
        {/* <Addition heading='enter the text to analyse' mode={mode} showAlert={showAlert} /> */}
        <Routes>
          <Route path="/" element={<Addition heading='enter the text to analyse' mode={mode} showAlert={showAlert} />} />
          <Route path="/Addition" element={<Addition heading='enter the text to analyse' mode={mode} showAlert={showAlert} />} />
          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}