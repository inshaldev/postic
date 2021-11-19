import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState('');
  const { loginAccount, setLoadingState } = useData();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginAccount(email.current.value, password.current.value);
      navigate('/');
      setLoadingState(true);
    } catch {
      setError('There is some problem');
    }
    setLoadingState(false);
  };
  return (
    <div className="login-page">
      <h1>Log In to Postic</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email address" ref={email} />
        <input type="password" placeholder="Password" ref={password} />
        <button type="submit" className="primary">
          Log In
        </button>
        <button className="w-auto">Forgot password?</button>
        <p>{error}</p>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
