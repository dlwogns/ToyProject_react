import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/about" element={<LandingPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/register" element={<RegisterPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
