import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDkj_fBwMpk3z3lLBOO6VcFgdzh6cV_UNA',
  authDomain: 'swole-c0f3e.firebaseapp.com',
  projectId: 'swole-c0f3e',
  storageBucket: 'swole-c0f3e.appspot.com',
  messagingSenderId: '257496020962',
  appId: '1:257496020962:web:e677e622deb23c9d736bbb',
  measurementId: 'G-QSQ9YTCQZF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
