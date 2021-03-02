import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';
// import CrossesZero from './CrosesZero/CrossesZero';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        {/* <div> */}
          <Navbar />
        
        <div className='app-wrapper-content'>
          {/* <Route path="" component = {Profile}/> */}
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;