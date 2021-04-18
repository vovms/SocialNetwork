import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Games from './components/Games/GamesContainer';
import Users from './components/Users/UsersContainer';

import { BrowserRouter, Route } from 'react-router-dom';
// import CrossesZero from './CrosesZero/CrossesZero';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        {/* <div> */}
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
          <Route path="/profile" render={() => <Profile/>} />
          <Route path="/games" render={() => <Games/>} />
          <Route path="/users" render={() => <Users/>} />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;