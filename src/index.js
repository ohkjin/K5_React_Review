import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//이곳에서 import React from 'react'하므로 나머지에서 필요가 없음
const root = ReactDOM.createRoot(document.getElementById('root')); //root: index.html의 div id
root.render(
    <App />
);