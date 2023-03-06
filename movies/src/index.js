import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Axios  from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
Axios.default.baseUrl = 'http://localhost:4000';
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
