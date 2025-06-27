import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Grammar from './pages/Grammar';
import About from './pages/About';
import Donate from './pages/Donate';
import Footer from './components/Footer';

const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const Exercises = lazy(() => import('./pages/Exercises'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function App() {
  // Helper to derive current page id from path for active menu highlight
  const usePageId = () => {
    const { pathname } = useLocation();
    if (pathname.startsWith('/basic')) return 'basic';
    if (pathname.startsWith('/grammar')) return 'grammar';
    if (pathname.startsWith('/vocabulary')) return 'vocabulary';
    if (pathname.startsWith('/exercises')) return 'exercises';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/donate')) return 'donate';
    return 'home';
  };

  const PageWrapper = () => {
    const currentPage = usePageId();
    return (
      <>
        <Header currentPage={currentPage} />
        <main>
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '4rem' }}>Đang tải...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basic" element={<Basic />} />
              <Route path="/grammar" element={<Grammar />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/about" element={<About />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <PageWrapper />
    </Router>
  );
}

export default App;
