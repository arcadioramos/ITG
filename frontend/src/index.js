import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Users from './components/Users';
import Header from './components/Header';
import NavbarITG from './components/NavbarITG'
import CarouselITG from './components/CarouselITG';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header/>
      <NavbarITG/>
      <CarouselITG/>
      <Users/>
    </div>
    <h1>Arcadio Ramos React</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
