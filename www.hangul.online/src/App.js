import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Paths from './pages/Paths';
import Subscriptions from './pages/Subscriptions';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HangulBasic from './pages/HangulBasic';
import Conversation from './pages/Conversation';
import TOPIK from './pages/TOPIK';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Feedback from './pages/Feedback';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';
import './styles/App.css';
function App() {
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />

          <div id='callout-container'></div>

          <div className='page-header'></div>

          <main id='jump-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/hangul" element={<HangulBasic />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/topik" element={<TOPIK />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
          </main>

          <Footer />

          <span className='hidden' id='flash-sibling-before'></span>
          <ql-snackbar></ql-snackbar>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;