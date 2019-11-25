import React from 'react';
import ReactDOM from 'react-dom';
import {BowserRouter} from "react-router-redux"
import {Provider} from "react-redux"
import App from './App';

ReactDOM.render(
  <Provider>
    <BowserRouter>
      <App />
    </BowserRouter>
  </Provider>
  , document.getElementById('root'));
