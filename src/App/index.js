import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <Routes />
      </Router>
    </div>
  );
}
