import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';
import { PulseLoader } from 'react-spinners';

export const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { error, setError, loginAccount, loadingState, setLoadingState } =
    useData();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email) {
      setError('WARNING: Type your Email!');
    } else if (!password) {
      setError('WARNING: Type your Password!');
    } else if (email && password) {
      setLoadingState(true);
      try {
        await loginAccount(email, password).then(() => {
          if (loginAccount()) {
            navigate('/');
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="login-page">
      <h1>Log In to Postic</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email address" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" className="primary">
          {loadingState === true ? <PulseLoader color={'#f5f5f5'} /> : 'Log In'}
        </button>
        <button className="w-auto">Forgot password?</button>
        {error ? <p className="form-error-message">{error}</p> : ''}
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
