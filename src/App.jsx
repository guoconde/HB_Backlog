import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResetStyle } from './assets/css/reset';
import { AuthProvider } from './context/authContext';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ResetStyle />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
