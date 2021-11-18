import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { SignUpPage } from './Pages/SignUpPage';
import './Styles/app.css';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/postic"
            element={
              userLoggedIn ? (
                <Navigate replace to="/postic/home" />
              ) : (
                <MainPage />
              )
            }
            exact
          />
          <Route path="/postic/home" element={<HomePage />} />
          <Route path="/postic/login" element={<LoginPage />} />
          <Route path="/postic/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
