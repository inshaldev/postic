import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const MainPage = () => {
  useEffect(() => (document.title = 'Postic - Share your thoughts!'), []);

  return (
    <div className="main-page">
      <h1 className="main-heading">Start using Postic now!</h1>
      <div className="main-container">
        <button>Sign up with Google</button>
        <button>Sign up with Apple</button>
        <div className="hr w-100"></div>

        <Link to="/signup">
          <button className="primary">Sign up with Email</button>
        </Link>
        <div className="main-login-section w-100">
          <p>Already have an account?</p>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
