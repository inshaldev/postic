import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../Context/Contexts';

export const LoginPage = () => {
  const { setUserLoggedIn } = useData();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setUserLoggedIn(true);
    navigate('/home');
  };
  return (
    <div className="login-page">
      <h1>Log In to Postic</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="primary">
          Log In
        </button>
        <button className="w-auto">Forgot password?</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
