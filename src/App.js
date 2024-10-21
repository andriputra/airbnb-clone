import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HostHomesPage from './pages/HostHomesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host-homes" element={<HostHomesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
