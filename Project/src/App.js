import './App.css';
import React from 'react';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orders from './components/Orders';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/o" element={<Orders />} />
          <Route path="/c" element={<Cart />} />
          <Route path="/p" element={<ProfilePage />} />
          <Route path="au" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter> 
    
    </div>
  );
}

export default App;