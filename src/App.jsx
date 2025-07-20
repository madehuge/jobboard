import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';      // Create this for Home content
import Login from './components/Login';    // Already created
import './App.css';

function App() {
  const location = useLocation();
  // Check if we are on the login page
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Optional: 404 Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

       {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
