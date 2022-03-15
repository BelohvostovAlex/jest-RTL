import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';

import {storeRedux} from './store/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
