import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Grammar from './pages/Grammar';
import Donate from './pages/Donate';
import Footer from './components/Footer';

const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const Exercises = lazy(() => import('./pages/Exercises'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Simple page navigation for desktop
// Define page order for navigation
const PAGE_ORDER = ['/', '/basic', '/vocabulary', '/grammar', '/exercises'];

const PageNavigation = ({ navigate }) => {
  const location = useLocation();
  
  const getCurrentPageIndex = () => {
    return PAGE_ORDER.findIndex(path => path === location.pathname);
  };
  
  const navigateToPage = (direction) => {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next' && currentIndex < PAGE_ORDER.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }
    
    if (newIndex !== undefined) {
      navigate(PAGE_ORDER[newIndex]);
    }
  };
  
  const currentIndex = getCurrentPageIndex();
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < PAGE_ORDER.length - 1;
  
  // Only show on desktop/laptop (screen width >= 768px)
  return (
    <div className="hidden md:block">
      {/* Previous page button */}
      {canGoPrev && (
        <button
          onClick={() => navigateToPage('prev')}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group border border-gray-200"
          title="Trang trước"
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-200" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      
      {/* Next page button */}
      {canGoNext && (
        <button
          onClick={() => navigateToPage('next')}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group border border-gray-200"
          title="Trang tiếp theo"
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-200" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

function App() {
  // Helper to derive current page id from path for active menu highlight
  const usePageId = () => {
    const { pathname } = useLocation();
    if (pathname.startsWith('/basic')) return 'basic';
    if (pathname.startsWith('/vocabulary')) return 'vocabulary';
    if (pathname.startsWith('/grammar')) return 'grammar';
    if (pathname.startsWith('/exercises')) return 'exercises';
    if (pathname.startsWith('/donate')) return 'donate';
    return 'home';
  };

  const PageWrapper = () => {
    const currentPage = usePageId();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isPageVisible, setIsPageVisible] = useState(true);
    
    // Handle page transitions with loading and animations
    useEffect(() => {
      setIsLoading(true);
      setIsPageVisible(false);
      
      // Small delay for page transition effect
      const transitionTimer = setTimeout(() => {
        setIsPageVisible(true);
        setIsLoading(false);
        
        // Scroll to top with smooth animation
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 150);
      
      return () => clearTimeout(transitionTimer);
    }, [pathname]);

    // Loading overlay component
    const LoadingOverlay = () => (
      <div className="page-loading">
        <div className="flex flex-col items-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-sm text-gray-600">Đang chuyển trang...</p>
        </div>
      </div>
    );

      return (
        <>
          {isLoading && <LoadingOverlay />}
          <PageNavigation navigate={navigate} />
          <Header currentPage={currentPage} />
          <main className={`transition-all duration-500 ${isPageVisible ? 'page-container' : 'opacity-0'}`}>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="mt-4 text-lg text-gray-600">Đang tải nội dung...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basic" element={<Basic />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/grammar" element={<Grammar />} />
               <Route path="/exercises" element={<Exercises />} />
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
