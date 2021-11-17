import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <div className="signup-page">
      <h1>Sign In to Postic</h1>
      <form className="signup-form">
        <div className="inline">
          <input type="text" placeholder="First Name" className="w-48" />
          <input type="text" placeholder="Last Name" className="w-48" />
        </div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="primary">
          Get Started
        </button>
      </form>
      <p>
        Already a user? <Link to="/postic/login">Sign in</Link>
      </p>
    </div>
  );
};
