import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    passwordConfirmation: '',
    dobMonth: 'January',
    dobDay: '',
    dobYear: '',
    marketingOptIn: true
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.passwordConfirmation) {
      setError('Vui lòng điền đầy đủ thông tin bắt buộc');
      setLoading(false);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.passwordConfirmation) {
      setError('Mật khẩu xác nhận không khớp');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      setLoading(false);
      return;
    }

    if (!isValidPassword(formData.password)) {
      setError('Mật khẩu phải chứa ít nhất 6 ký tự, bao gồm chữ cái và số');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });
      setSuccess('Tạo tài khoản thành công!');
      // Redirect will be handled by auth state listener
    } catch (error) {
      console.error('Sign up error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      
      const result = await signInWithPopup(auth, provider);
      setSuccess('Đăng ký với Google thành công!');
      // Redirect will be handled by auth state listener
    } catch (error) {
      console.error('Google sign up error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Email đã được sử dụng';
      case 'auth/invalid-email':
        return 'Email không hợp lệ';
      case 'auth/weak-password':
        return 'Mật khẩu quá yếu';
      case 'auth/operation-not-allowed':
        return 'Đăng ký bằng email đã bị vô hiệu hóa';
      case 'auth/invalid-credential':
        return 'Thông tin đăng nhập không chính xác';
      case 'auth/network-request-failed':
        return 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet';
      case 'auth/popup-closed-by-user':
        return 'Đăng ký bị hủy bởi người dùng';
      case 'auth/popup-blocked':
        return 'Popup bị chặn. Vui lòng cho phép popup cho trang web này';
      case 'auth/cancelled-popup-request':
        return 'Yêu cầu đăng ký bị hủy';
      case 'auth/too-many-requests':
        return 'Quá nhiều lần thử. Vui lòng thử lại sau';
      default:
        return 'Đã xảy ra lỗi. Vui lòng thử lại';
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // At least 6 characters, contains at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User signed up:', user);
        // Redirect to home page after successful authentication
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

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
          <h1 className="ql-headline-small text--center l-mbl">
            Tạo tài khoản
          </h1>

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignUp}
            className="button button--full-width"
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Đăng ký với Google
          </button>

          <div className="l-mtl l-mbl text--light text--center">hoặc</div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignUp} className="signin-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="control-group string required">
                <label className="control-label" htmlFor="firstName">
                  <abbr title="required" aria-hidden="true">*</abbr> Tên
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Tên"
                    required
                  />
                </div>
              </div>
              <div className="control-group string required">
                <label className="control-label" htmlFor="lastName">
                  <abbr title="required" aria-hidden="true">*</abbr> Họ
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Họ"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="form-row">
              <div className="control-group email required">
                <label className="control-label" htmlFor="email">
                  <abbr title="required" aria-hidden="true">*</abbr> Email
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company Field */}
            <div className="form-row">
              <div className="control-group string required">
                <label className="control-label" htmlFor="company">
                  <abbr title="required" aria-hidden="true">*</abbr> Công ty
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Công ty"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="form-row">
              <div className="control-group password required">
                <label className="control-label" htmlFor="password">
                  <abbr title="required" aria-hidden="true">*</abbr> Mật khẩu
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Mật khẩu (tối thiểu 6 ký tự)"
                    minLength="6"
                    required
                  />
                </div>
              </div>
              <div className="control-group password required">
                <label className="control-label" htmlFor="passwordConfirmation">
                  <abbr title="required" aria-hidden="true">*</abbr> Xác nhận mật khẩu
                </label>
                <div className="controls">
                  <input
                    className="md-outlined-text-field"
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleInputChange}
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <p className="ql-label-small text--light">Vui lòng nhập ngày sinh của bạn</p>
            <div className="form-row age-gate-fields">
              <div className="month control-group required select">
                <label className="control-label" htmlFor="dobMonth">
                  Tháng
                  <abbr alt="required" aria-hidden="true">*</abbr>
                </label>
                <select
                  name="dobMonth"
                  id="dobMonth"
                  value={formData.dobMonth}
                  onChange={handleInputChange}
                  required
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="day control-group required integer">
                <label className="control-label" htmlFor="dobDay">
                  Ngày
                  <abbr alt="required" aria-hidden="true">*</abbr>
                </label>
                <input
                  className="md-outlined-text-field"
                  type="number"
                  name="dobDay"
                  id="dobDay"
                  value={formData.dobDay}
                  onChange={handleInputChange}
                  min="1"
                  max="31"
                  required
                />
              </div>
              <div className="year control-group required integer">
                <label className="control-label" htmlFor="dobYear">
                  Năm
                  <abbr alt="required" aria-hidden="true">*</abbr>
                </label>
                <input
                  className="md-outlined-text-field"
                  type="number"
                  name="dobYear"
                  id="dobYear"
                  value={formData.dobYear}
                  onChange={handleInputChange}
                  min="1925"
                  max="2020"
                  required
                />
              </div>
            </div>

            <p className="ql-label-small text--light">Ngày sinh của bạn được sử dụng để xác định điều kiện tham gia.</p>

            {/* Marketing Opt-in */}
            <div className="form-row opt-in">
              <label className="checkbox">
                <input
                  name="marketingOptIn"
                  type="hidden"
                  value="0"
                />
                <input
                  className="mdl-checkbox__input"
                  type="checkbox"
                  value="1"
                  checked={formData.marketingOptIn}
                  onChange={handleInputChange}
                  name="marketingOptIn"
                  id="marketingOptIn"
                />
                <span>Gửi cho tôi cập nhật sản phẩm, thông báo và ưu đãi.</span>
              </label>
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            {/* Terms of Service */}
            <p className="text--small text--light l-mtl">
              Bằng cách tiếp tục, bạn đồng ý với <Link to="/terms" target="_blank">Điều khoản Dịch vụ</Link> và{' '}
              <Link to="/privacy" target="_blank">Chính sách Bảo mật</Link> của chúng tôi.
            </p>

            <div className="form-actions">
              <Link className="button button--text hide-mobile" to="/signin">Đăng nhập thay vào đó</Link>
              <button
                type="submit"
                className="button button"
                disabled={loading}
              >
                {loading ? 'Đang tạo tài khoản…' : 'Tạo tài khoản'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;