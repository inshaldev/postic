import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-page fl-col-cen-cen min-h-100 w-25">
      <h1>Log In to Postic</h1>
      <form className="login-form fl-col-cen-cen w-100" onSubmit={handleLogin}>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="primary">
          Sign In
        </button>
        <button className="w-auto">Forgot password?</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
