import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'; // or './main.css' based on your structure

// or wherever your Tailwind/main CSS is

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
