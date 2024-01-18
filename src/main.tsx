import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.scss';
import './global.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('.root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
