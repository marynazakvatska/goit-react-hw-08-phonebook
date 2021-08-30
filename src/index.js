import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { persistor } from './redux/store';
import store from './redux/store';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      < PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

