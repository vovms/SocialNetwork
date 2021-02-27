import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CrossesZero from './CrosesZero/CrossesZero';


function App() {
  return (
    // <CrossesZero />
     
    <div className='app-wrapper'>
      < Header />
      <Navbar />
      <Profile />
    </div>
  );
      
}

export default App;