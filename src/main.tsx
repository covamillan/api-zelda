import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.scss';
import './global.scss';

ReactDOM.createRoot(document.querySelector('.root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
