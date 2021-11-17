export const MainPage = () => {
  return (
    <div className="main-page fl-col-cen-cen min-h-100 w-50">
      <h1 className="main-page-heading">
        Start using <span className="postic">Postic</span> now!
      </h1>
      <div className="fl-col-cen-cen w-50">
        <button>Sign up with Google</button>
        <button>Sign up with Apple</button>
        <div className="hr w-100"></div>
        <button className="primary">Sign up with Email</button>
        <div className="main-login-section w-100">
          <p>Already have an account?</p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};
