import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;
