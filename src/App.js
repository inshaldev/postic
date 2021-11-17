import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';
import { SignUpPage } from './Pages/SignUpPage';
import './Styles/app.css';

function App() {
  return (
    <div className="App fl-col-cen-cen min-h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/postic" element={<MainPage />} exact />
          <Route path="/postic/login" element={<LoginPage />} />
          <Route path="/postic/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
