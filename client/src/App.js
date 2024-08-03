import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;
