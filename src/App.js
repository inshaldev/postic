// import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Contexts } from './Context/Contexts';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { NewPostPage } from './Pages/NewPostPage';
import { SignUpPage } from './Pages/SignUpPage';
import './Styles/app.css';

function App() {
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const userLoggedIn = false;

  return (
    <div className="App">
      <Contexts>
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
            <Route path="/new" element={<NewPostPage />} />
          </Routes>
        </BrowserRouter>
      </Contexts>
    </div>
  );
}

export default App;
