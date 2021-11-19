import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { useData } from './Context/Contexts';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { NewPostPage } from './Pages/NewPostPage';
import { ProfilePage } from './Pages/ProfilePage';
import { SettingsPage } from './Pages/SettingsPage';
import { SignUpPage } from './Pages/SignUpPage';
import './Styles/app.css';

function App() {
  const { currentUser, currentUserData, loadingState } = useData();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              currentUser !== null ? (
                <Navigate replace to="/home" />
              ) : (
                <MainPage />
              )
            }
          />
          <Route
            path="/home"
            element={
              currentUser === null ? <Navigate replace to="/" /> : <HomePage />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/settings"
            element={
              currentUser === null ? (
                <Navigate replace to="/" />
              ) : (
                <SettingsPage />
              )
            }
          />
          <Route
            path="/new"
            element={
              currentUser === null ? (
                <Navigate replace to="/" />
              ) : (
                <NewPostPage />
              )
            }
          />
          <Route
            path="/profile"
            element={
              currentUser === null ? (
                <Navigate replace to="/" />
              ) : (
                <ProfilePage />
              )
            }
          />
        </Routes>
        {currentUserData !== null && loadingState === false ? <Sidebar /> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
