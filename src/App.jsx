// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingFallback from './components/common/loadingfallback/LoadingFallback';

// Lazy load components
const Home = React.lazy(() => import('./pages/home/Home'));
const CertificatePage = React.lazy(() => import('./pages/certificates/CertificatePage'));
const Works = React.lazy(() => import('./pages/works/WorkPage'));
const Navbar = React.lazy(() => import('./components/layout/navbar/Navbar'));

function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
          <Navbar />
        </Suspense>

        <main>
          <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<CertificatePage />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;