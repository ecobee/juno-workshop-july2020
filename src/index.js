import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root')

Modal.setAppElement(rootElement)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);