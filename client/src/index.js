import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store'
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider>
    <Provider store={store} >
      <App />
    </Provider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
