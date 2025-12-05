import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Basic SEO title
document.title = 'UI Component Explorer • Ocean Professional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
