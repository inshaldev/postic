import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-page">
      <h1>Sign Up now and share yo' thoughts!</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="inline">
          <input type="text" placeholder="First Name" className="w-48" />
          <input type="text" placeholder="Last Name" className="w-48" />
        </div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <Link to="/home">
          <button type="submit" className="primary">
            Get Started
          </button>
        </Link>
      </form>
      <p>
        Already a user? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};
