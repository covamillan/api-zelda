import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.scss';
import './global.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.querySelector('.root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
