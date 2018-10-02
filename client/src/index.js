import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

ReactDOM.render((  
<BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
