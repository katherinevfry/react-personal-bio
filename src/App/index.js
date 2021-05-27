import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import '../styles/index.scss';

export default function App() {
  const [admin, setAdmin] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        setLoggedInUser(true);
      } else if (admin || admin === null) {
        setAdmin(false);
        setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <NavBar admin={admin}/>
          <Routes user={loggedInUser}
          admin={admin}
          />
      </Router>
    </div>
  );
}
