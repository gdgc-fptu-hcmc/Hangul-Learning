import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Basic validation
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Đăng nhập thành công!');
      // Redirect will be handled by auth state listener
    } catch (error) {
      console.error('Sign in error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      
      const result = await signInWithPopup(auth, provider);
      setSuccess('Đăng nhập với Google thành công!');
      // Redirect will be handled by auth state listener
    } catch (error) {
      console.error('Google sign in error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Tài khoản không tồn tại';
      case 'auth/wrong-password':
        return 'Mật khẩu không đúng';
      case 'auth/invalid-email':
        return 'Email không hợp lệ';
      case 'auth/user-disabled':
        return 'Tài khoản đã bị vô hiệu hóa';
      case 'auth/too-many-requests':
        return 'Quá nhiều lần thử. Vui lòng thử lại sau';
      case 'auth/invalid-credential':
        return 'Thông tin đăng nhập không chính xác';
      case 'auth/network-request-failed':
        return 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet';
      case 'auth/popup-closed-by-user':
        return 'Đăng nhập bị hủy bởi người dùng';
      case 'auth/popup-blocked':
        return 'Popup bị chặn. Vui lòng cho phép popup cho trang web này';
      case 'auth/cancelled-popup-request':
        return 'Yêu cầu đăng nhập bị hủy';
      default:
        return 'Đã xảy ra lỗi. Vui lòng thử lại';
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User signed in:', user);
        // Redirect to home page after successful authentication
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="join-wrapper">
      <div className="join-card">
        <div className="join-card__header light-theme">
          <div className="custom-logo">
            <img
              alt="Hangul Online"
              height="32"
              aria-label="Hangul Online"
              src="/logo.png"
            />
          </div>
        </div>

        <div className="join-card__body">
          <h1 className="ql-headline-small text--center l-mbxl">
            Đăng nhập
          </h1>

          {/* Google Sign In Form */}
          <form className="simple_form new_user" id="with_google">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="button button--full-width"
              disabled={loading}
              autoFocus
            >
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Đăng nhập với Google
            </button>
          </form>

          <div className="l-mtl l-mbl text--light text--center">
            hoặc
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignIn} className="simple_form new_user" id="new_user">
            <div className="form-row">
              <div className="control-group email required user_email">
                  <label className="email required control-label" htmlFor="user_email">
                    <abbr title="required" aria-hidden="true">*</abbr> Email
                </label>
                <div className="controls">
                  <input
                    className="string email required md-outlined-text-field"
                    type="email"
                    name="user[email]"
                    id="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-input">
                <div className="control-group password required user_password">
                  <label className="password required control-label" htmlFor="user_password">
                    <abbr title="required" aria-hidden="true">*</abbr> Mật khẩu
                  </label>
                  <div className="controls">
                    <input
                      className="password required md-outlined-text-field"
                      type="password"
                      name="user[password]"
                      id="user_password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mật khẩu"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row remember-me">
              <label className="mdl-checkbox l-half-width l-mts">
                <input
                  name="user[remember_me]"
                  type="hidden"
                  value="0"
                />
                <input
                  className="mdl-checkbox__input"
                  type="checkbox"
                  value="1"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  name="user[remember_me]"
                  id="user_remember_me"
                />
                <span className="mdl-checkbox__label">Ghi nhớ đăng nhập</span>
              </label>
              <a className="input-link l-half-width right-text" href="/forgot-password">
                Quên mật khẩu?
              </a>
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="form-actions">
              <Link className="button button--text hide-mobile" to="/signup">
                Tạo tài khoản
              </Link>
              <button
                type="submit"
                className="button button"
                disabled={loading}
              >
                {loading ? 'Đang đăng nhập…' : 'Đăng nhập'}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SignIn;