import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import firebaseConfig from './helpers/apiKeys';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/globalStyles';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
