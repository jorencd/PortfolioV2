import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import CertificatePage from '../src/pages/certificates/CertificatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<CertificatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
