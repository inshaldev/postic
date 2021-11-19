import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../Context/Contexts';
export const SignUpPage = () => {
  const navigate = useNavigate();
  const { registerAccount } = useData();
  const firstName = useRef();
  const lastName = useRef();
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerAccount(
        email.current.value,
        password.current.value,
        firstName.current.value,
        lastName.current.value,
        userName.current.value
      );
    } catch (error) {
      console.log(error);
    }
    navigate('/home');
  };
  return (
    <div className="signup-page">
      <h1>Sign Up now and share yo' thoughts!</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="inline">
          <input
            type="text"
            placeholder="First Name"
            className="w-48"
            ref={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-48"
            ref={lastName}
          />
        </div>
        <input type="text" placeholder="Username" ref={userName} />
        <input type="email" placeholder="Email address" ref={email} />
        <input type="password" placeholder="Password" ref={password} />
        <button type="submit" className="primary">
          Get Started
        </button>
      </form>
      <p>
        Already a user? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};
