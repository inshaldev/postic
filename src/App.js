import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { SignUpPage } from './Pages/SignUpPage';
import './Styles/app.css';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              userLoggedIn ? <Navigate replace to="/home" /> : <MainPage />
            }
            exact
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
